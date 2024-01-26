import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Note()
{
    var navigate=useNavigate()
    function Na(x)
{
    function dlt(){
        var data=JSON.parse(localStorage.getItem("deepaknetworknotes"))
        data = data.filter(obj => obj.title !== x.title)
        localStorage.setItem("deepaknetworknotes",JSON.stringify(data))
        navigate('/notes/note')
    }
return <div id="f2">
        <h2>{x.title}</h2>
        <p>{x.disc}</p>
        <span className="dlebtn" onClick={dlt}>delete</span>
    </div>
}

function d(x)
{
    return <Na 
    title={x.title}
    disc={x.disc}/>
}
if (localStorage.getItem("deepaknetworknotes")==null) {
    var data=[]
} else {
    var data=JSON.parse(localStorage.getItem("deepaknetworknotes"))
}
    
    return  <div id ="fll">{data.map(d)}</div>
}