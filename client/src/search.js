import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value.trim();

        this.props.onSearch(value);
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.handleChange}
                    value={this.props.searchTerm}
                />
            </div>
        )
    }
}

export default Search;