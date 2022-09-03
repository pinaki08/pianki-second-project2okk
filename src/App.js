import Header from "./Component/Header";
import Grid from "./Component/Gird";
import "./App.css";
import AreaOfRectangle from "./Component/AreaOfRectangle";
import { AreaOfcircle } from "./Component/AreaOfcircle";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="amrcontainer">
      <Header />

      <Container>
        {/*
        <Row>
          <Col>
            <Grid />
          </Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        */}
        <Grid />
        <AreaOfRectangle />
        <AreaOfcircle />
      </Container>
    </div>
  );
}
export default App;
