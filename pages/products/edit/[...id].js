import Layout from "@/component/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "@/component/ProductForm";

export default function EditproductPage() {
    const [productInfo, setProductInfo] = useState(null);
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/api/products?id=' + id).then(res => {
            setProductInfo(res.data);
        });
    }, [id]);
    return (
        <Layout>
            {productInfo && (
                <div className="text-black" >
                    <h1>Edit Product</h1>
                    <ProductForm {...productInfo} />
                </div>
            )}
        </Layout>
    )
}