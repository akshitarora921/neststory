const express= require("express")
const router = express.Router()

const indexRouter = require("../model/index");
const usersLoginRouter = require("../model/userlogin");
const usersSignupRouter = require("../model/usersignup");
const newsRouter = require("../model/news")
const newsheaderRouter = require("../model/newsheader")
const bannerRouter = require("../model/banner");
const latestStoriesRouter = require("../model/latestStories");
const innovationRouter = require("../model/innovation");
const entrepreneurshipRouter = require("../model/entrepreneurship");
const videosRouter = require("../model/videos");



//routers
router.use("/", indexRouter);
router.use("/users/login", usersLoginRouter);
router.use("/users/signup", usersSignupRouter);
router.use("/news",newsRouter)
router.use("/newsheader", newsheaderRouter)
router.use("/banner", bannerRouter);
router.use("/lateststories", latestStoriesRouter);
router.use("/innovation", innovationRouter);
router.use("/entrepreneurship", entrepreneurshipRouter);
router.use("/videos", videosRouter);

module.exports = router