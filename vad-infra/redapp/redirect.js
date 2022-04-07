import {
  bypassURLArray,
  vadLegacyLocales,
  redirectURLMap,
  countryLanguageMap,
  redirectCodeMap,
  Constants,
} from './constants'

class Redirect {
  constructor(value) {
    this._requestURL = value
    this._resultURL
    this._redirectURL
    this._statusCode = 301
    this._requestLanguageCode
    this._requestCountryCode
    this._redirectLanguageCode
    this._replacedPath
    this._flag = false
    this._req
  }

  setRequestURL(value) {
    this._requestURL = value
  }

  getRequestURL() {
    return this._requestURL
  }

  setResultURL(value) {
    this._resultURL = value
  }

  getResultURL() {
    return this._resultURL
  }

  setRedirectURL(value) {
    this._redirectURL = value
  }

  getRedirectURL() {
    return this._redirectURL
  }

  setStatusCode(value) {
    this._statusCode = value
  }

  getStatusCode() {
    return this._statusCode
  }

  setFlag(value) {
    this._flag = value
  }

  getFlag() {
    return this._flag
  }

  setRequestLanguageCode(value) {
    this._requestLanguageCode = value
  }

  getRequestLanguageCode() {
    return this._requestLanguageCode
  }

  setRequestCountryCode(value) {
    this._requestCountryCode = value
  }

  getRequestCountryCode() {
    return this._requestCountryCode
  }

  setRedirectLanguageCode(value) {
    this._redirectLanguageCode = value
  }

  getRedirectLanguageCode() {
    return this._redirectLanguageCode
  }
  setReplacedPath(value) {
    this._replacedPath = value
  }

  getReplacedPath() {
    return this._replacedPath
  }

  setReq(value) {
    this._req = value
  }

  getReq() {
    return this._req
  }

  /**
   * Grabs the cookie with name from the request headers
   * @param {Request} request incoming Request
   * @param {string} name of the cookie to grab
   */
  getCookie(request, name) {
    let result = ''
    const cookieString = request.headers.get('Cookie')
    if (cookieString) {
      const cookies = cookieString.split(';')
      cookies.forEach(cookie => {
        const cookieName = cookie.split('=')[0].trim()
        if (cookieName === name) {
          const cookieVal = cookie.split('=')[1]
          result = cookieVal
        }
      })
    }
    return result
  }

  /**
   *
   * Processes request URL to figure if it needs redirection
   */
  processURL() {
    let siteUrl
    //Find .aspx extension pattern
    const ext_regex = /\.aspx$/
    const ext_regexbh = /\.aspxbh$/
    const ext_regexor = /\.aspx&origin=venue$/

    siteUrl = this.getRequestURL()
    console.log('Request:' + siteUrl)
    let isOldUrl =
      ext_regex.exec(siteUrl.pathname) ||
      ext_regexbh.exec(siteUrl.pathname) ||
      ext_regexor.exec(siteUrl.pathname)
    console.log('Intital Pathname:' + siteUrl.pathname)

    // to handle visitor and event need to OR of pathname or pathname+search for bypassURLArray
    if (
      bypassURLArray.includes(siteUrl.pathname) ||
      bypassURLArray.includes(siteUrl.pathname + siteUrl.search)
    ) {
      isOldUrl = false
    }

    // Go into redirect handling only if old platform URL ... (has .aspx extension)
    //Except in case of bypass URLs
    if (isOldUrl) {
      //Perform 1 to 1 redirect
      this.replaceURL()

      const replaced_url = this.getRedirectURL()
      //Don't go into pattern based redirect if 1 to 1 redirect has happened.
      console.log(this.getStatusCode() + ' Final:' + replaced_url)
    } else {
      console.log('path:' + siteUrl.pathname)
      //Checking if its Homepage request
      if (siteUrl.pathname == Constants.SINGLE_SLASH) {
        console.log('HomePage request')
        this.setRedirectURL(new URL(this.performHomeRedirect()))
        this.setStatusCode(302)
        this.setFlag(true)
        console.log('redirect status:' + this.getFlag())
      }
      //New platform URL
      else {
        //Remove trailing slashes from platform URLs(Except Home page above) and redirect
        if (siteUrl.href.endsWith(Constants.SINGLE_SLASH)) {
          siteUrl = new URL(siteUrl.href.slice(0, -1))
          this.setStatusCode(301)
          this.setFlag(true)
        }

        //en-gb,ar-ae and zh-cn handling for VAD 1.2+
        const regex = /^\/(?<locale>[a-z]*-?[a-z]{2})/
        let groups = siteUrl.pathname.match(regex).groups
        if (groups && vadLegacyLocales.includes(groups.locale)) {
          siteUrl = new URL(
            siteUrl.href.replace(
              groups.locale,
              redirectCodeMap[groups.locale][1],
            ),
          )
          this.setStatusCode(301)
          this.setFlag(true)
        }
        //Don't go into rediecting further
        this.setRedirectURL(siteUrl)
      }

      console.log('redirect status:' + this.getFlag())
      console.log(
        ' Skipping Cloudflare redrect logic for:' + this.getRedirectURL().href,
      )
    }
    return
  }

  /* Check is this URL is in 1 to 1 redirect map else go into rediret logic...*/

  /**
   * Performs 1 to 1 redirect
   * @param {Redirect} redirect
   */
  replaceURL() {
    //Regular Expression to extract LanguageCode
    const regex = /^\/([a-z]*)-?(?<lngcode>[a-z]{2})/

    //Regular expression to fix .aspx&origin=venue type extensoins
    const ext_regexor = /\.aspx&origin=venue$/
    const ext_regexvenueor = /\.venue.aspx&origin=venue$/

    const redirectURL = this.getRequestURL()
    console.log('in' + redirectURL.href)

    //Remove protocol and domain and get Path to work upon
    let urlPath = redirectURL.pathname

    let groups = urlPath.match(regex).groups

    //Remove language code from path
    let path = urlPath.replace(regex, '')
    console.log('Modified Path after language removal:' + path)

    //Note:Maintain this order of replacement else this might break replacement code for venue and orgin replacements
    //Remove .venue.aspx&origin=venue
    path = path.replace(ext_regexvenueor, '.aspx')
    console.log('Modified Path after .venue.aspx&origin=venue removal:' + path)

    //Remove &origin=venue
    path = path.replace(ext_regexor, '.aspx')
    console.log('Modified Path after &origin=venue removal:' + path)

    //Add search params in URL back to path if any
    path += redirectURL.search

    //Convert to lowercase before matching
    path = path.toLowerCase()

    //Get Redirect Path
    let replacePath = redirectURLMap[path]
    console.log('replacePath:' + replacePath)

    let redirectMap = redirectCodeMap[groups.lngcode]
    if (redirectMap) {
      //Set Redirect Language Site
      this.setRedirectLanguageCode(redirectMap[1])

      //Set Redirect Code
      this.setStatusCode(redirectMap[0])
    } else {
      this.setRedirectLanguageCode(redirectCodeMap['en'][1])
      this.setStatusCode(301)
    }

    if (replacePath) {
      //Final path
      replacePath = this.concatPath(this.getRedirectLanguageCode(), replacePath)
      console.log('Final:' + replacePath)

      // redirect.pathname = redirect;

      this.setFlag(true)
      this.setRedirectURL(
        new URL(
          redirectURL.protocol +
            Constants.DOUBLE_SLASH +
            redirectURL.host +
            replacePath,
        ),
      )
    }
    return

    /*else {
      //Take user to home page if old page not found
      console.log('Redirecting to home instead of 404 for ' + urlPath)
      replacePath = this.concatPath(this.getRedirectLanguageCode(), '')
      console.log('Final:' + replacePath)

      //console.log(replacePath);
      //redirectURL.pathname = replacePath;
      this.setFlag(true)
      this.setRedirectURL(
        new URL(
          redirectURL.protocol +
            Constants.DOUBLE_SLASH +
            redirectURL.host +
            replacePath,
        ),
      )
      return
    }*/
  }

  /**
   * Obtains two input paths and concatenates them and adjusts / accordingly
   *
   * @param {String} lngPath
   * @param {String} levelPath
   */

  concatPath(lngPath, levelPath) {
    if (lngPath && levelPath) {
      lngPath = Constants.SINGLE_SLASH + lngPath
      return lngPath + levelPath
    }

    if (levelPath) {
      return levelPath
    }

    if (lngPath) {
      lngPath = Constants.SINGLE_SLASH + lngPath
      return lngPath
    }
    return ''
  }
  /**
   * Redirects to appropriate language site based on country on HomePage request
   *
   */

  performHomeRedirect() {
    const cookieName = '_lngpreference'
    let language = ''
    let url = ''

    let curURL = this.getRequestURL()
    console.log('Request:' + curURL)
    //Remove any searchParams from main domain request
    let requestURL = curURL.protocol + Constants.DOUBLE_SLASH + curURL.host

    const cookieVal = this.getCookie(this.getReq(), cookieName)

    //Redirect based on User Preference in Cookie

    if (cookieVal && cookieVal in redirectCodeMap) {
      // respond with the cookie value
      //return new Response(cookie)
      language = redirectCodeMap[cookieVal][1]
      console.log('cookie found:' + cookieVal)
      console.log(requestURL + Constants.SINGLE_SLASH + language)
      return requestURL + Constants.SINGLE_SLASH + language
    }

    //Redirect Language based on User Country
    const country = this.getRequestCountryCode()
    console.log('Country is:' + country)
    if (country != null && country in countryLanguageMap) {
      language = countryLanguageMap[country]
      //return new Response(cookie)
      return requestURL + Constants.SINGLE_SLASH + language
    }

    //Redirect to Chinese languag in case domain is .cn
    if (curURL.host.indexOf('.cn') > 0) {
      language = countryLanguageMap['CN']
      return requestURL + Constants.SINGLE_SLASH + language
    }
    console.log(requestURL + Constants.SINGLE_SLASH + countryLanguageMap['INT'])
    return requestURL + Constants.SINGLE_SLASH + countryLanguageMap['INT']
  }
  /**
   * Force to Chinese domain if user request is coming from China,HongKong or Singapore
   *
   */

  setChineseDomain() {
    let curURL = new URL(this.getReq().url)
    let newHost = curURL.host.replace('.ae', '.cn')
    this.setRequestURL(
      new URL(
        curURL.protocol +
          Constants.DOUBLE_SLASH +
          newHost +
          curURL.pathname +
          curURL.search,
      ),
    )
    this.setStatusCode(302)
    this.setFlag(true)
    return
  }
  /**
   * Function to swap url based on parameters passed
   *
   */

  swapDomain(from, to) {
    let curURL = new URL(this.getReq().url)
    let newHost = curURL.host.replace(from, to)
    this.setRequestURL(
      new URL(
        curURL.protocol +
          Constants.DOUBLE_SLASH +
          newHost +
          curURL.pathname +
          curURL.search,
      ),
    )
    this.setStatusCode(301)
    this.setFlag(true)
    return
  }
}
export default Redirect
