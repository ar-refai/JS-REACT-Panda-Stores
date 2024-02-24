import Link from 'next/link';
import React from 'react';
import { urlFor } from '../../lib/client';
const HeroBanner = (bannerData) => {
    console.log(urlFor(bannerData?.HeroBanner.image).url().toString())
    return (

        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>
                    {bannerData?.HeroBanner.smallText}
                </p>
                <h3>
                    {bannerData?.HeroBanner.midText}
                </h3>
                <h1>
                    {bannerData?.HeroBanner.largeText1}
                </h1>
                <img src= {urlFor(bannerData?.HeroBanner.image).url()} alt='headphones' className='hero-banner-image' />
                <div>
                    <Link href={`/Products/${bannerData?.HeroBanner.product}`}>
                        <button type='button'>
                            {bannerData?.HeroBanner.buttonText}
                        </button>
                    </Link>
                    <div className='desc'>
                        <h5>
                            DESCRIPTION
                        </h5>
                        <p>
                            {bannerData?.HeroBanner.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner