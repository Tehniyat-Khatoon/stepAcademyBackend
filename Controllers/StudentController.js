import   { createDataService, getStudentServices } from "../Services/studentServices.js";


 const createData= async(req,res)=>{
    let {name,email,message} =req.body
 const data= await createDataService(name,email,message)
 console.log(data);
 console.log(res);
 res.json({data})

} 

const getData = async(req,res)=>{
   const data = await getStudentServices()
   res.json({data})
}

 
 

export  {createData,getData}
