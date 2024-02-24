import Link from 'next/link';
import React from 'react';
import { urlFor } from '../../lib/client';
const HeroBanner = (bannerData) => {
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
                <img src={urlFor(bannerData?.HeroBanner.image)} alt='headphones' className='hero-banner-image' />
                <div>
                    <Link href='/Products/ID'>
                        <button type='button'>
                            {bannerData?.HeroBanner.buttonText}
                        </button>
                    </Link>
                    <div className='desc'>
                        <h5>
                            DESCRIPTION
                        </h5>
                        <p>DESCRIPTION</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner