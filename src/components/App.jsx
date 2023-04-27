import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { Layout } from './Layout/Layout';
import * as API from 'services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    search: [],
    pictures:null,
    // isLoading: false,
    // error: false,
  };

  fetchImg = async value => {
    const search = await API.fetchImg(value);
    this.setState(state => ({
      pictures: search.data,
    }));
    console.log(search.data);
  };
  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.fetchImg} />
        
        {this.state.pictures && <ImageGallery pictures={this.state.pictures} />}
        
        <GlobalStyle />
      </Layout>
    );
  }
}