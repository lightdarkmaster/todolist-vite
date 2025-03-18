import React, { useState } from "react";
import logo from './assets/h.gif'; 

function SignUp({ users, click }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            alert("Username and password cannot be empty");
            return;
        }
        const newUser = { username: username, password: password }; 
        users.push(newUser);
        setUsername("");
        setPassword("");
        console.log(users);
        click(false);
    };

    return (
        <div className="border-2 border-indigo-700 w-[100%] h-[100%] m-4 p-2 rounded-xl shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)] hover:shadow-[10px_5px_100px_-15px_rgba(0,255,255,1.0)]">
            <div className="w-[100%] flex flex-col gap-2">
                <h1 className="text-lg font-bold text-pretty underline decoration-sky-500">Sign Up</h1>
                                <div className="w-[20%] h-[20%] rounded-full p-0 border-2 border-blue-700 right-[-50%] flex content-center m-auto">
                                <img src={logo} alt="Logo" className="rounded-full content-center shadow-[10px_5px_100px_-15px_rgba(255,0,255,1.0)] hover:shadow-[10px_5px_100px_-15px_rgba(255,200,255,1.0)]" />
                                </div>
                <form className="m-5 gap-5 flex flex-col" onSubmit={registerUser}>
                    <input
                        className="h-12 w-[100%] rounded-xl p-5 mb-4 hover:shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)] border"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="h-12 w-[100%] rounded-xl p-5 mb-4 hover:shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)] border"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="font-bold bg-green-500 hover:bg-green-700 text-black-700 dark:text-black" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;