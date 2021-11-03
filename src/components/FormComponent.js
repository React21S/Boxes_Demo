import React, { Component } from 'react';

class FormComponent extends Component {
    state = {
        firstName: "",
        house:  "",
        animal: "",
        kind:"",
        year:""

    }
    changeHandler = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label for="firstName">Name</label>
                <input type="text" name="firstName" onChange = {this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label for="house">House</label>
                    <input type="text" name="house" onChange = {this.changeHandler}/>
                </div>
             
                <div className="form-group">
                    <label for="animal">Animal</label>
                    <input type="text" name="animal" onChange = {this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label for="kind">Kind</label>
                    <input type="text" name="kind" onChange = {this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label for="date">Year</label>
                    <input type="date" name="year" onChange = {this.changeHandler}/>
                </div>

                <div className="render">
                    <p>Name: {this.state.firstName}</p>
                    <p>House: {this.state.house}</p>
                    <p>Animal: {this.state.animal}</p>
                    <p>Kind: {this.state.kind}</p>
                    <p>Year: {this.state.year}</p>
                </div>

            </div>
        );
    }
}

export default FormComponent;