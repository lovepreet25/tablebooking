import GreekSalad from "../Assests/greek-salad.png"
import Bruschetta from "../Assests/bruchetta.jpg"
import Dessert from "../Assests/desert.jpg"
export default function Menu()
{
return(
    <div className="menu">
        <div className="menu-desc">
            <p className="menu-title"> This Week Specials!</p>
            <button className="menu-btn">
                Menu
            </button>
        </div>
        <div className="cards">
          <div className="card">
            <img className="menu-img" src={GreekSalad} alt = "greek salad"/>
            <div className = "specials">
                <p className="item-name">Greek Salad</p>
                <p className="item-price">$12.99</p>
            </div>
            <div className="special-desc">
                <p>The famous greek salad of crispy lettuce, 
                        peppers, olives and our Chicago style feta cheese, 
                        garnished with crunchy garlic and rosemary croutons. 
                </p>
            </div>
            <div className="card-btn">
            <button> Order </button>
            </div>
           </div>
           <div className="card">
            <img className="menu-img" src={Bruschetta} alt = "bruschetta"/>
            <div className = "specials">
                <p className="item-name">Bruschetta</p>
                <p className="item-price">$5.99</p>
            </div>
            <div className="special-desc">
                <p>Our Bruschetta is made from grilled bread that has 
                        been smeared with garlic and seasoned with salt and olive oil.
                </p>
            </div>
            <div className="card-btn">
            <button> Order </button>
            </div>
            </div>
            <div className ="card">
            <img className="menu-img" src={Dessert} alt = "Lemon Dessert"/>
            <div className = "specials">
                <p className="item-name">Lemon Dessert</p>
                <p className="item-price">$5.00</p>
            </div>
            <div className="special-desc">
                <p>This comes straight from grandma’s recipe book,
                         every last ingredient has been sourced and is as 
                         authentic as can be imagined.
                </p>
            </div>
            <div className="card-btn">
            <button> Order </button>
            </div>
            </div>
        </div>
    </div>
)
}