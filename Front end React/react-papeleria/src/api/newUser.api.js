import axios from "axios";

export const NewUser=async(formData)=>{
    return await axios.post("http://127.0.0.1:8000/user/",formData)
}