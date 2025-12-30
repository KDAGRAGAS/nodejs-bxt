import {Request , Response} from "express";
import {getAllUsers, handleCreateUser} from "../services/user.service";


const getHomepage = async (req,res) =>{
    const users=await getAllUsers();
    console.log(users);
    return res.render('home',{
        users: users
    });
}
const getCreateUserPage = (req,res) =>{
    return res.render('create-user');
}
const postCreateUser = async (req,res) =>{
    console.log(req.body);
    const {fullName, email, exampletext} =req.body;
    console.log(fullName);
    await handleCreateUser(fullName,email,exampletext);
    return res.redirect('/');
}
export {getHomepage , getCreateUserPage, postCreateUser};