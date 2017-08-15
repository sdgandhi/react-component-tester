import React, { Component } from 'react';
import './App.css';
import {CleanTerminal, StatementLine, InputStatementLine} from 'clean-terminal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React component tester</h1>
        </div>
        <div>
          <p>Run <code>npm link</code> in your component library.</p>
          <p>Then run <code>npm link component-library</code> in this project.</p>
        </div>
          <div>
              <CleanTerminal>
                  <InputStatementLine>echo "<span role="img" aria-label="wave">👋</span> Hello, friend."</InputStatementLine>
                  <StatementLine><span role="img" aria-label="wave">👋</span> Hello, friend.</StatementLine>
                  <InputStatementLine>ping http://sdgandhi.github.io</InputStatementLine>
                  <StatementLine>
                      <p>PING sni.github.map.fastly.net (151.101.41.147): 56 data bytes</p>
                      <p>64 bytes from 151.101.41.147: icmp_seq=0 ttl=56 time=6.610 ms</p>
                      <p>64 bytes from 151.101.41.147: icmp_seq=1 ttl=56 time=6.603 ms</p>
                  </StatementLine>
              </CleanTerminal>
          </div>
      </div>
    );
  }
}

export default App;
