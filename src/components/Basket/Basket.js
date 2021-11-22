import React, { useState } from 'react'
import { Grid, Button, Container } from "@material-ui/core";
import {Link} from 'react-router-dom'
import './Basket.css'
import Spinner from '../Spinner/Spinner';
import Banner from './Banner';
import CustomCard from '../CustomCard/CustomCard';
import Navbar from '../Navbar/Navbar';


const Basket = ({
    basketData,
    updateProduct,
    handleEmptyBasket,
    RemoveItemFromBasket,
}) => {

    const [showSpinner , setShowSpinner] = useState(true);


    const loading = () => {
        setTimeout(() => {
            setShowSpinner(false)
        } , 2000)
        if(showSpinner) {
            return <Spinner/>
        }
        return <Banner/>
    }
    
    
    if(!basketData.line_items || !basketData.line_items.length) return loading()
        
    {console.log(basketData.subtotal)}
    return (
        <>
        <Navbar cost={basketData.subtotal.formatted_with_code} />
            <Container id="basket">
      <Grid container justify="center" spacing={4}>
        {basketData.line_items.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
                <CustomCard
                basket
                product={item}
                updateProduct={updateProduct}
                RemoveItemFromBasket={RemoveItemFromBasket}
              />
            </Grid>
          );
        })}
      </Grid>
      <div className="actions">
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          onClick={handleEmptyBasket}
        >
          Vider le panier
        </Button>

        <Button
          size="small"
          variant="outlined"
          component={Link}
          to="/checkout"
        >
          Procéder au paiement
        </Button>
      </div>
    </Container>
        </>
    )
}



export default Basket
