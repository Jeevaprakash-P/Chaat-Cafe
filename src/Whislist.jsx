import React from 'react'
import { CiDiscount1, CiLight } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux"
import { FaTrash } from "react-icons/fa";
import { Deleteitems, LessAmount, QtyChange, Clear, Pricevaluechnage, QuntityChack } from './Js-src/Slices';
import Swal from 'sweetalert2'
import './App.css'
import { useNavigate } from 'react-router-dom';


const Whislist = () => {
  let navigate = useNavigate()
  let Card = useSelector((state) => state.Card)
  if (!JSON.parse(localStorage.getItem("card"))) {
    localStorage.setItem("card", JSON.stringify([]))
  }
  if (!JSON.parse(localStorage.getItem("amount"))){
    localStorage.setItem("amount" , JSON.stringify(0))
  }
  
  let Amount = useSelector((state) => state.Amount)
  let dispatch = useDispatch()
  const HadleCardDelete = (element) => {
    dispatch(Deleteitems(element.id))
    dispatch(LessAmount(element.amount))
    Swal.fire({
      title: "Deleted!",
      icon: "success",
      draggable: true
    });
    
    if (Card.length < 0){
      navigate("/starters")
    }
  }
  const HandleInputQty = (e, id) => {
    dispatch(QtyChange({
      value: e.target.value,
      id: id
    }))
    dispatch(Pricevaluechnage({ value: e.target.value, Card, id }))
    dispatch(QuntityChack())
    console.log(Card.length < 0);

    if(Card.length  < 0 ){
      navigate("/starters")
    }

  }
  const ClearListItems = () => {
    dispatch(Clear())
  }
  return (
    <div className='whislist-page text-light'>
      <img src="../Images/CardImd.avif" className='img-fluid' id="card-Background" />
      <div className='Card-Items '>
        <marquee behavior="scrool" direction="lf" className="text-light" >
          <div className="Discount-Scrool m-1" >
            <div className="Discount bg-success" style={{ padding: "0px 10px" }} >
              <CiDiscount1 className="display-6 m-1" />
              <h6>Up To 20% Discount</h6>
            </div>
            <div className="Discount bg-success" style={{ padding: "0px 10px" }}>
              <CiDiscount1 className="display-6 m-1" />
              <h6>Up To 25% Discount</h6>
            </div>
            <div className="Discount bg-success" style={{ padding: "0px 10px" }}>
              <CiDiscount1 className="display-6 m-1" />
              <h6>Up To 50% Discount</h6>
            </div>
            <div className="Discount bg-success" style={{ padding: "0px 10px" }}>
              <CiDiscount1 className="display-6 m-1" />
              <h6>Up To 70% Discount</h6>
            </div>
            <div className="Discount bg-success" style={{ padding: "0px 10px" }}>
              <CiDiscount1 className="display-6 m-1" />
              <h6>Up To 75% Discount</h6>
            </div>
          </div>
        </marquee>
        <h4 className='text-center text-light '>CHAAT CAFE</h4>
        <ol className='card-ol'>
          {
            Card.map((element) => {
              return (
                <li className='Card_li row text-center  align-items-center' key={element.id}>
                  <img src={element.img} className='col-lg-2 ' style={{ borderRadius: "20%" }} />
                  <h6 className='col-lg-4 col-3'>{element.name}</h6>
                  <div className='col-4 col-lg-2 d-flex justify-content-evenly align-items-center '>
                    <h6>{element.price}</h6><h6>X</h6>
                    <input type='number' id='card-input' onChange={(e) => HandleInputQty(e, element.id)} value={element.Quntity} className='h6' />
                  </div>
                  <h6 className='col-2 col-lg-2' >$ {element.amount}</h6>
                  <button className='btn btn-outline-light col-2 col-lg-1 bg-danger'
                    onClick={() => HadleCardDelete(element)}><FaTrash /></button>
                </li>
              )
            })
          }
        </ol>
        <div className='row m-3 justify-content-around align-items-center '>
          <button className='btn btn-outline-light col-3 col-lg-2' onClick={ClearListItems}>Clear</button>
          <p className='col-6 col-lg-5  text-center'>Total Amount : $ {Amount}</p>
          <button className='col-3 btn btn-outline-light  col-lg-2 '>bye</button>
        </div>
      </div>
    </div>
  )
}

export default Whislist