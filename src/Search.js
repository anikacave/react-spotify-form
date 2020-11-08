import React from "react";
import "./SearchBar.css";


class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ""};
      this.props.functionCallFromParent(this.state.value);

  
      this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      event.preventDefault();
      this.setState({value: event.target.value});
    //   console.log(event.target.value)
      this.props.functionCallFromParent(event.target.value);
      //add here to any changes that you want
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    //   event.preventDefault();
        // this.props.functionCallFromParent(this.state.value);
    //   this.childFunction.bind(this);
    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            {/* SEARCH */}
          <input className="bar" type="text" placeholder="Search Artists..." value={this.state.value} onChange={this.handleChange}/>
          
        </form>
      );
    }
  }

export default Search;