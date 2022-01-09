import styled from 'styled-components'
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Product from '../components/Product'
import End from '../components/End'
import Contact from '../components/Contact'
import { responsive } from '../components/Small'


const Container =styled.div``
const Title = styled.h1`
margin:20px`
const Filtering = styled.div`
display:flex;
justify-content:space-between;

`
const Filter = styled.div`
margin:20px;
${responsive({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`

const Text = styled.span`
font-size:20px;
font-weight:600;
margin-right:10px;
${responsive({ marginRight: "0px" })}
`
const Select = styled.select`
padding:10px;
margin-right:20px;
${responsive({ margin: "10px 0px" })}
`
const Option = styled.option`
font-size:16px`


const ShowingProduct = ()=>{
    return(
      <Container>
        <Announcement/>
        <Navbar/>
        <Title>Clothes</Title>
        <Filtering>
            <Filter>
                <Text>Filter Items:</Text>
                <Select>
                <Option disabled selected>Color</Option>
                    <Option>Pink</Option>
                    <Option>Orange</Option>
                    <Option>Red</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                </Select>
                <Select>
                <Option disabled selected>Size</Option>
                    <Option>Large</Option>
                    <Option>X-Large</Option>
                    <Option>Medium</Option>
                    <Option>Small</Option>
                    <Option>X-Small</Option>
                </Select>
             
             
                
            </Filter>
            <Filter>
                <Text>Sort Items:</Text>
                <Select>
                <Option>New</Option>
                <Option>Old</Option>
                <Option>Price (ASC)</Option>
                <Option>Price (DESC)</Option>
                   
                </Select>
               
            </Filter>
        </Filtering>
        <Product/>
        <Contact/>
        <End/>
        </Container>

    )
}


export default ShowingProduct