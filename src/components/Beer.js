import React from "react";
import {Card, Col, Container, Spinner} from 'react-bootstrap';

class Beer extends React.Component {
  state = {
    isLoading: false
  };
  componentDidMount() {
      this.setState({
          isLoading: true
      })
    fetch(process.env.BEERS_URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          abv: data[0].abv,
          name: data[0].name,
          tagline: data[0].tagline,
          first_brewed: data[0].first_brewed,
          description: data[0].description,
          tips: data[0].brewers_tips,
          image: data[0].image_url
        }), this.setState({
            isLoading: false
        })}
      ).catch(error => this.setState({
          error: error
      }))
  }
  render() {
    const { isLoading, abv, name, tagline, first_brewed, description, image, error, tips } = this.state;
    if (isLoading){
        return <div className="loading container"><Spinner animation="border" /></div>
    } else if (error){
        return <div className="error text-danger">{error}</div>
    }
    return (
      <div id="beer container">
      <br/>
      <Container>
      <Col xs={6} md={4}>
        <Card className="center" style={{ width: "18rem" }}>
          <Card.Body>
          <Card.Img variant="top" src={image} />
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{tagline}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            <Card.Text><b>Golden Advice: </b>{tips}</Card.Text>
            <Card.Text><b>Since: </b> {first_brewed}</Card.Text>
            <Card.Text><b>abv: </b> {abv}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Let's Drink and be merry!</Card.Subtitle>
          </Card.Body>
        </Card>
        </Col>
        </Container>
      </div>
    );
  }
}

export default Beer;
