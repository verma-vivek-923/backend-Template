import React from 'react'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"http://localhost:4500/",
    withCredentials:true,
    headers:{
        contentType:"application/json"
    }
})

export default axiosInstance