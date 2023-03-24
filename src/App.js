import React from "react";
import { WiredDivider } from "wired-elements-react/lib/WiredDivider";
import { WiredImage } from "wired-elements-react/lib/WiredImage";
import {
  Container,
  Row
} from "reactstrap";
import Countdown from "components/Countdown";
import Slideshow from "components/Slideshow"
import us1 from "images/us1.JPG"
import card1f from "images/card1-front.png"
import card1b from "images/card1-back.jpg"
import card2f from "images/card2-front.jpg"
import card2b from "images/card2-back.png"
import text1 from "images/text1.PNG"
import text2 from "images/text2.PNG"
import dogChocolate from "images/dog-and-chocolate.jpeg"
import us3 from "images/us3.JPG"
import bham1 from "images/bham1.JPG"
import bham2 from "images/bham2.jpg"

import "./App.css";

function Card1() {
  return (
    <>
      <WiredImage src={card1f} elevation={2} />
      <WiredImage src={card1b} elevation={2} />
    </>
  )
}

function Card2() {
  return (
    <>
      <WiredImage src={card2f} elevation={2} />
      <WiredImage src={card2b} elevation={2} />
    </>
  )
}

function App() {
  return (<>
    <Countdown />
    <Container fluid style={{ paddingTop: "100px", paddingBottom: "20px" }}>
      <Row>
        <h1>
          😘 Hey baby
          We did it!
          Another trip, another beautiful set of memories together
          Here are some reminders
        </h1>
      </Row>
      <Row>
        <WiredImage src={bham1} elevation={2} />
        <h1>Twinsies! ⚽️</h1>
        <WiredImage src={bham2} elevation={2} />
        <h1>👔👗 Our fancy dinner date 🍽</h1>
      </Row>
      <Row>
        <h1>
          I had such an amazing time with you ❤️
          <br />
          And can't wait until Wireless 🎵
        </h1>
      </Row>
      <br /><br /><br />
      <Row>
        <h1>
          👋
          Hi Stevie
          Welcome to <span style={{ color: "red" }}>Valentine's Day</span> 2023
        </h1>
      </Row>
      <br />
      <Row>
        <h1>
          Here is a cute picture of us
        </h1>
      </Row>
      <Row>
        <WiredImage src={us1} elevation={2} />
        <h3>
          ( don't we look happy? 😁 )
        </h3>
      </Row>
      <br />
      <Row>
        <h1>
          I got you a card
        </h1>
        <Card1 />
      </Row>
      <br />
      <Row>
        <h1>
          And then I got you another one 😅
        </h1>
        <Card2 />
      </Row>
      <br />
      <Row>
        <h1>
          Did you know we first said "I ♥️ you" on Friday, December 9th? I said it first on a call while you rode the 🚌. And then you said it back via text, check it out ⬇️
        </h1>
        <WiredImage src={text1} elevation={2} />
        <WiredImage src={text2} elevation={2} />
        <h3>
          ( jeez, we're adorable )
        </h3>
      </Row>
      <br />
      <Row>
        <h1>
          I had such an <b>amazing</b> time with you in London 🇬🇧
        </h1>
        <h1>Our first 💋 was my best (and hopefully LAST) first kiss!</h1>
        <WiredImage src="https://gifdb.com/images/high/milk-and-mocha-kiss-2vwjr4s7usa2g5kj.gif" />
        <h1>
          And Hamilton + you in your little dress = 🔥🔥🔥
          <br />
          I felt important with you on my arm 💪
        </h1>
      </Row>
      <br />
      <Row>
        <h1>
          Speaking of London, here are more pictures of us...
        </h1>
        <Slideshow />
      </Row>
      <br />
      <Row>
        <h1>
          I can't be there to bring you candy today, but here's a cute dog holding chocolate instead 😍 🐶
        </h1>
        <WiredImage src={dogChocolate} />
      </Row>
      <br />
      <Row>
        <h1>
          Well, I think you've gotten the point that I really, REALLY love you.
        </h1>
        <br />
        <h1>
          Happy <span style={{ color: "red" }}>Valentine's Day</span>, babe.
        </h1>
        <WiredImage src={us3} />
      </Row>
      <br />
      <Row>
        <h1>❤️ David x Stevie ❤️</h1>
        <h3>2023</h3>
      </Row>
    </Container>
    </>
  )
}

export default App;
