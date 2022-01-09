import styled from 'styled-components'
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Product from '../components/Product'
import End from '../components/End'
import Contact from '../components/Contact'
import { responsive } from '../components/Small'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'


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
    const history = useHistory()
    const category = history.location.pathname.split("/")[2]
    const [filters,setFilters]=  useState({})
    const [sorting,setSorting] = useState("new")
    const filterHandler = (e)=>{
        setFilters({...filters,[e.target.name]:e.target.value})
    }
    const sortingHandler =(e)=>{
        setSorting(e.target.value)
    }

    return(
      <Container>
        <Announcement/>
        <Navbar/>
        <Title>{category.toUpperCase()}</Title>
        <Filtering>
            <Filter>
                <Text>Filter Items:</Text>
                <Select name='color' onChange={filterHandler}>
                <Option disabled defaultValue>Color</Option>
                    <Option>Pink</Option>
                    <Option>Orange</Option>
                    <Option>Red</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Gray</Option>
                </Select>
                <Select name='size' onChange={filterHandler}>
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
                <Select onChange={sortingHandler}>
                <Option value="new">New</Option>
                <Option value="old">Old</Option>
                <Option value="asc">Price (ASC)</Option>
                <Option value="dsc">Price (DESC)</Option>
                   
                </Select>
               
            </Filter>
        </Filtering>
        <Product  category={category} filters={filters} sort = {sorting} />
        <Contact/>
        <End/>
        </Container>

    )
}


export default ShowingProduct