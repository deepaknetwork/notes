import React, { useState } from "react";
import ReactDOM  from "react-dom";

export default function Add()
{

   var [t,sett]=useState('');
   var [d,setd]=useState('');
   if (localStorage.getItem("deepaknetworknotes")==null) {
    var data=[]
} else {
    var data=JSON.parse(localStorage.getItem("deepaknetworknotes"))
}
function a(e)
{
    sett(e.target.value);
}
function b(e)
{
    setd(e.target.value);
}
function add()
{
    if(t!=''&&t!='Title'&&d!=''&&d!='Discription'){
   data.push({title:t,
    disc:d})
    localStorage.setItem("deepaknetworknotes",JSON.stringify(data))
    alert("note added");
    sett(t="Title");
    setd(d="Discription");
    }
    else{
        alert("fill the title and discription")
    }
}





    return <div id="fl">
    <div id="f3">
        <h1>ADD NOTE</h1>
        <input id="t" onChange={a} placeholder="Title" value={t}></input>
        <input id="t1" onChange={b} placeholder="Discription" value={d}></input>
        <button id="b" onClick={add}>add</button>
    </div>
    </div>
}