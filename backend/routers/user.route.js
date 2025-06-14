import express from 'express'
import { getAllUser, login, MyProfile, signUp } from '../controller/user.controller.js';
import { isAuthenticated } from '../middleware/AuthCheck.js';

const router=express.Router();

router.post("/signup",signUp)
router.post("/login",login)
router.post("/all-user",isAuthenticated,getAllUser)
router.post("/My-profile",isAuthenticated,MyProfile)


export default router