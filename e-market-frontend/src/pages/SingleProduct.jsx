import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Contact from '../components/Contact'
import End from '../components/End'
import { Add, Remove } from '@material-ui/icons'
import { responsive } from '../components/Small'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {addProduct} from '../store/cart'



const Container=styled.div`
`
const Wrapper=styled.div`
padding:50px;
display:flex;
${responsive({ padding: "10px", flexDirection:"column" })}
`
const ImgContainer=styled.div`
flex:1;
`
const Image=styled.img`
height:70vh;
width:100%;
object-fit:cover;
${responsive({ height: "40vh" })}
`
const Detail=styled.div`
flex:1;
padding:0px 60px;
${responsive({ padding: "10px" })}
`
const Title=styled.h2`
font-weight:600;
`
const Desc=styled.p`
margin:20px 0px;
font-size:18px
`
const Price=styled.span`
font-weight:200;
font-size:40px
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${responsive({ width: "100%" })}
 
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${responsive({ width: "100%" })}
 
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor:pointer;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  font-size:16px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
  &:hover{
      background-color: #f8f4f4;
  }
`;




const SingleProduct = ()=>{
  const history = useHistory()
  const id = history.location.pathname.split("/")[2]
  const [proid,setProId] = useState({})
  const [quantity,setQuantity] = useState(1)
  const [selectedcolor,setSelectedColor]=useState("")
  const [selectedsize,setSelectedSize]=useState("")
  const dispatch = useDispatch()
  const quantityHandler = (type)=>{
    if(type==="dec"){
      quantity >1 && setQuantity(quantity-1)
    }else{
      setQuantity(quantity+1)
    }

  }
 
  const cartHandler = ()=>{
    dispatch(addProduct({...proid,quantity,selectedcolor,selectedsize}))
      
  }
  useEffect(()=>{
    const gettingSinglee =async()=>{
      try{
      const res = await axios.get(`http://localhost:9000/api/product/find/${id}`)
      setProId(res.data)
      }catch(err){
        console.log(err)
      }
    } 
    gettingSinglee()
  },[id])
 
    return(
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                <Image src={proid.img} />
                </ImgContainer>
                <Detail>
                    <Title>{proid.title}</Title>
                    <Desc>{proid.desc}</Desc>
                    <Price>${proid.price}</Price>
                    <FilterContainer>
                    <Filter>
              <FilterTitle>Color</FilterTitle>
              {proid.color?.map((c)=>(
                <FilterColor color={c}  onClick={()=>setSelectedColor(c)} />
              ))}
             
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setSelectedSize(e.target.value)}>
                {proid.size?.map((s)=>(
                  <FilterSizeOption>{s}</FilterSizeOption>
                ))}
               
             
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick = {()=>quantityHandler("dec")} />
              <Amount>{quantity}</Amount>
            <Add  onClick = {()=>quantityHandler("inc")}  />
            </AmountContainer>
            <Button onClick={cartHandler}>ADD TO CART</Button>
          </AddContainer>
                </Detail>
              
           
            </Wrapper>
            <Contact/>
            <End/>

        </Container>
    )
}

export default SingleProduct

