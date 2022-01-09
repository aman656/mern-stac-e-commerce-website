import { SendOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { responsive } from "./Small"


const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`
const Title = styled.h1`
font-size:60px;
font-weight:600;
margin-bottom:20px
`
const Desc = styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
${responsive({ textAlign: "center" })}
`
const InpContainer = styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;
${responsive({ width: "80%" })}
`
const Input = styled.input`
border:none;
flex:8;
padding-left:10px;
font-size:16px
`
const Button = styled.button`
flex:1;
border:none;
color:white;
background-color:teal;

`


const Contact = ()=>{
    return(
        <Container>
            <Title>Any Query</Title>
            <Desc>We are here 24/7 to help you</Desc>
            <InpContainer>
                <Input placeholder="Enter Your Email"/>
                <Button>
                    <SendOutlined/>
                </Button>
            </InpContainer>
        </Container>
    )
}


export default Contact