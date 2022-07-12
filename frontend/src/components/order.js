import React, {useEffect, useState} from 'react'
import axios from "axios"
import data from  './data/products.json';

function Order() {

    const [data1,setData]= useState();

    // useEffect(()=>{
    //     try {
    //                 let user = JSON.parse(localStorage.getItem('user'))
    //                 axios.post("http://localhost:9002/orderhistory", { id: user._id})
    //             .then(res => {
    //                 setData(res.data,[]);
    //                 //console.log(data1)
    //                 for(let i=0; i< data1.length ; i++){
    //                     for(let j=0; j<data.length; j++){
    //                         if(data[j].id === data1[i].item_id){
    //                             console.log(data[j].name)
    //                         }
    //                     }
    //                 }
    //             })
    //             } catch (err) {
    //                 console.error(err);
    //             }
    // },[])
    const sendPostRequest = async () => {
        try {
            let user = JSON.parse(localStorage.getItem('user'))
            axios.post("http://localhost:9002/orderhistory", { id: user._id})
        .then(res => {
            setData(res.data,[]);
            //console.log(data1)
            for(let i=0; i< data1.length ; i++){
                for(let j=0; j<data.length; j++){
                    if(data[j].id === data1[i].item_id){
                        console.log(data[j].name)
                    }
                }
            }
        })
        } catch (err) {
            console.error(err);
        }
    };
    
    sendPostRequest();
  return (
    <div>
      
    </div>
  )
}

export default Order
