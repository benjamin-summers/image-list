import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
        term: ''
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">
                    <div className="field">
                        <label>
                        Search:
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}