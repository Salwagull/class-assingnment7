"use client"
import React, {useEffect, useState} from 'react'

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ClientFetch = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch("https://fakestoreapi.com/products");
      const  parsedResponse: Product[]=
      await response.json();
      console.log("product >>>", parsedResponse);
      setData(parsedResponse);
    }
    fetchData()
  },[]);
  return (
    <div className="p-4 min-h-screen flex items-center justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-contain mb-2"
          />
          <h2 className="text-2xl font-semibold">{product.title}</h2>
          <p className="text-gray-500">{product.category}</p>
          <p className="text-gray-700 font-bold">price:${product.price}</p>
          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 font-bold">{product.rating.rate}⭐</span>
            <span className="text-sm text-gray-500 ml-2">({product.rating.count} reviews)</span>
          </div>
          <button className="mt-4 bg-black text-xl text-white py-3 px rounded-md hover:bg-blue-500 w-full transition duration-300 ease-in-out">
           Add to Cart
          </button>

        </div>
      ))}
    </div>
  </div>


  )
}

export default ClientFetch