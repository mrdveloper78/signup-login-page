import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdLogIn } from "react-icons/io";
import { Link } from 'react-router-dom';
import { successMessage } from '../Utils/ToastMessage';
import { PasswordInput, TextInput } from '../Utils/validate';




const Login = () => {


    const [data, setData] = useState({
        username: "",
        password: "",
    });


    const changeHandler = (e) => {
        if (e.target.name === "isAccepted") {
            setData({ ...data, [e.target.name]: e.target.checked });
        }
        else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
        console.log(data)
    }


    // react hook validation
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ mode: "all" });

    const onSubmitData = (info) => {
        setData({
            ...data,
            username: info.username,
            password: info.password,
        });
        successMessage('Login is success');
        reset();
    }
    useEffect(() => {
        console.log(data)
    }, [data, data.username]);

    //----------------- validations ------------------------------

    const nameValidation = register("username", { required: "Username is required", minLength: { value: 4, message: 'Minimum Required length is 4' } })

    const passwordValidation = register("password", {
        required: "password is required",
        pattern: {
            value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            message: 'Password should include at least one numeric value and one special character'
        },
        minLength: {
            value: 8,
            message: 'Minimum Required length is 8'
        }
    });


    //------------------ end validation ---------------------------


    return (
        <div
            className='w-[400px] h-auto bg-white rounded-xl mt-16 p-4'>

            <form onSubmit={handleSubmit(onSubmitData)} className="flex flex-col">

                <span>
                    <IoMdLogIn className='text-[50px] mx-auto text-blue-800' />
                </span>

                <h2 className='text-center text-[40px] font-bold mb-4'>
                    Login
                </h2>

                <div>
                    <TextInput
                        err={errors.username} title="Username"
                        holder='&#61447; Type your username'
                        validation={{ ...nameValidation }} />
                    {errors.username && <small className='text-red-600'>{errors.username.message}</small>}
                </div>

                <div>
                    <PasswordInput
                        err={errors.password} title="Password"
                        holder="&#61475; Type your password"
                        validation={{ ...passwordValidation }} />
                    {errors.password && <small className='text-red-600'>{errors.password.message}</small>}
                </div>

                <div>
                    <button
                        type='submit'
                        className='
                         w-full rounded-xl bg-blue-600 py-1 mt-2
                         font-bold hover:bg-transparent border-2 border-blue-600' >
                        Login
                    </button>
                    <Link to={"/signup"} className='hover:cursor-pointer' >
                        SignUp
                    </Link>
                </div>

            </form>

        </div>
    )
}



export default Login;
