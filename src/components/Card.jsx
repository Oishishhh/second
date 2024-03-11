import './Card.css';
import { CiStar } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

function Card ({title,image}) {
    return(
        <div className='container'>
            <img src={image}/>
            {/* <p>Akusticheskiy sistema Samsung<br></br>MX-ST40B</p> */}
            <div className='icon'>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            </div>
            <button><b>265 050 so'mdan/24 oy</b></button>
            <div className='icon2'>
            <h2>{title}</h2>
            <div className='box'>
            <FaShoppingCart />
            </div>
            </div>
            {/* <img src=''>{image}</img> */}
        </div>
    );
}

export default Card;