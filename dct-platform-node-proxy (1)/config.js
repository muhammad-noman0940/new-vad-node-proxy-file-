const fs = require("fs");
const ipaddr = require("ipaddr.js");
const fetch = require("node-fetch");
const NodeCache = require("node-cache");
const Logger = require("./logger");

// We keep a cached copy of the site dictionary for performance. Default is 60 seconds.
const dictionaryCache = new NodeCache({ stdTTL: 60 });

/**
 * The JSS application name defaults to providing part of the bundle path as well as the dictionary service endpoint.
 * If not passed as an environment variable or set here, any application name exported from the bundle will be used instead.
 */
let appName = process.env.SITECORE_JSS_APP_NAME || "vad";

/**
 * The server.bundle.js file from your pre-built JSS app
 */
const bundlePath =
  process.env.SITECORE_JSS_SERVER_BUNDLE || `./dist/${appName}/server.bundle`;

const serverBundle = require(bundlePath);

appName = appName || serverBundle.appName;
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const appConfig = {
  sitecoreApiHost: process.env.SITECORE_API_HOST || `http://localhost:${port}`,
  sitecoreApiKey:
    process.env.SITECORE_API_KEY || "{05DF4B0A-5DCF-446C-9DF4-239D49CC265F}",
  apiHost: process.env.API_HOST || "https://devapi.vadsc.in",
  widgetUrl: process.env.WIDGET_PAGE_URL || "/where-to-go",
  flightSearch:
    process.env.FLIGHT_SEARCH || "http://flights.vadsc.in/{0}/flights/search/",
  hotelSearch:
    process.env.HOTEL_SEARCH ||
    "https://hotels.vadsc.in/?a_aid=44509&brandid=560850",
  appInsightsInstrumentationKey:
    process.env.APPINSIGHTS_INSTRUMENTATIONKEY ||
    "3aa11bab-7f74-4f5f-b673-97b59fe3ce0a",
  jssAppName: process.env.SITECORE_JSS_APP_NAME || "vad",
  defaultLanguage: process.env.DEFAULT_LANGUAGE || "en",

  SITECORE_API_HOST: process.env.SITECORE_API_HOST,
  SITECORE_API_KEY: process.env.SITECORE_API_KEY,
  LIVE_WEATHER_API: `${process.env.API_HOST}${process.env.LIVE_WEATHER_API}`,
  EVENT_API: `${process.env.API_HOST}${process.env.EVENT_API}`,
  AUTO_COMPLETE: `${process.env.API_HOST}${process.env.AUTO_COMPLETE}`,
  AUTO_COMPLETE_WEGO: `${process.env.API_HOST}${process.env.AUTO_COMPLETE_WEGO}`,
  AUTO_COMPLETE_TRAVEL_PAYOUT: `${process.env.API_HOST}${process.env.AUTO_COMPLETE_TRAVEL_PAYOUT}`,
  SOLR_FILTERS_DATA: `${process.env.API_HOST}${process.env.SOLR_FILTERS_DATA}`,
  SOLR_SEARCH_API: `${process.env.API_HOST}${process.env.SOLR_SEARCH_API}`,
  SMART_LIST_API: `${process.env.API_HOST}${process.env.SMART_LIST_API}`,
  FORM_SUBMISSION_API: `${process.env.API_HOST}${process.env.FORM_SUBMISSION_API}`,
  NEWSLETTER_SUBSCRIPTION_API: `${process.env.API_HOST}${process.env.NEWSLETTER_SUBSCRIPTION_API}`,
  SIMILAR_SEARCH_API: `${process.env.API_HOST}${process.env.SIMILAR_SEARCH_API}`,
  TRIP_ADVISOR_API: `${process.env.API_HOST}${process.env.TRIP_ADVISOR_API}`,
  GOOGLE_PLACES_API: `${process.env.API_HOST}${process.env.GOOGLE_PLACES_API}`,
  TINT_API: `${process.env.API_HOST}${process.env.TINT_API}`,
  ADVANCE_SEARCH_API: `${process.env.API_HOST}${process.env.ADVANCE_SEARCH_API}`,
  RFP_API: `${process.env.API_HOST}${process.env.RFP_API}`,
  RFP_API_VIRUS_CHECK: `${process.env.API_HOST}${process.env.RFP_API_VIRUS_CHECK}`,
  COMPETITION_FORM_API: `${process.env.API_HOST}${process.env.COMPETITION_FORM_API}`,
  PRELOAD_LINK_MEGAMENU_IMAGE: process.env.PRELOAD_LINK_MEGAMENU_IMAGE,
  NO_RETINA_MEGANAV: process.env.NO_RETINA_MEGANAV,
  PRELOAD_3PARTY_LINKS:
    process.env.PRELOAD_3PARTY_LINKS && `${process.env.PRELOAD_3PARTY_LINKS}`,
  ENABLE_APP_INSIGHTS_SERVER: process.env.ENABLE_APP_INSIGHTS_SERVER,
  ENABLE_APP_INSIGHTS_CLIENT: process.env.ENABLE_APP_INSIGHTS_CLIENT,
  ADD_TO_CALENDER_API: `${process.env.API_HOST}${process.env.ADD_TO_CALENDER_API}`,
  GOOGLE_ADD_TO_CALENDER_URL: `${process.env.GOOGLE_ADD_TO_CALENDER_URL}`,
};

/**
 * @type {ProxyConfig}
 */
const config = {
  /**
   * The require'd server.bundle.js file from your pre-built JSS app
   */
  serverBundle,
  /**
   * apiHost: your Sitecore instance hostname that is the backend for JSS
   * Should be https for production. Must be https to use SSC auth service,
   * if supporting Sitecore authentication.
   */
  apiHost: process.env.SITECORE_API_HOST || "https://localhost:4000",
  /**
   * layoutServiceRoot: The path to layout service for the JSS application.
   * Some apps, like advanced samples, use a custom LS configuration,
   * e.g. /sitecore/api/layout/render/jss-advanced-react
   */
  layoutServiceRoute:
    process.env.SITECORE_LAYOUT_SERVICE_ROUTE ||
    "/sitecore/api/layout/render/jss",
  /**
   * apiKey: The Sitecore SSC API key your app uses.
   * Required.
   */
  apiKey:
    process.env.SITECORE_API_KEY ||
    serverBundle.apiKey ||
    "{YOUR API KEY HERE}",
  /**
   * pathRewriteExcludeRoutes: A list of absolute paths
   * that are NOT app routes and should not attempt to render a route
   * using SSR. These route prefixes are directly proxied to the apiHost,
   * allowing the proxy to also proxy GraphQL requests, REST requests, etc.
   * Local static assets, Sitecore API paths, Sitecore asset paths, etc should be listed here.
   * URLs will be encoded, so e.g. for a space use '%20' in the exclude.
   *
   * Need to perform logic instead of a flat list? Remove this and use
   * pathRewriteExcludePredicate function instead: (url) => boolean;
   */
  pathRewriteExcludeRoutes: [
    "/dist",
    "/assets",
    "/sitecore/api",
    "/api",
    "/-/jssmedia",
    "/-/media",
    "/layouts/system",
  ].concat((process.env.SITECORE_PATH_REWRITE_EXCLUDE_ROUTES || "").split("|")),
  /**
   * Writes verbose request info to stdout for debugging.
   * Must be disabled in production for reasonable performance.
   */
  debug:
    (process.env.SITECORE_ENABLE_DEBUG || "").toLowerCase() === "true" || false,
  /**
   * Maximum allowed proxy reply size in bytes. Replies larger than this are not sent.
   * Avoids starving the proxy of memory if large requests are proxied.
   * Default: 10MB
   */
  maxResponseSizeBytes: 10 * 1024 * 1024,
  /**
   * Options object for http-proxy-middleware. Consult its docs.
   */
  proxyOptions: {
    // Setting this to false will disable SSL certificate validation
    // when proxying to a SSL Sitecore instance.
    // This is a major security issue, so NEVER EVER set this to false
    // outside local development. Use a real CA-issued certificate.
    secure: process.env.NODE_ENV === "development" ? false : true,
    /**
     * Add the original client IP as a header for Sitecore Analytics and GeoIP.
     * We could use the xfwd option of http-proxy, but express will use ipv6 formatted
     * IPs by default and there are reported issues using ipv6 with GeoIP.
     */
    onProxyReq: (proxyReq, req, res) => {
      let ipv4 = ipaddr.process(req.ip).toString(); // strip ipv6 prefix added by node/express
      if (ipv4 === "::1") {
        ipv4 = "127.0.0.1";
      }
      var forwardedIpsStr = req.header("X-Forwarded-For");
      Logger.error(`Request header ${req}!`);
      Logger.error(`Request header : forwardedIpsStr  ${forwardedIpsStr}!`);

      proxyReq.setHeader("X-Forwarded-For", forwardedIpsStr || ipv4);

      // because this is a proxy, all headers are forwarded on to the Sitecore server
      // but, if we SSR we only understand how to decompress gzip and deflate. Some
      // modern browsers would send 'br' (brotli) as well, and if the Sitecore server
      // supported that (maybe via CDN) it would fail SSR as we can't decode the Brotli
      // response. So, we force the accept-encoding header to only include what we can understand.
      if (req.headers["accept-encoding"]) {
        proxyReq.setHeader("Accept-Encoding", "gzip, deflate");
      }
    },
  },
  /**
   * Custom error handling in case our app fails to render.
   * Return null to pass through server response, or { content, statusCode }
   * to override server response.
   *
   * Note: 404s are not errors, and will have null route data + context sent to the JSS app,
   * so the app can render a 404 route.
   */
  onError: (err, response) => {
    Logger.error({ response: response.statusCode, err });
    // http 200 = an error in rendering; http 500 = an error on layout service
    if (response.statusCode !== 500 && response.statusCode !== 200) return null;

    return {
      statusCode: 500,
      content: fs.readFileSync("error.html", "utf8"),
    };
  },
  createViewBag: (request, response, proxyResponse, layoutServiceData) => {
    // fetches the dictionary from the Sitecore server for the current language so it can be SSR'ed
    // has a default cache applied since dictionary data is quite static and it helps rendering performance a lot
    if (
      !layoutServiceData ||
      !layoutServiceData.sitecore ||
      !layoutServiceData.sitecore.context
    ) {
      return {};
    }

    const language = layoutServiceData.sitecore.context.language || "en";
    const site =
      layoutServiceData.sitecore.context.site &&
      layoutServiceData.sitecore.context.site.name;

    if (!site) {
      return {};
    }

    // const locationHost = request.headers.host; // visitabudhabi.ae or .cn etc
    // const locationHostArr = locationHost && locationHost.split("."); //[visitabudhabi, ae]
    // const domainCode =
    //  locationHostArr && locationHostArr[locationHostArr.length - 1]; //ae
    // const domainCodeCN = domainCode && domainCode.toLowerCase() === "cn";
    // const cacheKey = `${domainCode}_${site}_${language}`; //ae_vad-web-apim_en-GB, ae_vad-web-apim_zh-cn, cn_vad-web-apim_zh-cn

    const cacheKey = `${site}_${language}`;
    appConfig.appOrigin = `https://${request.headers.host}`;
    const cached = dictionaryCache.get(cacheKey); //viewBag

    //if (cached) return Promise.resolve(cached);

    if (cached) {
      //viewbag
      let cachedViewBag = {
        ...cached,
        requestHeader: request.headers,
        appConfig,
      };
      return Promise.resolve(cachedViewBag);
    }

    return fetch(
      `${config.apiHost}/sitecore/api/jss/dictionary/${appName}/${language}?sc_apikey=${config.apiKey}`
    )
      .then((result) => result.json())
      .then((json) => {
        const viewBag = {
          dictionary: json && json.phrases,
          requestHeader: request.headers,
          appConfig,
        };

        dictionaryCache.set(cacheKey, viewBag);
        return viewBag;
      });
  },
};

module.exports = config;
