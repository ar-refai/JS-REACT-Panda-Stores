import React from 'react';
import { client  , urlFor } from '@/lib/client';
export async function GetStaticProps({params : slug }) {
    // function for getting the data from database
    const query = `*[_type == "product" && slug.current == '${slug}']`;
    const products = await client.fetch(query);
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
    return { products, bannerData }
}
const ProductDetails = () => {
    return (
        <div>
            <div className="product-detail-container">
                <div className="image-container">
                    <img src='' />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails