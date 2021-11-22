import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer';
import Map from '../../components/Localisation/Map';
import Navbar from '../../components/Navbar/Navbar'
import Product from '../../components/Products/Product';
import PyjamaProduct from '../../components/PyjamaProduct/PyjamaProduct';
import SliderPage from '../../components/SliderPage/SliderPage';
import SousNavbar from '../../components/SousNavbar/SousNavbar';
import New from '../../components/Titres/New';
import Pyjamas from '../../components/Titres/Pyjamas';
import {commerce} from '../../utils/commerce';

const Home = () => {
    const [products , setProducts] = useState([]);
    const [basketData , setBasketData] = useState([]);
    const [Pyjamaété , setPyjamaété] = useState([]);

    const fetchPyjamaété = async () => {
        const response = await commerce.products.list({
            category_slug: ['pyjamas-d-t'],
        });
        setPyjamaété((response && response.data || []))
    }
    const fetchProducts = async () => {
      const response = await commerce.products.list();
      setProducts((response && response.data || []))
    };

    const fetBasketData = async () => {
        const response = await commerce.cart.retrieve();
        setBasketData(response)
    } 

    useEffect(() => {
      fetchProducts();
      fetBasketData();
      fetchPyjamaété();
    }, []);
   
  
    return (
        <>
            <Navbar basketItems={basketData.total_items} cost={basketData.subtotal} totalCost={
                (basketData.subtotal && basketData.subtotal.formatted_with_symbol || "00.00")
            } />
            <SousNavbar/>
            <SliderPage/>
            <New/>
            <Product products={products} />
            <Pyjamas />
            <PyjamaProduct PyjamaProduct={Pyjamaété}/>
            <Map/>
            <Footer/>
        </>

    )
}

export default Home;
