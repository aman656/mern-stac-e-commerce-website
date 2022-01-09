import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Contact from '../components/Contact'
import End from '../components/End'
import Pants from '../assets/pants.png'
import { Add, Remove } from '@material-ui/icons'
import { responsive } from '../components/Small'



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
    return(
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                <Image src={Pants} />
                </ImgContainer>
                <Detail>
                    <Title>Dream Shirt</Title>
                    <Desc>A shirt to wear all year with comfort. Just Buy and come again</Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                    <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
            <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
                </Detail>
              
           
            </Wrapper>
            <Contact/>
            <End/>

        </Container>
    )
}

export default SingleProduct

