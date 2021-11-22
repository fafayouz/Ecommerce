import React from "react";
import "./Navbar.css";
import { Badge , IconButton} from "@mui/material";
import { ShoppingCart } from "@material-ui/icons";
import { Link  , useLocation} from "react-router-dom";



const Navbar = ({basketItems , totalCost , cost}) => {
  const location = useLocation()
  return (
    <>
      <div className="Navbar-Container">
          <div className="Navbar-Logo">
                <Link to="/">MBLingerie</Link>
          </div>
          <div  className="Navbar-Items">
            {location.pathname === "/basket" ? (
              <h2>Total : <strong> {cost} </strong></h2>
            ): (
              <IconButton
              component={Link}
              to="/basket"
              aria-label="Show basket contents"
              color="inherit"
            >
              <Badge badgeContent={basketItems} color="secondary">
                <ShoppingCart className="custom-basket" />
              </Badge>
              <span style={{fontSize:"1rem"}}>
                {totalCost}
              </span>
            </IconButton>
            )}
          
          </div>
      </div>
    </>
  );
};

export default Navbar;
