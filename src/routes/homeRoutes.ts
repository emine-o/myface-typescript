import express from "express";

const router = express.Router();

router.get("/", async (request, response) => {
    return response.render("home_page");
  });

  export default router;