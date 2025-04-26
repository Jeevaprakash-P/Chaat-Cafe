import Menu_navbar from "./Menu_navbar"
import { GetHook } from "./Js-src/CustomHook"
import { useDispatch, useSelector } from "react-redux"
import { Addamount, Uploaddata } from "./Js-src/Slices"
import { Mosaic } from "react-loading-indicators"
import { TiStar } from "react-icons/ti";
import { FiShoppingCart } from "react-icons/fi";
import { CiDiscount1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom"
import { Additems } from "./Js-src/Slices"
import Swal from 'sweetalert2'

const Straters = () => {
  const dispatch = useDispatch()
  let Navigate = useNavigate();
  let { data, error, Loadding } = GetHook("http://localhost:4000/Straters")
  dispatch(Uploaddata(data))
  let StratersProduct = useSelector((state) => { return (state.StartersItems) })
  let Card = useSelector((state) => { return (state.Card) })

  const HandleWhislist = (element) => {
    let sameitems = Card.some((items) => element.id == items.id)
    if (sameitems) {  
      Swal.fire("Already Purchace This Product!");
    }
    else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Add Product"
      });
      dispatch(Additems(element))
      dispatch(Addamount(element.amount))
    }
  }

  if (Loadding) {
    return (
      <div className="Looding">
        <Mosaic color="#32cd32" size="medium" text="Loadding..." textColor="red" />
      </div>
    )
  }
  else if (error) {
    return (
      <div className="error_container">
        <h4>{error}. . . !</h4>
      </div>
    )
  }
  else {
    return (
      <div className="Straters_page">
        <Menu_navbar />
        <marquee behavior="scrool" direction="lf" className="text-light">
          <div className="Discount-Scrool m-1">
            <div className="Discount bg-success">
              <CiDiscount1 className="display-6 m-1" />
              <h6>Up To 20% Discount</h6>
            </div>
            <div className="Discount bg-success">
              <CiDiscount1 className="display-6 m-1" />
              <h6>Up To 25% Discount</h6>
            </div>
            <div className="Discount bg-success">
              <CiDiscount1 className="display-6 m-1" />
              <h6>Up To 50% Discount</h6>
            </div>
            <div className="Discount bg-success">
              <CiDiscount1 className="display-6 m-1" />
              <h6>Up To 70% Discount</h6>
            </div>
            <div className="Discount bg-success">
              <CiDiscount1 className="display-6 m-1" />
              <h6>Up To 75% Discount</h6>
            </div>
          </div>
        </marquee>
        <div className="m-1 row  justify-content-center">
          <div id="carouselExampleControls" className="carousel slide col-lg-5" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="../Images/Straters_Image/Slid-3.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="../Images/Straters_Image/Slid-2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="../Images/Straters_Image/Slid_1.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="star-page col-12 col-lg-6">
            <h3>Starters</h3>
            <p>Nowadays, the starter is often the first course of a meal, served directly before the main course. Starters come in a wide variety and may be served hot (vol-au-vents, soufflés) or cold (cold cuts, pâtés). However, as part of a formal dinner, they may be served after the soup or the hors d'oeuvres.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              consequuntur tempore, quo aliquam? Dolorem voluptatum amet excepturi sequi, neque provident! Praesentium!</p>
          </div>
        </div>
        <div className="Straters-Container ">
          {
            StratersProduct.map((element) => {
              return (
                <div className="card bg-dark p-1  text-light " style={{ maxWidth: "18rem" }} key={element.id}>
                  <img src={element.img} className="card-img-top" alt="..." />
                  <p className="Rating bg-success rounded">{element.rating}<TiStar /></p>
                  <div className="card-body">
                    <h5 className="card-title text-center">{element.name}</h5>
                    <p className="card-text text-center">{element.description}</p>
                    <div className="row justify-content-center">
                      <p className="col-5 h6">Price :$ {element.price}</p>
                      <a href="#" className="btn btn-primary col-5" onClick={(e) => HandleWhislist(element)}><FiShoppingCart /></a>
                      <span className="text-danger mt-1">{element.error ? "already purchace this product . . !" : ""}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <div className="Additem bg-dark p-1 text-light rounded "
            style={{
              width: "18rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <button className="Add_new_product_button btn" onClick={() => Navigate('/form')}>New Product</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Straters