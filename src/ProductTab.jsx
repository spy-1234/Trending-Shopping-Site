import "./Product"
import Product from "./Product";

export default function ProductTab(){
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div className="Ptab" style={styles} >
            <h1>TRENDING DEALS ON ELECTRONICS | SHOP NOW</h1>
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple pencil" idx={1} />
            <Product title="Zebronics keyboard" idx={2} />
            <Product title="AMD Ryzen 9 processor" idx={3} />
        </div>
    );
}