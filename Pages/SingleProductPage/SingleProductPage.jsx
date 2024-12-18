import {
  Box,
  Button,
  Icon,
  Input,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import SinglePageTabs from "../../Components/SinglePage/SinglePageTabs";
import { getCartData, postData } from "../../Store/Cart/Cart.action";
import RelatedPost from "./RelatedPost";
import Review from "./Review";
import "./SingleProdctPage.css";

export default function SingleProductPage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  //https://met-ned-back.onrender.com/
  //https://netmed-production.up.railway.app/
  let url = `https://met-ned-back.onrender.com/products/${id}`;
  const token = useSelector((store) => store.Auth.token);
  const dispatch=useDispatch()
  const toast=useToast()
  const [pin,setPin]=useState()
  

  let getData = async () => {
    let res = await fetch(url);
    let res_data = await res.json();
    setData(res_data);
    // console.log(res_data)
  };

  const handleADD=(data,token)=>{
    dispatch(postData(token, data))
    toast({
      title: 'Item added to cart',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    dispatch(getCartData(token));
  }

  const checkDelivery=()=>{
    if(pin.length==6){
      toast({
        title: `Item can be deliverd at this ${pin}`,
        duration: 2000,
        isClosable: true,
        position: 'top-centre',
      })
    }
    else {
      toast({
        title: `Item can't be deliverd at this ${pin}`,
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-centre',
      })
    }
    
  }

  useEffect(() => {
    getData();
  }, [id]);
  
  return (
    <div>
      <div id="ProductPage">
        {/* product image */}
        <div id="productImage">
          <img
            src={data.img1}
            alt="" 
          />
        </div>

        {/* product desc */}
        <div id="productDesc">
          <div id="productName">
            <Text fontSize="xl">{data.title}</Text>
            <Button size="xs">{data.category}</Button>{" "}
            <Button size="xs">{data.sub_category}</Button>
          </div>
          <hr />
          <div id="productPrice">
            <div id="productBestPrice">
              <Text color="#6f7284" as="b">
                Best Price*{" "}
              </Text>
              <Text color="red" fontSize="xl" as="b">
                {data.actual_price}
              </Text>
            </div>

            <div id="productMrp">
              <Text color="#6f7284" fontSize="xs">
                MRP{" "}
              </Text>
              <Text color="#6f7284" fontSize="xs" as="s">
                MRP ₹ {data.crossed_price}{" "}
              </Text>
              <Text fontSize="xs" color="#37916c" as="b">
                GET {Math.floor((data.actual_price/data.crossed_price)*100)}% OFF
              </Text>
            </div>

            <Text color="#6f7284" fontSize="xs">
              (Inclusive of all taxes)
            </Text>
            <UnorderedList>
              <ListItem color="#6f7284" fontSize="xs">
                Mkt: Inlife Pharma Private Limited
              </ListItem>
              <ListItem color="#6f7284" fontSize="xs">
                {" "}
                Country of Origin: India
              </ListItem>
              <ListItem color="#6f7284" fontSize="xs">
                Delivery charges if applicable will be applied at checkout
              </ListItem>
            </UnorderedList>
            <br />
            <Button colorScheme="teal" size="md" onClick={()=>handleADD(data,token)}>
              ADD TO CART
            </Button>
          </div>
          <hr />
          <div id="productDeliver">
            <Text>Check Availability & Expiry</Text>
            <div id="pincode">
              <Text color="teal" as="b">
                PINCODE:
              </Text>
              <Input placeholder="Enter Pincode" w={40} onChange={(e) => setPin(e.target.value)} />
              <Button colorScheme="teal" size="sm" onClick={()=>checkDelivery()}>
                Check
              </Button>
            </div>

            <div id="productOffer">
              <Text as="b" color="#6f7284">
                OFFERS APPLICABLE
              </Text>
              <br />
              <br />
              <div id="productDiscount">
                <div>
                  <Text fontSize="sm">Default Discount</Text>
                  <Text fontSize="sm" color="teal">
                    You get {Math.floor((data.actual_price/data.crossed_price)*100)}% OFF on this product
                  </Text>
                </div>
                <div>
                  <Text fontSize="xs" color="red">
                    Offer Applied
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="productTab">
        <SinglePageTabs />
      </div>

<br />

      <Review/>

      <br />

      <RelatedPost/>

      {/* disclaimer */}
      <div id="productDisclaimer" >
        <Box bg="white" w="100%" p={4} color="black" >
          <Text color="#6f7284" as='b'>DISCLAIMER</Text>
          <Text fontSize="xs" >
            The contents of this website are for informational purposes only and
            not intended to be a substitute for professional medical advice,
            diagnosis, or treatment. Please seek the advice of a physician or
            other qualified health provider with any questions you may have
            regarding a medical condition. Do not disregard professional medical
            advice or delay in seeking it because of something you have read on
            this website.
          </Text>
        </Box>
      </div>
    </div>
  );
}
