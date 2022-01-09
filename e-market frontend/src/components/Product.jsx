import styled from 'styled-components'
import ProductItem from './ProductItem'
import { products } from './SlideList'


const Container =styled.div`
display:flex;
padding:20px;
flex-wrap:wrap;
justify-content:space-between'
`


const Product = ()=>{
    return(
        <Container>
            {products.map((pro)=>(
                <ProductItem  pro={pro} key={pro.id} />
            ))}

        </Container>

    )
}

export default Product