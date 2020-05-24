import React from 'react';
import { Component } from 'react';
import Menubar from './tools/Menu/Menubar';
import Page from './tools/Page/Page'

class App extends Component {
  state = {
    page : 0
  };

  showPage = no => {
    this.setState({page : no});
  }; 

  render() {
    return (
      <div>
        <Menubar showPage={this.showPage}/>
        <Page page={this.state.page}/>
      </div>
    )
  }
}

export default App;
