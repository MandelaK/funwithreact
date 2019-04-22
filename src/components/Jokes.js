import React from "react";
import {Button, Spinner} from 'react-bootstrap';

class Jokes extends React.Component {
  state = {
    isLoading: false
  };

  callJoke = () => {
    this.setState({
        isLoading: true
      });
      fetch(process.env.JOKES_URL,{
          headers: {
              'Accept': 'application/json',
            }
      })
        .then(res => res.json())
        .then(data => {
            this.setState({
                joke: data.joke
            })
            this.setState({
              isLoading: false
            });
        })
        .catch(error =>
          this.setState({
            error: error
          })
        );
  }
  componentDidMount() {
    this.callJoke()
  }
  render() {
    const {
      isLoading, error, joke

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
        {joke}
        <br /> <br />
        <Button variant="info" onClick={this.callJoke}>Ahahah! Feed me more!</Button>
      </div>
    );
  }
}

export default Jokes;
