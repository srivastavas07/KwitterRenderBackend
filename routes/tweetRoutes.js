import isAuthenticated from "../config/auth.js";
import { ChatBot, analyseSentiment } from "../controllers/sentimentAnalysis.js";
import {createTweet, deleteTweet, getAllTweets, getFollowingTweets, likeOrDislike,getUserTweets, getLikedUsers, getTweetComments, TweetReply} from "../controllers/tweetController.js";
import express from "express";
const router = express.Router();
router.route("/create").post(isAuthenticated,createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
//put method is used for updating something..
router.route("/likeOrDislike/:id").put(isAuthenticated,likeOrDislike);
router.route("/allTweets/:id").get(isAuthenticated,getAllTweets);
router.route("/followingTweets/:id").get(isAuthenticated,getFollowingTweets);
router.route("/userTweets/:id").get(isAuthenticated,getUserTweets);
router.route("/analyseSentiment").get(isAuthenticated,analyseSentiment);
router.route("/likedUsers/:id").get(isAuthenticated, getLikedUsers);
router.route("/comments/:id").get(isAuthenticated,getTweetComments);
router.route("/reply").post(isAuthenticated,TweetReply);
router.route("/chat-bot").get(isAuthenticated,ChatBot);


// router.route("/create").post(createTweet);
// router.route("/delete/:id").delete(deleteTweet);
// //put method is used for updating something..
// router.route("/likeOrDislike/:id").put(likeOrDislike);
// router.route("/allTweets/:id").get(getAllTweets);
// router.route("/followingTweets/:id").get(getFollowingTweets);
// router.route("/userTweets/:id").get(getUserTweets);
// router.route("/analyseSentiment").get(analyseSentiment);
// router.route("/likedUsers/:id").get(getLikedUsers);
// router.route("/comments/:id").get(getTweetComments);
// router.route("/reply").post(TweetReply);
// router.route("/chat-bot").get(ChatBot);
export default router;
