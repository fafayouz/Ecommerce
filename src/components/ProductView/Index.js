import { Button, Container, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { commerce } from "../../utils/commerce";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const createMarkup = (text) => {
  return { __html: text };
};






const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 75vh;
  margin-top: 12vh;
  grid-gap: 15px;
  padding-bottom: 20px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImgWrapper = styled.div`
  width: 50%;
  margin-bottom: 20px;
  text-align: center;
  > img {
    max-width: 320px;
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const VariantsWrapper = styled.div`
  display: flex;
  height: 140px;
  img {
    max-width: 140px;
    cursor: pointer;
    margin-right: 10px;
  }
`;

const Actions = styled.div`
  display: flex;
  margin: 15px 0;
  > button,
  h5 {
    margin-right: 10px;
  }
`;

const VariantsTitle = styled(Typography)`
  margin: 10px 0;
  text-align: left;
`;

const AddToBasketButton = styled(Button)`
  color: #000;
  background-color: #bb86fc;
  &:hover {
    color: #c9d1d9;
    background-color: #bb86fc;
  }
  svg {
    margin-right: 10px;
  }
`;

const ProductView = () => {
const [basketData , setBasketData] = useState([]);
  const [product, setProduct] = useState({});
  const [originalPrice, setOriginalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);


  const fetBasketData = async () => {
    const response = await commerce.cart.retrieve();
    setBasketData(response)
} 
useEffect(() => {
  fetBasketData();
}, []);
  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    const { name, price, assets, image, variants, quantity, description } =
      response;
    setOriginalPrice(price.raw);
    setProduct({
      id,
      name,
      assets,
      variants,
      quantity,
      description,
      src: image.url,
      price: price.formatted_with_code,
    });
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProduct(id[2]);
  }, []);

  const handleQuantity = (param) => {
    if (param === "decries" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (param === "increase" && quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const priceCalculator = (optionPrice) => {
    if (optionPrice === originalPrice) {
      return product.price;
    }

    const priceArray = product.price.split(" ");
    const total = originalPrice + optionPrice;
    return `${total} ${priceArray[1]}`;
  };

  const updateProduct = (optionPrice, src, { id, variantId }) => {
    setProduct({
      ...product,
      price: priceCalculator(optionPrice),
      src,
      option: { [variantId]: id },
    });
  };

  const getImageUrl = (assetId) => {
    const relatedAsset = product.assets.find((pro) => pro.id === assetId);
    return relatedAsset?.url || "";
  };
  const AjouterProduit = async (productId , quantity) => {
    const response = await commerce.cart.add(productId , quantity);
    setBasketData(response.cart)
  }
  return (
      <>
      <Navbar basketItems={basketData.total_items} cost={basketData.subtotal} totalCost={
                (basketData.subtotal && basketData.subtotal.formatted_with_symbol || "00.00")}/>
    <Container>
      <Wrapper>
        <ImgWrapper>
          <img
            onLoad={() => {
              setLoading(false);
            }}
            src={product.src}
            alt={product.name}
          />

          {product.variants?.length ? (
            <VariantsTitle variant="h4">
              Select different colours.
            </VariantsTitle>
          ) : null}
          <VariantsWrapper>
            {product.variants?.length
              ? product.variants[0].options?.map((pro) => (
                  <img
                    src={getImageUrl(pro.assets[0])}
                    alt={pro.name}
                    onClick={() =>
                      updateProduct(pro.price.raw, getImageUrl(pro.assets[0]), {
                        id: pro.id,
                        variantId: product.variants[0].id,
                      })
                    }
                  />
                ))
              : null}
          </VariantsWrapper>
        </ImgWrapper>

        <div>
          <Typography variant="h4">{product.name}</Typography>
          <Typography
            variant="h6"
            dangerouslySetInnerHTML={createMarkup(product.description)}
          />
          <Typography variant="h5">Price: {product.price}</Typography>
          <div>
            <Actions>
              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  handleQuantity("increase");
                }}
              >
                +
              </Button>

              <Typography variant="h5">Quantity: {quantity}</Typography>

              <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={() => {
                  handleQuantity("decries");
                }}
              >
                -
              </Button>
            </Actions>
            <AddToBasketButton
              size="large"
              onClick={() => {
                AjouterProduit(product.id, quantity, product.option);
              }}
            >
              <ShoppingCart /> Add to basket
            </AddToBasketButton>
          </div>
        </div>
        {loading && <Spinner />}
      </Wrapper>
    </Container>
    <Footer/>
    </>
  );
};

export default ProductView;