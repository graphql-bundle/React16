import React from "react";
import logo from "./logo.svg";
import spacex_logo from "./spacex-logo-light.png";
import "./App.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Launches from "./launch/Launches";

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql",
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ApolloProvider client={client}>
        <div className="container">
          <img src={spacex_logo} className="spacex_logo" alt="spacex logo" />
          <Launches />
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
