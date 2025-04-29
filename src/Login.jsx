import { TextField, Typography, Button } from '@mui/material'
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"

let shema = Yup.object().shape({
    Email: Yup.string()
        .required("Required Your Mail")
        .matches(/^[a-z]+[0-9]+@[a-z]+.[a-z]{2,3}$/, "Place Enter Your valid Email "),
    Password: Yup.string()
        .required("Required Password")
        .matches(/^[a-z 0-9]{5,6}$/, "Place Enter 5,6 Letters")
})
const Login = () => {
    let navigate = useNavigate()
    let { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(shema) })

    const Logindata = (data) => {
        Swal.fire({
            title: "Login Successfully",
            icon: "success",
            draggable: true
        });
        setTimeout(() => navigate("/"), 1000)
    }
    return (
        // <div className='Login-From-Compunet'>
        <form className='Login-form p-5 rounded' onSubmit={handleSubmit(Logindata)}>
            <FaRegUserCircle className='Login-logo' />
            <Typography className='text-center pt-5' variant='h6'>LOGIN</Typography>
            <TextField label="Emial" id='mail'
                {...register("Email")}
                error={!!errors.Email}
                helperText={errors.Email?.message}
            />
            <TextField label="Password"
                {...register("Password")}
                error={!!errors.Password}
                helperText={errors.Password?.message}
            />
            <Button className='btn btn-outline-primary w-25 m-auto' type='submit'>Summit</Button>
            <Link to="sign">Sigup</Link>
        </form>
        // </div>
    )
}

export default Login



