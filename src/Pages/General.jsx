// import React from "react";
import api_key from "../api_key";
import { useEffect } from "react";
const General = () => {
    useEffect(() => {
       fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`).then((rsp)=>{
        return rsp.json();
       }).then((rsp)=>{
        console.log(rsp);
       });
      },[]);
  return (
    <div>

    </div>
  );
};

export default General;