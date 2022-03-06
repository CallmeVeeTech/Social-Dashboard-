import React from 'react'
import styled from 'styled-components'
import fb from '../img/fb.svg'
import up from '../img/up.svg'

const Card2 = (props) => {
  return (
    <Container>
        <Wrapper>
            <Iconnhold>
                <p>{props.page}</p>
                <Icon src={props.icon}/>
            </Iconnhold>
            <Viewshold>
                <Views>{props.view}</Views>
                <Ratehold>
                    <Arrow src={props.arrow}/>
                    <Percent style={{color: props.color}}>{props.percent}</Percent>
                </Ratehold>
            </Viewshold>
        </Wrapper> 
    </Container>
  )
}

export default Card2;

const Container = styled.div`
width: 450px;
height: 230px;
background: #252B43;
margin-top: 50px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
`
const Wrapper = styled.div`
width: 70%;
height: 80%;
/* background: yellow; */
`
const Iconnhold = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
p{
    color: #7C83A8;
    font-size: 25px;
    font-weight: 500;
}
`
const Icon = styled.img`
width: 30px;
height: 30px;
`
const Viewshold = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`
const Views = styled.div`
font-size: 75px;
color: #fff;
font-weight: bold;
`
const Ratehold = styled.div`
display: flex;
align-items: center;
margin-top: 40px;
`
const Arrow = styled.img`
width: 15px;
height: 10px;
`
const Percent = styled.div`
color: green;
font-size: 25px;
font-weight: bold;
`




