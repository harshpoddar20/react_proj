import { useState,useEffect } from "react"

//we are creatin our own hooks and ten calin it in app.jsx
//tis is the hook of creatin the currecy and we are callin an api

function useCurrecyInfo(currency){

    //*******tis will allow us to fetc te data from api evertime it is called

    const[data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])

    console.log(data);
    return data
}

export default useCurrecyInfo;
