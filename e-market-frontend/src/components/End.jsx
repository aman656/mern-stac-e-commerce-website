import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { responsive } from "./Small"


const Container = styled.div`
display:flex;
${responsive({ flexDirection: "column" })}
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px
`

const Logo = styled.h2``
const Desc = styled.p`
margin:20px 0px
`
const MediaContainer = styled.div`
display:flex;

`
const Media = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin:10px;
`

const Center = styled.div`
flex:1;
padding:20px;
${responsive({ display: "none" })}
`
const Title = styled.h3`
margin-bottom:20px;`

const List = styled.ul`
padding:0;
margin:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`

const Item = styled.li`
width:50%;
margin-bottom:10px;
`

const Right = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
${responsive({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;


`





const End = ()=>{
    return(
        <Container>
            <Left>
                <Logo>E-ZAY</Logo>
                <Desc>The best in e-shoping solution at your hand. Just choose and let us know we will deliver with best possible services right now in the market.</Desc>
                <MediaContainer>
                <Media color="3B5999">
                    <Facebook  />
                </Media>
                <Media color="E4405F">
                    <Twitter  />
                </Media>
                <Media color="55ACEE">
                    <Instagram  />
                </Media>
                <Media color="E60023">
                    <Pinterest />
                </Media>
                </MediaContainer>
            </Left>
            <Center>
                <Title>Happily Visit</Title>
                <List>
<Item>Home </Item>
<Item>Cart</Item>
<Item>Man Fashion</Item>
<Item>Women Fashion</Item>
<Item>Accessories</Item>
<Item>My Account</Item>
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px" }}/>
                    451/3 Block-D Sector No:14 Orangi Town Karachi

                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>
                    +92 317 1055036
                    
                </ContactItem>
                <ContactItem>
                    <Email style={{marginRight:"10px"}} />
                    amansiddiquias123@gmail.com
                    
                </ContactItem>
            </Right>
        </Container>
    )

}

export default End
