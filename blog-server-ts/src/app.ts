import Koa from "koa";
import json from "koa-json";
import bodyparser from "koa-bodyparser";
import logger from "koa-logger";
import routers from "./routes";
import DBPool from "./utils/db";

const app = new Koa();

DBPool.init();

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
// app.use(logger((str, args) => {
//   // redirect koa logger to other output pipe
//   // default is process.stdout(by console.log function)
//   console.log('str--',str);
//   console.log('args--',args);
// }))
app.use(logger());
app.use(require("koa-static")(process.cwd() + "/public"));
// routers
app.use(routers.routes()).use(routers.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

export default app;
