import { getKoaRouter } from "@/utils";

const router = getKoaRouter();

router.get("/", (ctx) => {
  ctx.body = "user1111";
});

export default router
