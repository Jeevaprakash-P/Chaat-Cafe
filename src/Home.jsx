import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()
    return (
        <div className='Home_Compunet'>
            <div className='Home_First_Page '>
                <img src="../Images/Background.jpg" className='bg-img img-fluid rounded' />
                <div className='shopname text-center'>
                    <h1>Chaat Cafe</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis hic perspiciatis explicabo earum fugit tempore rerum. Nisi maiores, dolorum adipisci hic tempora pariatur praesentium, nemo alias velit fugiat quisquam minima dolores asperiores ducimus sequi soluta deleniti architecto, ratione repellat autem?</p>
                    <button className=' View-button btn btn-outline-dark' onClick={()=>navigate("/starters")}>View Menu</button>
                </div>
            </div>
        </div>
    )
}

export default Home