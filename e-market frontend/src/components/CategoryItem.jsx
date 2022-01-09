import styled from 'styled-components'
import { responsive } from './Small'




const Container = styled.div`
flex:1;
margin:4px;
height:60vh;
position:relative;
`

const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
${responsive({ height: "20vh" })}
`
const Detail = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const Title = styled.h2`
color:white;
letter-spacing:2px;
font-size:30px;
margin-bottom:10px;

`
const Button = styled.button`
border:none;
padding:10px;
background-color:white;
letter-spacing:1px;
font-weight:600;
cursor:pointer;
color:gray;
`


const CategoryItem = ({item})=>{
    return(
        <Container>
            <Image src={item.image} />
            <Detail>
            <Title>{item.title}</Title>
            <Button>Buy Now</Button>
            </Detail>
        </Container>
    )

}

export default CategoryItem