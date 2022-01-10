import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import End from "../components/End"
import styled from "styled-components"
import {Add,Remove} from '@material-ui/icons'
import { responsive } from "../components/Small"
import {useSelector} from'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useState,useEffect } from "react"
import axios from "axios"






const Wrapper = styled.div`
padding:20px;
${responsive({ padding: "10px" })}
`
const Container = styled.div``
const Title = styled.h1`
font-weight:500;
text-align:center;

`

const Top = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  padding:15px;
`
const TopButton = styled.button`
padding:13px;
font-weight:600;
letter-spacing:1px;
cursor:pointer;
border:${(props)=>props.type==="filled" && "none"};
background-color:${(props)=>props.type==="filled" ? "black" : "transparent"};
color:${(props)=>props.type==="filled"  && "white" }
`

const TopText=styled.div`
${responsive({ display: "none" })}
`
const Text = styled.a`
text-decoration:underline;
margin:0px 10px;
cursor:pointer;

` 

const Bottom = styled.div`
display: flex;

  justify-content: space-between;
  ${responsive({ flexDirection: "column" })}
  `

  const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${responsive({ flexDirection: "column" })}

`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

  ${responsive({ margin: "5px 15px" })}

`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${responsive({ marginBottom: "20px" })}

`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;



const Cart=  ()=>{
  const cart = useSelector(state=>state.cart) 
  const [stripeToken,setStripeToken]=  useState(null)
  const onToken = (token)=>{
    setStripeToken(token)

  }
  useEffect(()=>{
    const checkingOut = async()=>{
      try{
      const res = await axios.post("http://localhost:9000/api/stripe/pay",{
        token:stripeToken.id,
        amount:50*100
      })
      console.log(res.data)
    }
      catch(err){
        console.log(err)
      }
    }
    stripeToken &&  checkingOut()
  },[stripeToken,cart.totalPrice])
  console.log(stripeToken)
    return(
        <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
                <TopButton type="filled">Shop More</TopButton>
                <TopText>
                    <Text >Shopping Bag(3)</Text>
                    <Text>Your Wishlist</Text>
                </TopText>
                <TopButton>Check Out</TopButton>
            </Top>
            <Bottom>
                <Info>
           {cart.products.map((pro)=>( <Product>
              <ProductDetail>
                <Image src={pro.img}/>
                <Details>
                  <ProductName>
                    <b>Product:</b> {pro.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {pro._id}
                  </ProductId>
                  <ProductColor color={pro.color} />
                  <ProductSize>
                    <b>Size:</b> {pro.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{pro.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>${pro.price*pro.quantity}</ProductPrice>
              </PriceDetail>
            </Product>))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="E-ZAY SOLUTIONS"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.totalPrice}`}
              amount={cart.totalPrice * 100}
              token={onToken}
              stripeKey={"pk_test_51KGOyoGMJUhLvwvja0n6b4cy8AKwCajsaSytMsyDslSAaqnqCkb0m5poSxYkay8BEDtfegxXj6vEfQs7ptcifqfX00xdPW8KZt"}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
            </Bottom>
        </Wrapper>
        <End/>


        </Container>

    )
}

export default Cart