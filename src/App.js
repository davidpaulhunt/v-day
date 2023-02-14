import React from "react";
import { WiredDivider } from "wired-elements-react/lib/WiredDivider";
import { WiredImage } from "wired-elements-react/lib/WiredImage";
import {
  Container,
  Row
} from "reactstrap";
import Countdown from "components/Countdown";
import us1 from "images/us1.JPG"

import "./App.css";

const imgsrc = "https://picsum.photos/seed/picsum/500/300";

function App() {
  return (<>
    <Countdown />
    <Container fluid style={{ paddingTop: "100px" }}>
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
          ( don't we look happy? )
        </h3>
      </Row>
    </Container>
    <br />
    <Container>
    <Row>
        <h1>
          Here is a cute picture of us
        </h1>
      </Row>
    </Container>
    </>
  )
}

export default App;
