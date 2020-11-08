import React, {Component} from 'react';
import './App.css';
import * as $ from "jquery";
import hash from "./hash";
import GenreSeeds from "./Genre";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import Grid from "./Grid";
import Quirkyness from "./Quirkyness";
import Positivity from "./Positivity";
import NumberGenerated from "./NumberGenerated";
import Search from "./Search";
import SearchDisplay from "./SearchDisplay";
import SelectedDisplay from "./SelectedDisplay";


class App extends Component{

  constructor() {
    super();
    this.state = {
      token: null,
      genre: 'select',
      rec_tracks:[],
      new_plist_id:'',
      quirky: 0,
      positivity: 50,
      num_generated: "10",
      search_bar: "",
      artist_search: [],
      album: "",
      selected_albums: [],
      artists: []
      // search_token: false,
    };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    // this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    // this.getTracks = this.getTracks.bind(this);
  }


  componentDidMount() {
    //this sets the token!
    let _token = hash.access_token;

    if(_token) {
      this.setState({
        token: _token
      });

      // this.getCurrentlyPlaying(_token);
    }
  }

  getCurrentlyPlaying(token) {

    console.log(this.state.genre)

      
    // var urlSend = "https://api.spotify.com/v1/recommendations?seed_genres="
    // +String(this.state.genre)
    // +"&limit="+String(this.state.num_generated)
    // +"&market=US&target_popularity="
    // +String(this.state.quirky)
    // +"&target_valence="
    // +String(this.state.positivity/100);

    var urlSend = "https://api.spotify.com/v1/recommendations?market=US&"

    if(this.state.genre !== 'select'){
      urlSend = urlSend + ("seed_genres="+String(this.state.genre)+"&");
    }
    if(this.state.selected_albums.length>0){
      console.log(String(this.state.selected_albums));
      urlSend = urlSend +("seed_artists="+ String(this.state.selected_albums) + "&");

    }
    if(this.state.genre === 'select' && this.state.selected_albums.length===0){
      alert("you must select a genre or add an artist");
      return
    }
    if(this.state.num_generated !=='select'){
      urlSend= urlSend + ("limit="+String(this.state.num_generated)+"&");
    }
    urlSend= urlSend+ ("target_popularity="+String(100 - this.state.quirky)+"&");
    urlSend= urlSend + ("target_valence="+String(this.state.positivity/100));



    $.ajax({
      url: urlSend,
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        this.setState({
          rec_tracks: data.tracks
        });
      }
    });

  }

  sendToPlaylist(token) {

    var uris = [];
    // this.state.rec_tracks.map(track =>  uris.push("\"" + String(track.uri) + "\""));
    this.state.rec_tracks.map(track =>  uris.push(track.uri));
    alert(uris.length);
    // var dataSend = "{\"uris\":[" + String(uris) +"]}"
    // alert(dataSend);
    // var plistid = "";

    $.ajax({
      // url: "https://api.spotify.com/v1/users/anika410/playlists",
      url: "https://api.spotify.com/v1/me/playlists",
      type: "POST",
      dataType:  'json',
      contentType: 'application/json',
      processData: false,
      data: "{\"name\":\"A New Playlist\", \"public\":false}",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        this.setState({
          new_plist_id: data.id
        })
        // plistid = data.id;
        alert(data.id);

        var urlPlaylist = "https://api.spotify.com/v1/playlists/" + data.id + "/tracks?uris="+uris;
        console.log(urlPlaylist);

      $.ajax({
        url: urlPlaylist,
        type: "POST",
        // dataType: 'json',
        contentType: 'application/json',
        // processData: false,
        // data: dataSend,
        beforeSend: xhr => {
          xhr.setRequestHeader("Authorization", "Bearer " + token);
        }
      })
        
      }

    })


  }

  

  setGenre=(genre)=>{
    console.log(genre);
    this.setState({
      genre: genre
    })

  }

  setQuirky=(quirky)=>{
    console.log(quirky);
    this.setState({
      quirky: quirky
    })

  }

  setPositivity=(positivity)=>{
    console.log(positivity);
    this.setState({
      positivity: positivity
    })
  }

  setNumGenerated=(numGenerated)=>{
    // console.log(numGenerated);
    this.setState({
      num_generated: numGenerated

    })
  }

  // setSearch=(search)=>{
  //   // console.log(numGenerated);
  //   this.setState({
  //     search_bar: search

  //   })
  // }
  

  setSearch=(search)=>{
    this.setState({
      search_bar: search
    })

    let token = hash.access_token;

    search.replace(/\s/g, '%20');

    // var urlSend = "https://api.spotify.com/v1/search?min_limit=3&q=album:"+search+"&type=album";
    var urlSend = "https://api.spotify.com/v1/search?min_limit=3&q="+search+"&type=artist";

    console.log(urlSend);

    if(search.length > 0){

      $.ajax({
        url: urlSend,
        type: "GET",
        beforeSend: xhr => {
          xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        success: data => {
          this.setState({
            artist_search: data.artists.items
          });
        }
      });

    }
    


    


  }

  // search(token){
    
  //   var search = this.state.search_bar;

  //   search.replace(/\s/g, '%20');

  //   // var urlSend = "https://api.spotify.com/v1/search?min_limit=3&q=album:"+search+"&type=album";
  //   var urlSend = "https://api.spotify.com/v1/search?min_limit=3&q="+search+"&type=album";

  //   console.log(urlSend);

  //   $.ajax({
  //     url: urlSend,
  //     type: "GET",
  //     beforeSend: xhr => {
  //       xhr.setRequestHeader("Authorization", "Bearer " + token);
  //     },
  //     success: data => {
  //       this.setState({
  //         artist_search: data.albums.items,
  //         search_token: true
  //       });
  //     }
  //   });


  // }


  setSearchAlbum=(album)=>{
    // console.log(numGenerated);
    this.setState({
      album: album

    })
  }

  revSearchToken(token){
    if (token === true) {
      this.setState({
        search_token: false,
      });
      
    }
    
  }

  setSelectedAlbums=(albums)=>{
    this.setState({
      selected_albums: albums

    })
    console.log(albums);
  }

  setDisplayArtists=(artists)=>{
    this.setState({
      artists: artists
    })
  }




  render() {
    console.log(this.state.genre);
    return (
        <header className="App-header">
      <React.Fragment>

      {window.addEventListener('keydown',function(e){if(e.keyIdentifier==='U+000A'||e.keyIdentifier==='Enter'||e.keyCode===13){if(e.target.nodeName==='INPUT'&&e.target.type==='text'){e.preventDefault();return false;}}},true)}
     
      
      <div>
      {!this.state.token && (



        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )}


<div className="triad">
<h2>Spotify Playlist Generator</h2>
</div>

<div className="formBox">
  {/* {!this.state.token && (
    <p>Login to Spotify below to begin</p>
  )} */}
  

{/* genre button */}
<div className="genre">
{this.state.token && (
<GenreSeeds functionCallFromParent={this.setGenre.bind(this)}/>

)}

{/* number generated button */}
<div className="num-gen">
{this.state.token && (
<NumberGenerated functionCallFromParent={this.setNumGenerated.bind(this)}/>
)}
</div>

{/* positivity button */}
<div className="positivity">
{this.state.token && (
<Positivity functionCallFromParent={this.setPositivity.bind(this)}/>
)}
</div>
</div>

{/* TODO die */}

</div>





{/* number generated button */}
{/* <div className="num-gen">
{this.state.token && (
<NumberGenerated functionCallFromParent={this.setNumGenerated.bind(this)}/>
)}
</div> */}

{/* positivity button
<div className="positivity">
{this.state.token && (
<Positivity functionCallFromParent={this.setPositivity.bind(this)}/>
)}
</div> */}

{/* quirkyness button */}
<div className="quirky">
    {this.state.token && (
    <Quirkyness functionCallFromParent={this.setQuirky.bind(this)}/>
    )}
 </div>


{/* search bar */}
<div className="searchBar">
{this.state.token && (
    <Search  functionCallFromParent={this.setSearch.bind(this)} />
  )}
  </div>







      </div>

      {this.state.token && (

        <button type="submit" onClick={() => { this.getCurrentlyPlaying(this.state.token) }}>Generate Songs</button>
      )}


        <div className="searchResult">

        {/* {this.state.token &&  this.state.search_bar.length>0 &&( */}
        {this.state.token &&(
        <SearchDisplay ids={this.state.artist_search}  passArtists={this.setDisplayArtists.bind(this)} passTracks={this.setSelectedAlbums.bind(this)} functionCallFromParent={this.setSearchAlbum.bind(this)}/>

          )}
          </div>
        
          {this.state.token &&  (
        <SelectedDisplay tracks={this.state.artists}/>
        
          )}

          {this.state.token && (

          <button type="submit" onClick={() => { this.sendToPlaylist(this.state.token) }}>Send to Playlist app.js</button>
          )}



      {this.state.token && (
          <Grid
            ids={this.state.rec_tracks}
          />
          )}


        




        
        
        {/* {this.state.token && this.state.search_bar.length>0 && (
          <button type="submit" onClick={() => {this.search(this.state.token)}    }>search</button>
        )} */}
        
        
          
        {/* {this.state.token &&  this.state.search_token &&(
              this.revSearchToken(this.state.search_token)
              )} */}

      {/* {this.state.token && (
        <SearchDisplay ids={this.state.artist_search}  functionCallFromParent={this.setSearchAlbum.bind(this)}/>
        )} */}
          





          {/* functionCallFromParent={this.setSearchAlbum.bind(this)} */}




      </React.Fragment>
      </header>


    )
  }


}




export default App;

