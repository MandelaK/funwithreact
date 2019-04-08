import React, { Component } from "react";
import { BrowserRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <p>Let's have some fun</p>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
