import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {res.status(200).send(`hello from server`)})
router.get("/hello", (req, res) => {
  res.status(200).send(`<h1>HTMX was here</h1><p>for more on HTMX visit</p><a href="http://htmx.org" target="_blank">HTMX.org</a>`)
});


export default router;