import React from 'react';
import { client, urlFor } from '@/lib/client';
import ProductContent from '@/app/components/ProductContent';

const ProductDetails = async ({ params: { slug } }) => {
    let index = 0;
    // **********************************************
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const product = await client.fetch(query);
    const productsQuery = '*[_type == "product"]';
    console.log('*'.repeat(40));
    const products = await client.fetch(productsQuery);
    const { image, name, details, price } = product;
    // ********************************************** 
    return (
        <ProductContent 
        image = {image} 
        name = {name} 
        details = {details} 
        price = {price}
        products = {products}
        />
    )
}

export default ProductDetails;
