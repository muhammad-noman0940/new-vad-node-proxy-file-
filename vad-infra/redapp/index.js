import Redirect from './redirect'
import { Constants, chineseCountryArray } from './constants'

addEventListener('fetch', event => {
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request))
})

/*Child page handling */
//const c_regex=/[^\/]+$/g; // One or more characters that not forward slashes

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  let reqURL = new URL(request.url)
  let country = request.headers.get('cf-ipcountry')
  //let requestHeaders = JSON.stringify([...request.headers], null, 2)
  //console.log('Request headers:' + requestHeaders)

  let redirectInstance = new Redirect(reqURL)
  redirectInstance.setReq(request)
  redirectInstance.setRequestCountryCode(country)

  // Check if we need force user to Chinese domain
  if (
    (reqURL.host.indexOf('.ae') > 0 &&
      country != null &&
      chineseCountryArray.includes(country)) ||
    reqURL.searchParams.has('testdom')
  ) {
    redirectInstance.swapDomain('.ae', '.cn')
    //Set reqURL so that it matches downstream
    reqURL = redirectInstance.getRequestURL()
  } else if (
    reqURL.host.indexOf('.cn') > 0 &&
    country != null &&
    !chineseCountryArray.includes(country)
  ) {
    redirectInstance.swapDomain('.cn', '.ae')
    //Set reqURL so that it matches downstream
    reqURL = redirectInstance.getRequestURL()
  }

  redirectInstance.processURL()

  //Check if redirect is actually needed.
  if (redirectInstance.getFlag()) {
    let url = redirectInstance.getRedirectURL().href.toString()
    console.log(url)
    return Response.redirect(
      redirectInstance.getRedirectURL().href,
      redirectInstance.getStatusCode(),
    )
  }

  //Rewrite for SiteMap URL

  if (reqURL.pathname == '/sitemap.xml') {
    let siteMapURL
    // Set domain specific sitemaps
    if (reqURL.host.indexOf('.cn') > 0) {
      siteMapURL = new URL(
        reqURL.protocol +
          Constants.DOUBLE_SLASH +
          reqURL.host +
          Constants.SITEMAP_PATH_CN,
      )
    } else {
      siteMapURL = new URL(
        reqURL.protocol +
          Constants.DOUBLE_SLASH +
          reqURL.host +
          Constants.SITEMAP_PATH_AE,
      )
    }

    const cacheKey = new Request(siteMapURL.toString(), request)
    console.log('sitemap url:' + siteMapURL.toString())
    return getResponse(cacheKey)
  }

  //Rewrite for Robots
  if (reqURL.pathname == '/robots.txt') {
    let robotsFileURL
    // Set domain specific robots.txt
    if (reqURL.host.indexOf('.cn') > 0) {
      robotsFileURL = new URL(
        reqURL.protocol +
          Constants.DOUBLE_SLASH +
          reqURL.host +
          Constants.ROBOTS_PATH_CN,
      )
    } else {
      robotsFileURL = new URL(
        reqURL.protocol +
          Constants.DOUBLE_SLASH +
          reqURL.host +
          Constants.ROBOTS_PATH_AE,
      )
    }
    const cacheKey = new Request(robotsFileURL.toString(), request)
    console.log('robots url:' + robotsFileURL.toString())
    return getResponse(cacheKey)
  }

  const cacheKey = new Request(reqURL.toString(), request)
  console.log('Go-ahead to platform')
  return getResponse(cacheKey)
}

async function getResponse(req) {
  const cache = caches.default
  // Get this request from this zone's cache
  let response = await cache.match(req)
  if (!response) {
    //if not in cache, grab it from the origin
    console.log('cache miss')
    response = await fetch(req)
  }

  return addHeaders(req, response)
  //return response;
}

async function addHeaders(request, response) {
  // File is not text/html. Pass request through.
  if (
    response.headers.has('Content-Type') &&
    response.headers.get('Content-Type').includes('text/html')
  ) {
    const reqURL = new URL(request.url)
    // Copy Response object so that we can edit headers.
    let res = new Response(response.body, response)

    // Check for cookie.
    let cookies = request.headers.get('Cookie') || ''

    if (cookies.includes('_country=')) {
      // Return on to client.
      return res
    }

    // Get Country from header.
    let country = request.headers.get('cf-ipcountry')
    console.log('country' + country)

    //Test from China
    if (reqURL.searchParams.has('testchina')) {
      country = 'CN'
    }

    if (country != null) {
      res.headers.set('Set-Cookie', '_country=' + country + ';Secure')
    }

    return res
  }

  // Just pass non html requests through
  return response
}
