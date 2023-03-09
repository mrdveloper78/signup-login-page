import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { successMessage } from '../Utils/ToastMessage';
import { EmailInput, PasswordInput, TextInput } from '../Utils/validate';
import { Link } from 'react-router-dom';




const SignUp = () => {


    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
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
            email: info.email,
            password: info.password,
            confirmPassword: info.confirmPassword,
            isAccepted: info.isAccepted
        });
        successMessage('SignUp IS SUCCESS');
        reset();
    }
    useEffect(() => {
        console.log(data)
    }, [data, data.username]);

    //    check password event 
    const password = watch('password')

    //----------------- validations ------------------------------

    const nameValidation = register("username", { required: "Username is required", minLength: { value: 4, message: 'Minimum Required length is 4' } })

    const emailValidation = register("email", { required: "Email is required" });

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

    const confirmPasswordValidation = register("confirmPassword", {
        required: "confirmPassword is required",
        validate: (value) =>
            value === password || "The passwords do not match"
    });

    //------------------ end validation ---------------------------


    return (
        <div
            className='w-[400px] h-auto bg-white rounded-xl mt-16 p-4'>

            <form onSubmit={handleSubmit(onSubmitData)} className="flex flex-col">

                <span>
                    <FaUserCircle className='text-[50px] mx-auto text-blue-800' />
                </span>

                <h2 className='text-center text-[40px] font-bold mb-4'>
                    SignUp
                </h2>

                <div>
                    <TextInput
                        err={errors.username} title="Name"
                        holder='&#61447; Type your username'
                        validation={{ ...nameValidation }} />
                    {errors.username && <small className='text-red-600'>{errors.username.message}</small>}
                </div>

                <div>
                    <EmailInput
                        err={errors.email} title='Email'
                        holder='&#xf075; Type your email'
                        validation={{ ...emailValidation }} />
                    {errors.email && <small className='text-red-600'>{errors.email.message}</small>}
                </div>

                <div>
                    <PasswordInput
                        err={errors.password} title="Password"
                        holder="&#61475; Type your password"
                        validation={{ ...passwordValidation }} />
                    {errors.password && <small className='text-red-600'>{errors.password.message}</small>}
                </div>

                <div>
                    <PasswordInput
                        err={errors.confirmPassword} title="Confirm Password"
                        holder="Confirm Password"
                        validation={confirmPasswordValidation} />
                    {errors.confirmPassword && <small className='text-red-600'>{errors.confirmPassword.message}</small>}
                </div>

                <div className='flex items-center gap-1'>
                    <label className='text-[16px] font-semibold text-lableColor'>
                        I accept terms of privacy police
                    </label>

                    <input
                        type={"checkbox"}
                        name="isAccepted"
                        className={`border-b-2 border-lightGray`}
                        onChange={changeHandler}
                        {...register("isAccepted", {
                            required: "Accept term is required"
                        })} />
                    {errors.isAccepted && <small className='text-red-600'>{errors.isAccepted.message}</small>}
                </div>

                <div>
                    <button
                        type='submit'
                        className='
                         w-full rounded-xl bg-blue-600 py-1 mt-2
                         font-bold hover:bg-transparent border-2 border-blue-600' >
                        Sign Up
                    </button>
                    <Link to={"/login"} className='hover:cursor-pointer' >
                        Login
                    </Link>
                </div>

            </form>

        </div>
    )
}



export default SignUp;
