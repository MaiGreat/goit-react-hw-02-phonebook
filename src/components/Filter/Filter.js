import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const { value, onChange } = this.props;

        return (
            <>
                <h3>Find contacts by name</h3>
                <label>
                    <input
                        type="text"
                        name="filter"
                        value={value}
                        onChange={onChange}
                    />
                </label>
            </>
        );
    }
}

export default Filter;