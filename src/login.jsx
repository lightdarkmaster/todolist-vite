import React, { useState } from "react";


function Login({click}) {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        if(username === 'chan' && password ==='chan123'){
            console.log("Login Successfully");
        }else{
            console.log("Access Denied");
        }
    };

    return (
        <div className="border-2 border-indigo-700 w-[100%] h-[100%] m-4 p-2 rounded-xl shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)]">
            <div className="w-[100%] flex flex-col gap-2">
                <h1 className="text-lg font-bold underline decoration-sky-500">Login</h1>   
                <form className="m-5 gap-5 flex flex-col " onSubmit={loginSubmit}>
                    <input
                        className="h-12 w-[100%] rounded-xl p-5 mb-4 hover:shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)]"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={handleEmailChange}
                    />
                    <input
                        className="h-12 w-[100%] rounded-xl p-5 mb-4 hover:shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)]"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <button className="font-bold bg-indigo-500 hover:bg-indigo-700" type="submit">Login</button>
                    <button className="font-bold bg-red-500 hover:bg-red-700" type="submit" onClick={()=>{click()}}>Sign Up</button>

                </form>
            </div>
        </div>
    );
}

export default Login;