import React, { useEffect, useState } from 'react';
import Page404 from './pages/Page404/Page404';
import Home from './pages/Home/Home';
import SinglePage from './pages/SinglePage/SinglePage';
import Livraison from './pages/InformationsPages/Livraison';
import Paiment from './pages/InformationsPages/Paiment';
import ConditionGénérale from './pages/InformationsPages/ConditionGénérale';
import {commerce} from './utils/commerce';
import Basket from './components/Basket/Basket';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './components/CheckoutForm/index';
import ProductView from './components/ProductView/Index';

const App = () => {
  const [basketData , setBasketData] = useState([]);
  const [orderInfo, setOrderInfo] = useState({});
  const [orderError, setOrderError] = useState("");
  
  const fetBasketData = async () => {
    const response = await commerce.cart.retrieve();
    setBasketData(response)
} 
useEffect(() => {
  fetBasketData();
}, []);
const addProduct = async (productId , quantity) => {
  const response = await commerce.cart.add(productId , quantity);
  setBasketData(response.cart)
}
const AjouterProduit = async (productId , quantity) => {
  const response = await commerce.cart.add(productId , quantity);
  setBasketData(response.cart)
}
const updateProduct = async (productId , quantity) => {
  const response = await commerce.cart.update(productId , {quantity});
  setBasketData(response.cart)
}
const handleEmptyBasket = async () => {
  const response = await commerce.cart.empty();
  setBasketData(response.cart)
}
const RemoveItemFromBasket = async (itemId) => {
  const response = await commerce.cart.remove(itemId);
  setBasketData(response.cart)
}

const refreshBasket = async () => {
  const newBasketData = await commerce.cart.refresh();
  setBasketData(newBasketData);
};
const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  try {
    const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

    setOrderInfo(incomingOrder);

    refreshBasket();
  } catch (error) {
    setOrderError(
      (error.data && error.data.error && error.data.error.message) ||
        "There is an error occurred"
    );
  }
};
const handleCheckout = async (checkoutId, orderData) => {
  try {
    // const incomingOrder = await commerce.checkout.capture(
    //   checkoutId,
    //   orderData
    // );

    setOrderInfo(orderData);

    refreshBasket();
  } catch (error) {
    setOrderError(
      (error.data && error.data.error && error.data.error.message) ||
        "There is an error occurred"
    );
  }
};
  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products/:id" element={<SinglePage/>} />
        <Route exact path="/methode-de-livraison" element={<Livraison/>}/>
        <Route exact path="/methode-de-paiement" element={<Paiment/>}/>
        <Route exact path="/checkout" element={<Checkout orderInfo={orderInfo}
              orderError={orderError}
              basketData={basketData}
              handleCheckout={handleCheckout} 
           /> } />

        <Route caseSensitive={false} exact path="/basket" element={<Basket basketData={basketData}
          updateProduct={updateProduct}
          handleEmptyBasket={handleEmptyBasket}
          RemoveItemFromBasket={RemoveItemFromBasket}
          totalCost={
            (basketData.subtotal && basketData.subtotal.formatted_with_symbol || "00.00")
        }
        />} />
        <Route exact path="/product-view/:id" AjouterProduit={AjouterProduit} element={<ProductView/>} />
        <Route exact path="/questions-clients-et-conditions-de-ventes" element={<ConditionGénérale/>}/>
        <Route exact element={<Page404/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
