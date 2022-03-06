import React from 'react'
import styled from 'styled-components'
const Toptext = (props) => {
  return (
    <Container>
        <TextHold>
            <Text>
            <Social fsize={props.fsize}>{props.title}</Social>
            <span>{props.info}</span>
            </Text>
            <Btn width={props.width} height={props.height}>{props.mode}</Btn>
        </TextHold>
    </Container>
  )
}
export default Toptext;

const Container = styled.div`
margin-top: 80px;
`
const TextHold = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Text = styled.div`
width: 800px;
span{
    color: #7C83A8;
    font-size: 30px;
}
`
const Social = styled.div`
font-size: ${({fsize})=>fsize};
color: #fff;
font-weight: 500;
`
const Btn = styled.div`
width: ${({width})=>width};
height: ${({height})=>height};
background: #fff;
`