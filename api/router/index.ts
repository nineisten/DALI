import { Router } from "express";
import viewsRouter from "./views/viewRouter.ts";
import apiRouter from "./client/clientRouter.ts";
const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("Hello from the API!");
})
//begin Welcome Message
router.get("/hello", (req, res) => {
  res.status(200).send(`<h1>HTMX was here</h1><p>for more on HTMX visit</p><a href="http://htmx.org" target="_blank">HTMX.org</a>`)
});
//end welcome message
router.use("/views",viewsRouter)
router.use("/api",apiRouter)

export default router;