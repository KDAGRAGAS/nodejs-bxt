import express,{Express} from "express";
import {getHomepage, getCreateUserPage , postCreateUser} from "../controllers/user.controller";
const router = express.Router();

const webRouter= (app:Express) =>{
    router.get("/",getHomepage);
    router.get("/user", getCreateUserPage);
    router.post('/handle-create-user',postCreateUser);
    app.use("/",router);
}

export default webRouter;