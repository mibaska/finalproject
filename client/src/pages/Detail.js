import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [villager, setVillager] = useState({})

  const {id} = useParams()
  useEffect(() => {
    API.getVillager(id)
      .then(res => setVillager(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
              {villager.villager_name}, {villager.villager_birthday}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Styles</h1>
              <p>
              {villager.villager_style_aleph}, {villager.villager_style_beth}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/editVillager"><p className="whitebg">← Back to Villagers</p></Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
