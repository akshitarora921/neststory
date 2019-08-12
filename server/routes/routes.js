const express = require("express");
const router = express.Router();

const usersLoginRouter = require("../model/userlogin");
const usersSignupRouter = require("../model/usersignup");
const newsRouter = require("../model/news");
const newsheaderRouter = require("../model/newsheader");
const bannerRouter = require("../model/banner");
const latestStoriesRouter = require("../model/latestStories");
const innovationRouter = require("../model/innovation");
const entrepreneurshipRouter = require("../model/entrepreneurship");
const videosRouter = require("../model/videos");
const globalNewsRouter = require("../model/globalNews");
const launchpadRouter = require("../model/launchpad");
const mentorRouter = require("../model/mentor");
const checkauthRouter = require("../model/checkauth");
const subscriptionRouter = require("../model/subscription");

//routers
router.use("/global", globalNewsRouter);
router.use("/users/login", usersLoginRouter);
router.use("/users/signup", usersSignupRouter);
router.use("/news", newsRouter);
router.use("/newsheader", newsheaderRouter);
router.use("/banner", bannerRouter);
router.use("/lateststories", latestStoriesRouter);
router.use("/innovation", innovationRouter);
router.use("/entrepreneurship", entrepreneurshipRouter);
router.use("/videos", videosRouter);
router.use("/launchpad", launchpadRouter);
router.use("/mentor", mentorRouter);
router.use("/checktoken", checkauthRouter);
router.use("/subscription", subscriptionRouter);

module.exports = router;
