import styled from 'styled-components'


const Conatiner=styled.div`
height:30px;
background-color:teal;
color:white;
text-align:center;
padding:5px;
font-size:18px;
font-weight:bold;

`


const Announcement = ()=>{
return(
    <Conatiner>
        Sale is on ! ! !  Grab All Quickly at large Discount
    </Conatiner>
)
}


export default Announcement