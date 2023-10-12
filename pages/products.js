import Layout from "@/component/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products,setProducts] = useState([]);
  useEffect(() =>{
    axios.get('/api/products').then(res =>{
      setProducts(res.data);
    });
  },[]);

  return ( 
    <Layout>
        <Link className="bg-blue-900  text-white px-3 py-2 rounded-md" href={'/products/new'} > Add new product </Link>
        <table>
          <thead>
            <tr>
              <td>Product Name</td>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product => (
                <tr key={product._id} >
                  <td>{product.title}</td>
                  <td className="gap-3 flex" >
                    <Link className="text-yellow-500" href={'products/edit/'+product._id} >edit</Link>
                    <Link className="text-red-500" href={'products/delete/'+product._id} >delete</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </Layout>
   )
}

export default Products