import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"





const Detail = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.5);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
`

const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;

&:hover ${Detail}{
    opacity:1;
    transition: all 1s ease;
    cursor:pointer

}
`

const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
position:absolute;
background-color:white;
`

const Image = styled.img`
height:70%;
z-index:2;

`


const Icon = styled.div`
width:50px;
height:50px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
background-color:white;
margin:10px;

&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
    transition:all 0.5s ease;

}
`

const ProductItem = ({pro})=>{
    return(
        <Container>
            <Circle/>
            <Image src = {pro.image} />
            <Detail>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Search/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Detail>

        </Container>
    )

}


export default ProductItem