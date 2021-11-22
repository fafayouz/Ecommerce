import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import Image from "./Image.jpg";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";

const Banner = () => {
  return (
    <>
      <Navbar />
      <div className="basket-banner">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography className="title" variant="h1">
              Le panier est vide appuyez sur Shopping pour ajouter de nouveaux produits
              </Typography>
              <Button className="shopping-button" component={Link} to="/">
                Shopping
              </Button>
            </Grid>
            <Grid className="brand" item xs={12} sm={6}>
              <ShoppingCart />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Banner;
