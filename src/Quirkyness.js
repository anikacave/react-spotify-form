import React from "react";



class Quirkyness extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 50};
      this.props.functionCallFromParent(this.state.value);

  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      event.preventDefault();
      this.setState({value: event.target.value});
      this.props.functionCallFromParent(event.target.value);
      //add here to any changes that you want
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    //   event.preventDefault();
        this.props.functionCallFromParent(this.state.value);
    //   this.childFunction.bind(this);
    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            Quirkyness
          <input type="range" value={this.state.value} min="0" max="100" onChange={this.handleChange}/>
          
        </form>
      );
    }
  }

export default Quirkyness;