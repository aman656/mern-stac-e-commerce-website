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
width:25%;
padding:20px;
background-color:white;`
const Title =styled.h1`
font-size:30px;
font-weight:bold;`
const Form = styled.form`
display:flex;
flex-direction:column;`
const Input = styled.input`
flex:1;
min-width:40%;
margin:  10px 0px ;
padding:10px;
${responsive({ width: "75%" })}
`

const Button = styled.button`
width:35%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
font-size:20px;
font-weight:700;
letter-spacing:1.5px;
margin-top:5px;
margin-bottom:10px;
margin:auto;

`

const Link = styled.a`
margin-top:8px;
text-align:center;
color:teal;
letter-spacing:1.5px;
text-decoration:underline;
font-size:18px;
cursor:pointer;
`


const Login = ()=>{
    return(
        <Container>
             <Container>
            <Wrapper>
                <Title>Login Please</Title>
                <Form>
             
                    <Input  placeholder='Enter You Email' />
                    <Input  placeholder='Enter Your Password' />
                    <Input placeholder='Confirm Password'/>
                   
                    <Button>Login</Button>
                    <Link>Forget Password</Link>
                    <Link>Create an Account</Link>
                </Form>
            </Wrapper>

        </Container>

        </Container>
    )
}

export default Login