import { Router } from "express";
import { siteInfo } from "../data/content.js";

export const metaRouter = Router();

metaRouter.get("/", (_req, res) => {
  res.json({
    brand: siteInfo.brand,
    contact: {
      email: siteInfo.email,
      phone: siteInfo.phone,
      location: siteInfo.location,
    },
  });
});
