import express,{Express} from "express";
import {getHomepage, getCreateUserPage, postCreateUser, postDeleteUser,getViewUser,postUpdateUser} from "controllers/user.controller";
import {handleDeleteUser} from "services/user.service";
const router = express.Router();

const webRouter= (app:Express) =>{
    router.get("/",getHomepage);
    router.get("/user", getCreateUserPage);
    router.post('/handle-create-user',postCreateUser);
    router.post('/handle-delete-user/:id',postDeleteUser);
    router.get("/handle-view-user/:id",getViewUser);
    router.post("/handle-update-user/:id", postUpdateUser);
    app.use("/",router);
}

export default webRouter;