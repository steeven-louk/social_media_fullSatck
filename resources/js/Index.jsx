import React, { useState } from "react";

import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Main_Layout from "./layouts/Main_Layout";

import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./Routes/ProtectedRoutes";

function Index() {
    const [post, setPost] = useState([]);
    const [selectFile, setSelectFile] = useState();

    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    exact
                    element={<ProtectedRoutes Component={Main_Layout} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default Index;
