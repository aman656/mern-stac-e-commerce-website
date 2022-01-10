import styled from 'styled-components'
import { responsive } from '../components/Small'
import {loginThunk} from '../store/userActions'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'



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
font-size:16px;
color:black;
font-weight:900;
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
&:disabled{
    cursor:not-allowed;
    color:green;
}

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
const Error = styled.span`
color:red;
text-align:center;
font-size:20px;
font-weight:600;
margin:5px;
`

const Login = ()=>{
    const [email,setEmail]  = useState("")
    const [password,setPassword] = useState("")
    const {isFetching,isError} = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const submitHandler = (e)=>{
        e.preventDefault()
        loginThunk(dispatch,{email,password})


    }
    return(
        <Container>
             <Container>
            <Wrapper>
                <Title>Login Please</Title>
                <Form>
             
                    <Input type="email"  placeholder='Enter You Email' onChange={(e)=>setEmail(e.target.value)} />
                    <Input type="password" placeholder='Enter Your Password'  onChange={(e)=>setPassword(e.target.value)} />
                 
                   
                    <Button onClick={submitHandler} disabled={isFetching} >Login</Button>
                   {isError && <Error>An error Occured</Error>}
                    <Link>Forget Password</Link>
                    <Link>Create an Account</Link>
                </Form>
            </Wrapper>

        </Container>

        </Container>
    )
}

export default Login