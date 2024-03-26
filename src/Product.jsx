import "./Product.css"
import Price from './Price';

export default function Product({title, idx}){
    let oldPrices = ["12,495", "11,908", "2,599", "599"]
    let newPrices = ["8,999", "9,499", "1,500", "299"]
    let discription = [
        ["8,000 dpi", "5 programmable buttons"], 
        ["intuitive surface design", "designed for ipad pro"], 
        ["sleek design for touch typing", "good for gamers and productive soul"], 
        ["put the game to the next level", "enhance the cpu in multi-tasking"]
        ]

    return (
        <>
        <div className="Product">
            <p>{title}</p>
            <p>{discription[idx][0]}</p>
            <p>{discription[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
        </>   
    );
}
