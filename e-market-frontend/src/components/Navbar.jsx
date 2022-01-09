import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import {responsive} from './Small'
import {useSelector} from 'react-redux'


const Container = styled.div`
      height:60px;
      ${responsive({ height: "50px" })}
  

`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
${responsive({ padding: "10px 0px" })}
`
const Left =styled.div`

display:flex;
align-items:center;
flex:1


`
const Language = styled.span`
font-size:14px;
cursor:pointer;
${responsive({ display: "none" })}
`

const SearchBar = styled.div`
display:flex;
border:0.5px solid lightgray;
align-items:center;
margin-left:25px;
padding:5px
`
const Input = styled.input`
border:none;
${responsive({ width: "50px" })}
`

const Center = styled.div`
flex:1;
text-align:center;
`
const Logo = styled.h1`
font-weight:bold;
${responsive({ fontSize: "24px" })}
`

const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${responsive({ flex: 2, justifyContent: "center" })}
`
const Menu = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${responsive({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = ()=>{
    const quantity = useSelector(state=>state.cart.quantity)
   
   
    return(
        <Container>
            <Wrapper>
     <Left><Language>
         En
         </Language>
         <SearchBar>
         <Search style={{color:"gray", fontSize:16}} />
             <Input/>
        
                 </SearchBar></Left>
     <Center><Logo>
         E-Zay.
         </Logo></Center>
     <Right><Menu>Register</Menu>
     <Menu>Login</Menu>
     <Menu>
         <Badge badgeContent={quantity} color="primary">
             <ShoppingCartOutlined/>
         </Badge>
     </Menu>
     </Right>
            </Wrapper>
        </Container>
    )
}


export default Navbar