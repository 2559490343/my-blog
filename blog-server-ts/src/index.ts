import app from "./app";
import http from "http";
import chalk from "chalk";
import config from "~/config";

const normalizePort = (port: number | string) => {
  const _port = parseInt(port as string, 10);
  if (isNaN(_port)) {
    // named pipe
    return port;
  }
  if (_port >= 0) {
    // port number
    return _port;
  }
  return false;
};

const port = normalizePort(process.env.PORT ?? config.port);

const server = http.createServer(app.callback());

const onError = (error: Error) => {
  // if (error.syscall !== "listen") {
  //   throw error;
  // }
  console.log("error---", error);

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  // handle specific listen errors with friendly messages
  switch (error.name) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr!.port;
  console.log(chalk.yellow("server started. listening on", bind));
};

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
