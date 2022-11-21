import { getKoaRouter } from "@/utils";
import fs from "fs";
import path from "path";

const router = getKoaRouter({ prefix: "/blog-server" });
const files = fs.readdirSync(__dirname);

files.forEach((name) => {
  const fileName = name.substring(0, name.length - 3);
  const file = require(path.join(__dirname, name));
  if (fileName !== "index") {
    router.use(
      `/${fileName}`,
      file.default.routes(),
      file.default.allowedMethods()
    );
  }
});

export default router;
