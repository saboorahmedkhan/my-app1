import Link from "next/link";
import Nav from "../../../component/navbar";

const Product = ()=>{
    let c = "Product list"
    return (
        <div>
            <Nav/>
            <h3>{c}</h3>
            <ol>
                <li><Link href="/products/product1">Product1</Link></li>
                <li><Link href="/products/product1">Product2</Link></li>
                <li><Link href="/products/product1">Product3</Link></li>
            </ol>
            
    </div>
    );
}
export default Product