import styled from 'styled-components'

const Card = (props) => {
  return (
   <>
   <Cardhold border={props.border} >
       <Wrapper>
           <UserIcon><SocialIcon src={props.img} alt=""/><h4>@nathanf</h4></UserIcon>
           <Followers>{props.followers}</Followers>
           <p>FOLLOWERS</p>
           <DailyUsers><Arrow src={props.arrow}/><h6 style= {{
               color: props.color
           }}>{props.today}</h6></DailyUsers>
       </Wrapper>
   </Cardhold>
   </>
  )
}
export default Card;

const Cardhold = styled.div`
width: 450px;
height: 400px;
background: #252B43;
margin-top: 80px;
border-radius: 10px;
border-top: ${({border})=>border};
display: flex;
justify-content: center;
line-height: 40px;
`
const Wrapper = styled.div`
height: 100%;
width: 60%;
/* background: yellow; */
display: flex;
align-items: center;
flex-direction: column;
p{
    font-size: 35px;
    color: #7C83A8;
    
}
`
const UserIcon = styled.div`
display: flex;
width: 100px;
display: flex;
align-items: center;
margin-bottom: 30px;
h4{
    font-size: 20px;
    color: #7C83A8;
}
`
const SocialIcon = styled.img`
width: 25px;
height: 25px;
margin: 5px;
`
const Followers = styled.div`
font-size: 110px;
font-weight: bold;
color: #fff;
margin-bottom: 15px;
`
const DailyUsers = styled.div`
display: flex;
align-items: center;
height: 100px;
justify-content: flex-start;
h6{
    font-size: 22px;
}
`
const Arrow = styled.img`
width: 25px;
height: 20px;
`