import React from "react";
// import "./player.css";
import "./Grid.css";

const Grid = props =>{


    return (

        // <table>
            

            // <table className="options">
            //     {/* add classname/css */}
            // {/* {props.ids.map(id => <tr className="box" key={id.track.uri}>{id.track.name}</tr>)} */}
            // {/* {props.ids.map(id => <tr className="box" key={id.track.uri} onClick={printKey(this)}> <td className="track_name">{id.track.name}</td> <td>{id.track.artists.map(name => <p className="artists" key={name.name}>{name.name} &nbsp; &nbsp; </p> )}</td></tr>)} */}
            // <tbody>
            // {props.ids.map(id => <tr className="box" key={id} > <td className="track_name"  >{id}</td> </tr>)}
            // </tbody>
        
            
            // </table>
            //rendeer a list of whatever aka genre seeds or something

        // </table>


        <table className="song_name">
        {/* add classname/css */}
    {/* {props.ids.map(id => <tr className="box" key={id.track.uri}>{id.track.name}</tr>)} */}
    {/* {props.ids.map(id => <tr className="box" key={id.track.uri} onClick={printKey(this)}> <td className="track_name">{id.track.name}</td> <td>{id.track.artists.map(name => <p className="artists" key={name.name}>{name.name} &nbsp; &nbsp; </p> )}</td></tr>)} */}
    <tbody>
    {props.ids.map(id => <tr className="box" key={id.uri} > <td className="track_name"  >{id.name}</td>  <td>{id.artists.map(name => <p className="artists" key={name.name} >{name.name} &nbsp; &nbsp; </p>)}</td> </tr>)}
    </tbody>
    {/* <td>{id.popularity}</td> this is popularity */}

    
    </table>

    );
}

export default Grid;