import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Routes,Route,Link}from "react-router-dom"
import Home from "./pages/home";
import Note from "./pages/note";
import Add from "./pages/add";

export default function App()
{
    return <Router>
        <header>
            <Link id="w"to="/notes/home">HOME</Link>
            <Link id="w" to="/notes/add">ADD</Link>
            <Link id="w" to="/notes/note">NOTE</Link>
        </header>
        <Routes>
            <Route path="notes/" element={<Home />}></Route>
            <Route path="notes/home" element={<Home />}></Route>
            <Route path="notes/add" element={<Add />}></Route>
            <Route path="notes/note" element={<Note />}></Route>
        </Routes>
    </Router>
}