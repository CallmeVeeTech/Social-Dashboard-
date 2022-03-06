import React from 'react'
import styled from 'styled-components'
import Card from '../card/card'
import Toptext from '../toptext/toptext'
import Card2 from '../Card2/card2'
import fb from '../img/fb.svg'
import up from '../img/up.svg'
import twitter from '../img/twitter.svg'
import instagram from '../img/instagram.svg'
import youtube from '../img/youtube.svg'
import down from '../img/down.svg'

const Home = (props) => {
  return (
      <Container>
          <Wrapper>
              <Toptext title="Social Media Dashboard" info="Total Followers: 23,004" fsize="50px"/>
              <Cardhold>
                  <Card img={fb} arrow={up} followers="1987" today="12 Today" color="#fff" color="green" border="7px solid #2C9DE3"/>
                  <Card img={twitter} arrow={up} followers="1044" today="99 Today" color="green" border="7px solid #2C9DE3"/>
                  <Card img={instagram} arrow={up} followers="11k" today="1099 Today"  color="green" border="7px solid #E89C84"/>
                  <Card img={youtube} arrow={down} followers="8239" today="144 Today" color="red" border="7px solid #AC0E31"/>
              </Cardhold>
              <Toptext title="Overview-Today" fsize="40px" />
              <Card2hold>
              <Card2 page="Page Views" icon={fb} view="87" arrow={up} color="green" percent="3%"/>
              <Card2 page="Likes" icon={fb} view="52" arrow={down} color="red" percent="2%"/>
              <Card2 page="Likes" icon={instagram} view="5562" arrow={up} color="green" percent="2257%"/>
              <Card2 page="Profile Views" icon={instagram} view="52k" arrow={up} color="green" percent="1375%"/>
              </Card2hold>
              <Card2hold>
              <Card2 page="Retweets" icon={twitter} view="117" arrow={up} color="green" percent="303%"/>
              <Card2 page="Likes" icon={twitter} view="507" arrow={up} color="green" percent="553%"/>
              <Card2 page="Likes" icon={youtube} view="107" arrow={down} color="red" percent="19%"/>
              <Card2 page="Total Views" icon={youtube} view="1407" arrow={down} color="red" percent="12%"/>
              </Card2hold>
          </Wrapper>
      </Container>
  )
}

export default Home;
const Container = styled.div`
width: 80%;
/* min-height: 80%; */
height: 100vh;
background: #1D2029;
display: flex;
justify-content: center;
/* align-items: center; */
`
const Wrapper = styled.div`
width: 80%;
`
const Cardhold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
const Card2hold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
