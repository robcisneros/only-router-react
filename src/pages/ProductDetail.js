import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    
    console.log(params.productId);

    return (
        <section>
        <h1>The detail product Page</h1>
        <p1>{params.productId}</p1>
    </section>
    );
};

export default ProductDetail;