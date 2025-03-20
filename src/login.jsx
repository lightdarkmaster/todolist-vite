import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';
import logo from './assets/h.gif'; 


function Login({ click, users }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate(); 


    const showPassword = () => {
        setShowPass(!showPass);
    }

    const loginSuccessModal=()=>{   
        Swal.fire({
            title: "Logged In Successfully!",
            icon: "success",
            draggable: true,
            theme: "dark"
          });
    }

    const loginNotSuccessful=()=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Sign Up</a>',
            theme: "dark"
          });
    }
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
        const found = users.some((user) => user.username === username && user.password === password);
        console.log(found);

        if (found) {
            loginSuccessModal();
            navigate('/app');
        }else{
            loginNotSuccessful();
        }
    };

    return (
        <div className="border-2 border-indigo-700 w-full h-full m-4 p-2 rounded-xl shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)] hover:shadow-[10px_5px_100px_-15px_rgba(0,255,255,1.0)]">
            <div className="w-full flex flex-col gap-2">
                <h1 className="text-[2rem] font-bold underline decoration-sky-500 cursor-pointer text-white p-3">Login</h1>
                <div className="w-[20%] h-[20%] rounded-full p-0 border-2 border-blue-700 right-[-50%] flex content-center m-auto">
                <img src={logo} alt="Logo" className="rounded-full content-center shadow-[10px_5px_100px_-15px_rgba(255,0,255,1.0)]" />
                </div>  
                <form className="m-5 gap-5 flex flex-col">
                    <input
                        className="h-12 w-full rounded-xl p-5 mb-4 hover:shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)] bg-black border"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsernameChange} 
                    />
                    <div className="relative inline-block ">
                        {
                            showPass ?
                                <FaEye className="absolute text-[28px] top-[11px] transform right-[10px] cursor-pointer" onClick={() => { showPassword() }} /> :
                                <FaEyeSlash className="absolute text-[28px] top-[11px] transform right-[10px] cursor-pointer" onClick={() => { showPassword() }} />
                        }
                        <input
                            className="h-12 w-full rounded-xl p-5 mb-4 hover:shadow-[10px_5px_100px_-15px_rgba(0,0,255,1.0)] bg-black border"
                            type={showPass ? 'text' : 'password'}
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
