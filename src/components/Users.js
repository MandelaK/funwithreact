import React from "react";
import { Container, Card, Col, Button, Spinner } from "react-bootstrap";

class Users extends React.Component {
  state = {
    isLoading: false
  };

  titleCase = string => {
    // capitalize the first letter, source = http://www.corelangs.com/js/string/cap.html
    return string.replace(/\w\S*/g, function(tStr) {
      return tStr.charAt(0).toUpperCase() + tStr.substr(1).toLowerCase();
    });
  };

  getUser = () => {
    this.setState({
      isLoading: true
    });
    fetch("https://randomuser.me/api/", {
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        const { results } = data;
        const { title, last, first } = results[0].name;
        let name = title + " " + first + " " + last;
        this.setState({
          fullName: this.titleCase(name),
          age: results[0].dob.age,
          gender: results[0].gender,
          username: results[0].login.username,
          picture: results[0].picture.medium
        });
        this.setState({
          isLoading: false
        });
      })
      .catch(error =>
        this.setState({
          error: error
        })
      );
  };

  componentDidMount() {
    this.getUser();
  }
  render() {
    const {
      isLoading,
      fullName,
      age,
      gender,
      username,
      picture,
      error
    } = this.state;
    if (isLoading) {
      return (
        <div className="loading container">
          <Spinner animation="border" />
        </div>
      );
    } else if (error) {
      return <div className="error text-danger">{error}</div>;
    }
    return (
      <div className="jokes container">
        <br />
        <Container>
          <Col xs={6} md={4}>
            <Card className="center" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img variant="top" src={picture} />
                <Card.Title>{fullName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  @{username}
                </Card.Subtitle>
                <Card.Text>{gender}</Card.Text>
                <Card.Text>
                  <b>Age: </b> {age}
                </Card.Text>
                <Button variant="info" onClick={this.getUser}>
                  Where's the rest?
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}
export default Users;
