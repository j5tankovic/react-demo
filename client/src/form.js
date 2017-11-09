import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            house: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value.trim();

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);

        this.setState({
            name: '',
            surname: '',
            house: '',
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Name:
                    <input
                        placeholder='name'
                        name='name'
                        type='text'
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    </label>
                    <br />

                    <label> Surname:
                    <input
                        placeholder="Surname"
                        name="surname"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.surname}
                    />
                    </label>
                    <br />

                    <label> House:
                    <input
                        placeholder="House"
                        name="house"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.house}
                    />
                    </label>
                    <br />
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default Form;