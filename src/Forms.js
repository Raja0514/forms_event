import React, { Component } from "react";
class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      NameSubmited1: this.state.FirstName,
      NameSubmited2: this.state.LastName,
    });
  };
  handleChange(e) {
    const target = e.target;
    console.log(target);
    const value = e.target.value;
    console.log(value);
    const name = e.target.name;
    console.log(name);
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <>
      <div>
          <h1>OnChange Event and Form Submit</h1>
          <h2>Before Submit</h2>
          <h4>First Name:{this.state.FirstName}</h4>
          <h4>Last Name:{this.state.LastName}</h4>
          <h2>After Submit</h2>
          <h4>FirstName:{this.state.NameSubmited1}</h4>
          <h4>LastName:{this.state.NameSubmited2}</h4>
          <form onSubmit={this.handleSubmit}>
          <input
           type="text"
           name="FirstName"
           placeholder="FirstName"
           onChange={this.handleChange}
            ></input>
            <input
              type="text"
              name="LastName"
              placeholder="LastName"
              onChange={this.handleChange}
            ></input>
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}
export default Forms;
