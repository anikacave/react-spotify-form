import React from "react";



class NumberGenerated extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: "select"};
      this.props.functionCallFromParent(this.state.value);

  
      this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }

    // childFunction=(e)=>{
    //     e.preventDefault();
    //     this.props.functionCallFromParent("hellow from child 1");
    // }
  
    handleChange(event) {
      event.preventDefault();
      this.setState({value: event.target.value});
      this.props.functionCallFromParent(event.target.value);
      //add here to any changes that you want
    }
  
    // handleSubmit(event) {
    //   alert('Your favorite flavor is: ' + this.state.value);
    //   event.preventDefault();
    //   event.preventDefault();
        // this.props.functionCallFromParent(this.state.value);
    //   this.childFunction.bind(this);
    // }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select className="select-items" value={this.state.value} onChange={this.handleChange}>
              {/* add multiple to above for multiple */}
              <option value="select"># of Tracks</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
              <option value="90">90</option>
              <option value="100">100</option>

            </select>
          </label>
          {/* <input type="submit" value="Submit" /> */}
          
        </form>
      );
    }
  }

export default NumberGenerated;