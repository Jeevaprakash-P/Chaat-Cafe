import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UplodeData } from "./Js-src/Slices"
import { TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"


let schema = Yup.object().shape({
    name: Yup.string()
        .required("Product title  is not required ")
        .typeError("First letter Caplital..!"),

    price: Yup.number()
        .typeError('Price must be a number')
        .required('Price is required')
        .positive('price must be a positive number')
        .integer('Price must be an integer'),

    Rating: Yup.number()
        .required("Rating Is Reruired .. !")
        .typeError("Rating is must 0.0 value "),

    Quntity: Yup.number()
        .required("Enter Your Quntity Number ")
        .typeError("Place Enter Tha Number Value"),

    description: Yup.string()
        .required(" description is not required ... ! ")
        .typeError("Place Enter Your description")
        .matches(/^[A-Z a-z]{50,80}$/, "Morethen 50-80 Letters ")
})

const NewItems = () => {
    let navigate = useNavigate()
    let { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const HadleData = (data) => {
        let Push = async () => {

            await axios.post("http://localhost:4000/Straters", JSON.stringify({ ...data, img: "../Images/Straters_Image/French Frice.webp" }))
                .then(() => {
                    alert("SuccessFull Add in Your Data ")
                    navigate("/starters")

                })
        }
        Push()
    }

    return (
        <div className='From-Compunet'>
            <form onSubmit={handleSubmit(HadleData)}>
                <Typography textAlign={"center"}>NEW PRODUCT</Typography>
                <TextField label="ProductName"
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <TextField label="Price"
                    {...register("price")}
                    error={!!errors.price}
                    helperText={errors.price?.message} />
                <TextField label="Rating"
                    {...register("Rating")}
                    error={!!errors.Rating}
                    helperText={errors.Rating?.message}
                />
                <TextField label="Quntity"
                    {...register("Quntity")}
                    error={!!errors.Quntity}
                    helperText={errors.Quntity?.message} />
                <TextField label="description"
                    {...register("description")}
                    error={!!errors.description}
                    helperText={errors.description?.message} />
                <button className='btn btn-primary w-25 m-auto'>ADD</button>
            </form>
        </div>
    )
}

export default NewItems