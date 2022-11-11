import { getKoaRouter } from "@/utils";
import Controller from "@/controller/artical";

const router = getKoaRouter();
const controller = new Controller();
router.prefix("/articals");

router.post("/page", controller.getList);
router.get("/:id", controller.getById);
router.del("/:id", controller.delete);
router.put("/", controller.update);
router.post("/", controller.create);

export default router;
