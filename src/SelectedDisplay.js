import React from "react";
// import "./player.css";
import "./SelectedDisplay.css";



class SelectedDisplay extends React.Component {
    constructor(props) {
        super(props);
        // this.ids = props.ids;
        this.state = {
                    tracks: this.props.tracks,
                    }
        console.log(this.state.tracks);
        // this.props.functionCallFromParent("none");
        // setTimeout(() => this.constructor(props), 7500);

        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleDoubleClick = this.handleDoubleClick.bind(this);

    }

    componentWillReceiveProps(props) {
        this.setState({tracks: props.tracks})
      }


    // handleSubmit(event) {
    //     event.preventDefault();
    //     this.props.functionCallFromParent(this.state.value);

    // }

    // handleChange(event) {
    //     event.preventDefault();
    //     this.setState({value: event.target.value});
    //     // this.state.value = event.target.value;
    //     this.props.functionCallFromParent(this.state.value);
    //     console.log(event.target.value);
    // }

    // handleDoubleClick(event) {
    //     event.preventDefault();
    //     console.log("winner!");
    //     console.log(event.target.value);
    //     var tracks = this.state.tracks;
    //     if (tracks.length <5){
    //         tracks.push(event.target.value);
    //         this.setState({
    //             tracks: tracks
    //         })
    //         this.props.passTracks(this.state.tracks);
    //     }
    //     else{
    //         alert("maximum albums: 5")
    //     }




    // }



    render () {
        
        return(
            

        <form >
        <div className="holder">
        <p className="p">Selected Artists:</p>
         {/* <table className="song_name"> */}

        {/* {props.ids} */}
       {/* {this.state.ids.map(id => <option className="box" value={id.uri} > <p className="track_name"  >{id.name} ---- {id.artists.map(name => <p className="artists">{name.name} &nbsp; &nbsp;</p>)} </p> </option>)} */}
       
       <select className="search" multiple >
           
           {/* <option className="box" value="none">none</option> */}
     
        {this.state.tracks.map(track => <option className="listed" key={track} value={track} > {track} </option>)}
        </select>

        {/* <td>{id.popularity}</td> this is popularity */}
        {/* <td className="track_name"  >{id.name}</td>  <td>{id.artists.map(name => <p className="artists" key={name.name} >{name.name} &nbsp; &nbsp; */}
    
        </div>
         {/* </table>  */}
         </form>
    );

    
    }



}


export default SelectedDisplay;