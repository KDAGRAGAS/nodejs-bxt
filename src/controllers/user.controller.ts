import {Request , Response} from "express";
import {getAllUsers, handleCreateUser, handleDeleteUser, getUserById, UpdateUserById} from "services/user.service";


const getHomepage = async (req,res) =>{
    const users=await getAllUsers();
    //console.log(users);
    return res.render('home',{
        users: users
    });
}
const postDeleteUser = async (req,res) =>{
   //console.log(req.body);
    const {id}=req.params;
    await handleDeleteUser(id);
    return res.redirect('/');
}
const getCreateUserPage = (req,res) =>{
    return res.render('create-user');
}
const postCreateUser = async (req,res) =>{
    //console.log(req.body);
    const {fullName, email, exampletext} =req.body;
    //console.log(fullName);
    await handleCreateUser(fullName,email,exampletext);
    return res.redirect('/');
}
const getViewUser = async (req,res) =>{
    const {id} = req.params;
    const user= await getUserById(id);
    console.log(user);
    return res.render('view-user',{id:id,user:user});
}

const postUpdateUser = async (req,res) =>{
    const {id, email,address,fullName} = req.body;
    await UpdateUserById(id,email,address,fullName);
    res.redirect('/');
}
export {getHomepage , getCreateUserPage, postCreateUser,postDeleteUser,getViewUser, postUpdateUser};