let appInsights = require("applicationinsights");
require("dotenv").config();

//adding app insight configuration based on env variable
if (process.env.ENABLE_APP_INSIGHTS_SERVER === "true") {
  appInsights
    .setup()
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true, true)
    .setUseDiskRetryCaching(true)
    .setSendLiveMetrics(false)
    .setDistributedTracingMode(appInsights.DistributedTracingModes.AI);
  appInsights.defaultClient.context.tags[
    appInsights.defaultClient.context.keys.cloudRole
  ] = "vad-ssr";
  appInsights.start();
}

const express = require("express");
const compression = require("compression");
const scProxy = require("@sitecore-jss/sitecore-jss-proxy").default;
const config = require("./config");
var https = require("https");
var fs = require("fs");

const server = express();
const PORT = process.env.PORT || 5000;
const Logger = require("./Logger");

// Do not delete these commented lines
const pfxStringArg = process.argv[2] || "";
const passphraseArg = process.argv[3] || "";

// enable gzip compression for appropriate file types
server.use(compression());

// adding prefetch (Disabling it as of now)
if (process.env.ENABLE_CDN_PUSH === "true") {
  var netjet = require("netjet");
  server.use(
    netjet({
      images: false,
    })
  );
}

// turn off x-powered-by http header
// server.settings["x-powered-by"] = false;

// Serve static app assets from local /dist folder
server.use(
  "/dist",
  express.static("dist", {
    fallthrough: false, // force 404 for unknown assets under /dist
    //setHeaders: setCustomCacheControl, //setting max age 1yr for static resources
  })
);

// function setCustomCacheControl(res, path) {
//   res.setHeader("Cache-Control", "public, max-age=31536000");
// }

server.get("/status", function (req, res) {
  const healthcheck = {
    status: 200,
    message: "OK",
    timestamp: Date.now(),
  };
  try {
    var forwardedIpsStr = req.header("x-forwarded-for");
    res.send(healthcheck);
  } catch (e) {
    Logger.error(`healthcheck.message = ${e}`);
    healthcheck.message = e;
  }
});

// For any other requests, we render app routes server-side and return them
server.use(
  "*",
  scProxy(
    config.serverBundle.renderView,
    config,
    config.serverBundle.parseRouteUrl
  )
);
// Do not delete these lines

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert"),
      // pfx: fs.readFileSync(pfxStringArg),
      // passphrase: `${passphraseArg}`,
    },
    server
  )
  .listen(PORT, function () {
    // console.log(`Example app listening on PORT ${PORT}! Go to https://localhost:${PORT}/`);
    Logger.error(
      `App listening on PORT ${PORT}! Go to https://localhost:${PORT}/`
    );
  });
