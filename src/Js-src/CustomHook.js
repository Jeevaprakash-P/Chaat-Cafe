import React, { useEffect, useState } from 'react'
import axios from "axios"

export const GetHook = (url) => {

    let [data, setdata] = useState([])
    let [error, seterror] = useState("")
    let [Loadding, setLoadding] = useState(true)


    useEffect(() => {
        let GetData = async () => {
            try {
                let Respons = await axios.get(url)
                let data = Respons.data.map((element)=>{
                    return{...element , amount:element.price}
                })
                setdata(data)
            }
            catch (error) {
                seterror(error.message)
            }
            finally {
                setLoadding(false)
            }
        }
        GetData()
    },[])
  
    return { data, error, Loadding }
    
}