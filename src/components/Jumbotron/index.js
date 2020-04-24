import React from "react";
import { Jumbotron, Container } from "reactstrap";

function CowboyJumbo() {
    return (
        <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3 text-center">Cowboy Bebop Employee Directory</h1>
            <p className="lead text-center" style={{ marginTop: "30px"}}>"Whatever happens, happens." - Spike Spiegel</p>
          </Container>
        </Jumbotron>
      </div>
    );
}

export default CowboyJumbo;