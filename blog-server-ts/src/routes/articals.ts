import { getKoaRouter } from "@/utils";
import Controller from "@/controller/artical";

const router = getKoaRouter();
const controller = new Controller();
router.prefix("/articals");

router.post("/page", controller.getList.bind(controller));
router.get("/:id", controller.getById.bind(controller));
router.del("/:id", controller.delete.bind(controller));
router.put("/", controller.update.bind(controller));
router.post("/", controller.create.bind(controller));

export default router;
