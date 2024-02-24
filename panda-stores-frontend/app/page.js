import { client } from "../lib/client";
import { Product , FooterBanner , HeroBanner } from './components';


export const getData = async () => {
  // function for getting the data from database
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return { products, bannerData }
}


export default async function Home() {
  // calling the getData function
  const {products , bannerData} = await getData();
  // console.log('#'.repeat(50));
  // console.log(bannerData);
  // console.log('#'.repeat(50));

  return (
    <>
      <HeroBanner HeroBanner={bannerData.length && (bannerData[0])}/>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakeres of many variations</p>
      </div>
      <div className="products-container">
          {
          products?.map((product) => product.name)
          }      
        </div>

      <FooterBanner />
    </>
  );
}
