import axios from "axios";  
let baseURL;  
export const api = axios.create({   baseURL: "http://localhost:3001/", });  