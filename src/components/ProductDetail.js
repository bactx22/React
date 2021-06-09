import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductApi from '../api/ProductApi'
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        const getProducts = async () => {
        try {
            const {data} = await ProductApi.get(id);
            setProduct(data)
        } catch (error) {
            console.log(error)
        }
        }
        getProducts();
    },[])
    return (
        <div style={{marginTop:"100px"}}>
           {product.name}
        </div>
    )
}

export default ProductDetail
