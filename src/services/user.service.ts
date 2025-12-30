import {getConnection} from "../config/database";

const handleCreateUser= async (
    fullName:string
    , email:string,
    exampletext:string) => {

    const connection = await getConnection();

    try{
        const sqlquery = 'INSERT INTO `users`(`name`, `email`,`address`) VALUES (?,?,?)';
        const values =[fullName, email, exampletext];

        const[result, fields] = await connection.execute(sqlquery, values);
        return result;
    }
    catch(err){
        console.log(err);
    }


    console.log("them user thanh cong");
}

const getAllUsers=async ()=>{
    const connection =await getConnection();
    try{
const [result, fields] =await connection.query('SELECT * FROM users');
    return result;
    }
    catch(err){
    console.log(err);
    return [];
    }
}
export {handleCreateUser, getAllUsers};