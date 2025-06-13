import express from 'express'
import { getAllUser, login, signUp } from '../controller/user.controller.js';
import { isAuthenticated } from '../middleware/AuthCheck.js';

const router=express.Router();

router.post("/signup",signUp)
router.post("/login",login)
router.post("/all-user",isAuthenticated,getAllUser)


export default router