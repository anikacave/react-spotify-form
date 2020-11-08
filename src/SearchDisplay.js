import React from "react";
// import "./player.css";
import "./Grid.css";



class SearchDisplay extends React.Component {
    constructor(props) {
        super(props);
        // this.ids = props.ids;
        this.state = {
                    ids: this.props.ids,
                    value: "none",
                    tracks: [],
                    artists: [],
                    }
        console.log(this.state.ids);
        // this.props.functionCallFromParent("none");
        // setTimeout(() => this.constructor(props), 7500);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);

    }

    componentWillReceiveProps(props) {
        this.setState({ids: props.ids})
      }


    handleSubmit(event) {
        event.preventDefault();
        this.props.functionCallFromParent(this.state.value);

    }

    handleChange(event) {
        event.preventDefault();
        this.setState({value: event.target.value});
        // this.state.value = event.target.value;
        this.props.functionCallFromParent(this.state.value);
        console.log(event.target.value);
    }

    handleDoubleClick(event) {
        event.preventDefault();
        console.log("winner!");
        console.log(event.target.value);
        console.log(event.target.text);
        var tracks = this.state.tracks;
        var artists = this.state.artists;
        if (tracks.length <5){
            tracks.push(event.target.value);
            artists.push(event.target.text);
            const remove = new Set(tracks);
            const removeArtists = new Set(artists);
            tracks = [...remove];
            artists = [...removeArtists];
            this.setState({
                tracks: tracks,
                artists: artists
            })
            // this.props.passTracks(this.state.tracks);
            this.props.passTracks(tracks);
            this.props.passArtists(artists);

        }
        else{
            alert("maximum albums: 5")
        }




    }



    render () {
        
        return(

        

        <form onSubmit={this.handleSubmit}>
         {/* <table className="song_name"> */}

        {/* {props.ids} */}
       {/* {this.state.ids.map(id => <option className="box" value={id.uri} > <p className="track_name"  >{id.name} ---- {id.artists.map(name => <p className="artists">{name.name} &nbsp; &nbsp;</p>)} </p> </option>)} */}

       <select onChange={this.handleChange} className="box" multiple >
           {/* <option className="box" value="none">Artists Selected:</option> */}
     
        {this.state.ids.map(id => <option onDoubleClick={this.handleDoubleClick} className="box" key={id.id} value={id.id} > {id.name} </option>)}
        </select>

        {/* <td>{id.popularity}</td> this is popularity */}
        {/* <td className="track_name"  >{id.name}</td>  <td>{id.artists.map(name => <p className="artists" key={name.name} >{name.name} &nbsp; &nbsp; */}
    
        
         {/* </table>  */}
         {/* <button value="submit">Submmit</button> */}

         </form>
    );

    
    }



}





//^^class   broken thing---









// function handleSubmit(event) {
//     // event.preventDefault();
//     var nameValue = document.getElementById("results");
//     console.log(nameValue);
    
// }


// const SearchDisplay = props =>{

//     // handleSubmit(event) {
//     //             event.preventDefault();
//     //             this.props.functionCallFromParent(this.state.value);
        
//     //         }


//     return (

//     <form>
//     {/* <table className="song_name"> */}
//     {/* <tbody> */}
//     {/* {props.ids} */}
//     {/* className = "box" */}
//     <select id="results" onSubmit={handleSubmit()} multiple>


//     <option  value="none">Search</option>
//     {props.ids.map(id => <option value={id.uri} key={id.uri} > {id.name} </option>)}
//     {/* {props.ids.map(id => <option className="box" value={id.uri} > <p className="track_name"  >{id.name} ---- {id.artists.map(name => <p className="artists">{name.name} &nbsp; &nbsp;</p>)} </p> </option>)} */}

//     {/* </tbody> */}
//     {/* <td>{id.popularity}</td> this is popularity */}
//     {/* <td className="track_name"  >{id.name}</td>  <td>{id.artists.map(name => <p className="artists" key={name.name} >{name.name} &nbsp; &nbsp; */}
//     </select>

//     <input type="submit" value="Submit" />

    
//     {/* </table> */}
//     </form>
    

//     );
// }


export default SearchDisplay;