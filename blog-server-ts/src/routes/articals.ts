import { getKoaRouter } from "@/utils";
import Controller from "@/controller/artical";

const router = getKoaRouter();
router.prefix("/articals");

router.get("/", Controller.getList);

export default router;
