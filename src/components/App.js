import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

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
                {this.state.images.length}
            </div>
        )
    }
}