import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import App from './App.jsx'
import { useNavigate } from "react-router";

function Login({ click, users}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        const found = users.some((user) => user.username === username && user.password === password)
        console.log(found);

        if (found) {
            navigate('/app');
        }
    };

        return (
            <div className="border-2 border-indigo-700 w-full h-full m-4 p-2 rounded-xl shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)]">
                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-lg font-bold underline decoration-sky-500">Login</h1>
                    <form className="m-5 gap-5 flex flex-col">
                        <input
                            className="h-12 w-full rounded-xl p-5 mb-4 hover:shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)]"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <div className="relative inline-block ">
                            <FaEye className="absolute text-[28px] top-[11px] transform right-[10px] cursor-pointer" />
                            <input
                                className="h-12 w-full rounded-xl p-5 mb-4 hover:shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)]"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <button className="font-bold bg-indigo-500 hover:bg-indigo-700 p-3 rounded-lg" onClick={(e) => loginSubmit(e)}>
                            Login
                        </button>
                        <button
                            className="font-bold bg-red-500 hover:bg-red-700 p-3 rounded-lg"
                            type="button"
                            onClick={click}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        );

}

export default Login;
