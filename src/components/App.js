import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './image-list';
import Footer from './footer';

export default class App extends Component {
    state = { images: [] };

    async onSearchSubmit(term) {
        const response = await unsplash.get('/search/photos?', {
            params: { query: term }
        })

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div style={{ marginTop: '10px' }} className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
                <ImageList images={this.state.images} />
                <Footer />
            </div>
        )
    }
}