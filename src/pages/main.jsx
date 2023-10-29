import react from "react";
import img1 from '../images/contemporary-chair-z0AGK2F-600.jpg';
import img2 from '../images/skam (1).png'
import './main.css'
import { Link } from "react-router-dom";
import { SALE } from "./shop/product";
import { SALES } from "../products";
export default function Main () {
    return(
        <div>
            <div className="sacentrii">
                <div className="first">
                    <h1 className="weri">
                    <span>
                        PlywoodHub 
                    </span>
                    <br />
                    სიმარტივე, სილამაზე, <br /> გამძლეობა
                    </h1>
                    <h5 className="xut">
                        ჩვენი ავეჯი დამზადებული არის 100 პროცენტით სუფთა <br />
                        და ეკოლოგიური არყის ხის ფლაივუდისგან.
                    </h5>
                    <Link to='/shop'>
                        <button class="btn">ავეჯის ყიდვა</button>
                    </Link>
                </div>
                <div className="second">
                    <img className="skami" src={img2}/>
                </div>
            </div>
            <div className="sacentri">
                <div>
                    <h1 className="sales">ფასდაკლებაში</h1>
                    <div className="vraperi"></div>
                </div>
            </div>
            <div className="shop">
                <div className="products">
                    {SALES.map((sl) => (
                    <SALE data={sl} />
                    ))}
                </div>
            </div>
        </div>
    )
}