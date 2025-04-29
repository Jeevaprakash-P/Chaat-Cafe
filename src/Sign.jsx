import React from 'react'
import { TextField, Typography, Button } from '@mui/material'
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from 'react-router-dom'

let shema = Yup.object().shape({
    name: Yup.string()
        .required("Name is Required")
        .matches(/^[A-Z][a-z]+$/, "First Letter Capital"),

    Email: Yup.string()
        .email()
        .required("Required Your Mail")
        .matches(/^[a-z]+[0-9]+@[a-z]+.[a-z]{2,3}$/, "Place Enter Your valid Email "),

    Mobile: Yup.string()
        .required("Number is required")
        .matches(/^[0-9]{10}$/, 'More then 10 Numbers'),

    Password: Yup.string()
        .required("Password is required")
        .matches(/^[a-z 0-9]{6}$/, "Pasword Morthen 6 Lettress"),

    cpassword: Yup.string()
        .required(" Conform Passowrd id Not Valid")
        .oneOf([Yup.ref("password"), null], "Password Must Match")

})
const Sign = () => {
    let { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(shema) })
    const handleSubmitdatas = (data) => {
        console.log(data)
    }
    return (
        <form className='Login-form rounded' style={{ padding: "5px 30px" }} onSubmit={handleSubmit(handleSubmitdatas)}>
            <Typography variant='h5' textAlign={"center"} >Signup</Typography>
            <TextField label="User Name" type='text'
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
            />
            <TextField label="Email" type='email'
                {...register("Email")}
                error={!!errors.Email}
                helperText={errors.Email?.message} />
            <TextField label="Mobile Number" type='number'
                {...register("Mobile")}
                error={!!errors.Mobile}
                helperText={errors.Mobile?.message} />
            <TextField label="Password" type='password'
                {...register("Password")}
                error={!!errors.Password}
                helperText={errors.Password?.message}
            />
            <TextField label="Conform Password" type='number'
                {...register("cpassword")}
                error={!!errors.cpassword}
                helperText={errors.cpassword?.message} />
            <div className='row row-cols-2'>
                <Button className='btn btn-outline-primary w-25 m-auto' type='reset'>Reset</Button>
                <Button className='btn btn-outline-primary w-25 m-auto' type='submit'>Summit</Button>
            </div>
        </form>
    )
}

export default Sign