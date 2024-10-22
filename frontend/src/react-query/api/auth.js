import { authAxios , unAuthAxios } from "../axios";

export async function  login(data) {

        const response =    await unAuthAxios.post('/auth/login' , data)
     

        // if(response.data.success)  return response.data.data;
        console.log(response.data)
        console.log(response.data.detail)
        localStorage.setItem("profile" , JSON.stringify(response.data.detail))
        
        // else{
        //     console.log("Wrong email id or password")
        //     return null;    
        // }
    

  return response.data;
  
}

export async function register(data) {
  const response =    await unAuthAxios.post('/auth/register' , data)
  console.log(response.data.data)

}