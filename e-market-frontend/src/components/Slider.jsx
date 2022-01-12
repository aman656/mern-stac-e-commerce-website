import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import BlackSuit from '../assets/BlackSuit.png'
import {slides} from './SlideList'
import {useState} from 'react'
import {responsive} from './Small'

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
${responsive({ display: "none" })}

`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"};
bottom:0;
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2
`

const Wrapper = styled.div`
height:100%;
display:flex;
transform:translateX(${props=>props.index * -100}vw);
transition:all 1.5s ease;
`
const Slide =styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
 background-color:#${props=>props.bg}

`

const ImageContain = styled.div`
height:100%;
flex:1;
padding-bottom:50px;
`
const Image = styled.img`
height:80%;

`
const DetailContain = styled.div`
flex:1;
padding:50px;`

const Name =styled.h1`
font-size:70px;
font-weight:900;
`
const Desc =styled.h1`
margin:50px 0;
font-size:30px;
font-weight:700;
letter-spacing:3px;`
const Button =styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`

const Slider = ()=>{
    const [index,setIndex] =useState(0)
    const slideHandler = (direction)=>{
        if(direction==="left"){
            setIndex(index > 0 ? index-1:1)
        }else{
            setIndex(index <  1 ? index+1 : 0)
        }

    }
    return(
        <Container >
            <Arrow direction="left" onClick={()=>setIndex("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper index={index}>
                {slides.map((slide)=>(

                <Slide bg={slide.bg} key={slide.id}>
                    <ImageContain>
                        <Image src="https://o.remove.bg/downloads/9bc2c831-d82d-4b5c-ad08-ea9f1d00a6db/istockphoto-1284839442-612x612-removebg-preview.png"/>
                    </ImageContain>
                    <DetailContain>
                        <Name>{slide.name}</Name>
                        <Desc>{slide.desc}</Desc>
                        <Button>Buy Now</Button>
                    </DetailContain>
                </Slide>
                ))}
               
            </Wrapper>
            <Arrow direction="right" onClick={()=>slideHandler("right")}>
                <ArrowRightOutlined/>
            </Arrow>

        </Container>
    )
}

export default Slider