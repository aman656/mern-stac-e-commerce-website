import styled from 'styled-components'
import ProductItem from './ProductItem'

import axios from 'axios'
import {useState,useEffect} from 'react'


const Container =styled.div`
display:flex;
padding:20px;
flex-wrap:wrap;
justify-content:space-between'
`


const Product = ({category,filters,sort})=>{
    const [product,setProducts] = useState([])
    const [filtered,setFiltered] = useState([])
    useEffect(()=>{
        const getting = async()=>{
            try{
                const res = await axios.get(category ? `http://localhost:9000/api/product?category=${category}` : `http://localhost:9000/api/product`)
                setProducts(res.data)

            }catch(err){
                console.log(err)

            }
            
        }
        getting()


    },[category])
    useEffect(()=>{
       category && setFiltered(product.filter((item)=>
            Object.entries(filters).every(([key,value])=>
                item[key].includes(value)
            )
        ))

    },[product,category,filters])
    useEffect(()=>{
        if(sort==="new"){
            setFiltered((previous)=>
            [...previous].sort((a,b)=> a.createdAt - b.createdAt ))
        }else if(sort==="asc"){
            setFiltered((previous)=>
            [...previous].sort((a,b)=> a.price - b.price ))

        }else{
            setFiltered((previous)=>
            [...previous].sort((a,b)=>b.price-a.price))
        }

    },[sort])
    
    return(
        <Container>
            {category ?  filtered.map((pro)=>(
                <ProductItem  pro={pro} key={pro._id} />
            )) : product.slice(0,8).map((pro)=>(
                <ProductItem pro={pro} key={pro._id} />
            ))}

        </Container>

    )
}

export default Product