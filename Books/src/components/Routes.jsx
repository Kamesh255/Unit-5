import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Authors from "./Authors";

export const MyRoute= () =>{
    return(
        <>
        <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/authors" element={<Authors/>}></Route>
        </Routes>
        </>
    )
}