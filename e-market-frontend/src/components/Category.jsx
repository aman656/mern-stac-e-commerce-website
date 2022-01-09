import styled from 'styled-components'
import {items} from './SlideList'
import CategoryItem from './CategoryItem'
import { responsive } from './Small'

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${responsive({ padding: "0px", flexDirection:"column" })}

`


const Category = ()=>{
    return(
        <Container>
            {items.map((item)=>(
                <CategoryItem item= {item} key={item.id} />

            ))}

        </Container>

    )
}

export default Category