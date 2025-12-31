import {getConnection} from "config/database";
import {prisma} from "config/client";
const handleCreateUser= async (
    fullName:string
    , email:string,
    address:string) => {

    await prisma.user.create({
        data:{
            name:fullName,
            email:email,
            address:address
        }
    })


    console.log("them user thanh cong");
}

const getAllUsers=async ()=>{
    const users = await prisma.user.findMany()
    return users;
}

const handleDeleteUser= async (id: string) => {
    await prisma.user.delete({
        where:{
            id:+id
        }
    })
}
const getUserById= async (id: string) => {
    const user =await prisma.user.findUnique({
        where:{
            id:+id
        }
    });
    return user;
}

const UpdateUserById= async (id: string,email:string, address:string, fullName:string) => {
       const updatedUser= await prisma.user.update({
            where: {
                id:Number(id)
            },
            data:{
                email:email,
                address:address,
                name:fullName,
            }
        })
    console.log(updatedUser);
}
export {handleCreateUser, getAllUsers,handleDeleteUser,getUserById, UpdateUserById};