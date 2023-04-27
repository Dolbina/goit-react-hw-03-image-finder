import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { Layout } from './Layout/Layout';

export class App extends Component {
  
  state = {
    title: [],
    isLoading: false,
    error: false,
  };

  render() {
    return(
    
      <Layout>
        <Searchbar onSubmit={(console.log) } />
        <GlobalStyle />
      </Layout>
    );
  }
}