import Layout from "@/component/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductForm({
    _id,
    title: existingTitle,
    description: existingDescription,
    price: existingPrice,
}){
    const [newProduct, setNewProduct] = useState({
        title: existingTitle || '',
        description: existingDescription || '',
        price: existingPrice || '',
    });
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    function handleNewProduct(e) {
        const { name, value } = e.target
        setNewProduct(prevProduct => (
            {
                ...prevProduct,
                [name]: value
            }
        ))
    }

    async function createProduct(e) {
        e.preventDefault();
        const { title, description, price } = newProduct;
        const data = { title, description, price };
        await axios.post('/api/products', data);
        setGoToProducts(true);
    }

    if (goToProducts) {
        router.push('/products');
    }

    return (
        <>
            <form className="text-black" onSubmit={createProduct} >

                <h1>New Product</h1>

                <label htmlFor="name" >Product Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="product name"
                    name="title"
                    onChange={handleNewProduct}
                    value={newProduct.title}
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    placeholder="description"
                    name="description"
                    onChange={handleNewProduct}
                    value={newProduct.description}
                />

                <label htmlFor="price" >Price in (USD)</label>
                <input
                    id="price"
                    type="number"
                    placeholder="price"
                    name="price"
                    onChange={handleNewProduct}
                    value={newProduct.price}
                />

                <button className="btn-primary" type="submit">Save</button>
            </form>
        </>
    )
}