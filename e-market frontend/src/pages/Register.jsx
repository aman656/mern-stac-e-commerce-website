
import styled from 'styled-components'
import { responsive } from '../components/Small'


const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5),
rgba(255,255,255,0.5)), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL7n8K1-7Nv2N8EKoS32AwnRmi8toDFtBn1MHQt4l13dTOsCUe_jUy9sSII0YR-YTdd2c&usqp=CAU) center;

display: flex;
  align-items: center;
  justify-content: center;

`
const Wrapper  =styled.div`
width:40%;
padding:20px;
background-color:white;`
const Title =styled.h1`
font-size:30px;
font-weight:bold;
${responsive({ width: "75%" })}
`
const Form = styled.form`
display:flex;
flex-wrap:wrap;`
const Input = styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding:10px
`
const Check = styled.span`
font-size:20px;
margin:20px 0px`
const Button = styled.button`
width:35%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
font-size:20px;
font-weight:700;
letter-spacing:1.5px

`

const Register = ()=>{
    return(
        <Container>
            <Wrapper>
                <Title>Register Please</Title>
                <Form>
                    <Input placeholder='Enter Your Name' />
                    <Input  placeholder='Enter You Email' />
                    <Input  placeholder='Enter Your Password' />
                    <Input placeholder='Confirm Password'/>
                    <Check>
                        After creating an account, I agree with the terms and conditions of this site <b>Privacy Policy</b>
                    </Check>
                    <Button>Register</Button>
                </Form>
            </Wrapper>

        </Container>
    )
}


export default Register