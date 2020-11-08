import React from "react";
import "./Genre.css";



class GenreSeeds extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'select'};
      this.props.functionCallFromParent(this.state.value);

  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
          <label>
            <select value={this.state.value} className="select-items" onChange={this.handleChange}>
              {/* add multiple to above for multiple */}
              <option value="select">Select a Genre</option>
              <option value="acoustic">Acoustic</option>
              <option value="afrobeat">Afrobeat</option>
              <option value="alt-rock">Alternative Rock</option>
              <option value="alternative">Alternative</option>
              <option value="ambient">Ambient</option>
              <option value="anime">Anime</option>
              <option value="black-metal">Black Metal</option>
              <option value="bluegrass">Bluegrass</option>
              <option value="blues">Blues</option>
              <option value="bossnova">Alternative</option>
              <option value="brazil">Brazil</option>
              <option value="breakbeat">Breakbeat</option>
              <option value="british">British</option>
              <option value="cantopop">Cantopop</option>
              <option value="chicago-house">Chicago House</option>
              <option value="children">Children</option>
              <option value="chill">Chill</option>
              <option value="classical">Classical</option>
              <option value="club">Club</option>
              <option value="comedy">Comedy</option>
              <option value="country">Country</option>
              <option value="dance">Dance</option>
              <option value="dancehall">Dance Hall</option>
              <option value="death-metal">Death Metal</option>
              <option value="deep-house">Deep House</option>
              <option value="detroit-techno">Detroit Techno</option>
              <option value="disco">Disco</option>
              <option value="disney">Disney</option>
              <option value="drum-and-bass">Drum and Bass</option>
              <option value="dub">Dub</option>
              <option value="dubstep">Dubstep</option>
              <option value="edm">EDM</option>
              <option value="electro">Electro</option>
              <option value="electronic">Electronic</option>
              <option value="emo">Emo</option>
              <option value="folk">Folk</option>
              <option value="forro">Forro</option>
              <option value="french">French</option>
              <option value="funk">Funk</option>
              <option value="garage">Garage</option>
              <option value="german">German</option>
              <option value="gospel">Gospel</option>
              <option value="goth">Goth</option>
              <option value="grindcore">Grindcore</option>
              <option value="groove">Groove</option>
              <option value="grunge">Grunge</option>
              <option value="guitar">Guitar</option>
              <option value="happy">Happy</option>
              <option value="hard-rock">Hard Rock</option>
              <option value="hardcore">Hardcore</option>
              <option value="hardstyle">Hardstyle</option>
              <option value="heavy-metal">Heavy Metal</option>
              <option value="holidays">Holidays</option>
              <option value="honky-tonk">Honky Tonk</option>
              <option value="house">House</option>
              <option value="idm">IDM</option>
              <option value="indian">Indian</option>
              <option value="indie">Indie</option>
              <option value="indie-pop">Indie Pop</option>
              <option value="industrial">Industrial</option>
              <option value="iranian">Iranian</option>
              <option value="j-dance">J Dance</option>
              <option value="j-idol">J Idol</option>
              <option value="j-pop">J Pop</option>
              <option value="j-rock">J Rock</option>
              <option value="jazz">Jazz</option>
              <option value="k-pop">K Pop</option>
              <option value="kids">Kids</option>
              <option value="latin">Latin</option>
              <option value="latino">Latino</option>
              <option value="malay">Malay</option>
              <option value="mandopop">Mandopop</option>
              <option value="metal">Metal</option>
              <option value="metal-misc">Metal Misc</option>
              <option value="metalcore">Metalcore</option>
              <option value="minimal-techno">Minimal Techno</option>
              <option value="movies">Movies</option>
              <option value="mpb">MPB</option>
              <option value="new-age">New Age</option>
              <option value="new-release">New Release</option>
              <option value="opera">Opera</option>
              <option value="pagode">Pagode</option>
              <option value="party">Party</option>
              <option value="philippines-opm">Philippines OPM</option>
              <option value="piano">Piano</option>
              <option value="pop">Pop</option>
              <option value="pop-film">Pop Film</option>
              <option value="post-dubstep">Post Dubstep</option>
              <option value="power-pop">Power Pop</option>
              <option value="progressive-house">Progressive House</option>
              <option value="psych-rock">Psychedelic Rock</option>
              <option value="punk">Punk</option>
              <option value="punk-rock">Punk Rock</option>
              <option value="r-n-b">R&B</option>
              <option value="rainy-day">Rainy Day</option>
              <option value="reggae">Reggae</option>
              <option value="reggaeton">Reggaeton</option>
              <option value="road-trip">Road Trip</option>
              <option value="rock">Rock</option>
              <option value="rock-n-roll">Rock & Roll</option>
              <option value="rockabilly">Rockabilly</option>
              <option value="romance">Romance</option>
              <option value="sad">Sad</option>
              <option value="salsa">Salsa</option>
              <option value="samba">Samba</option>
              <option value="sertanejo">Sertanejo</option>
              <option value="show-tunes">Show Tunes</option>
              <option value="singer-songwriter">Singer Songwriter</option>
              <option value="ska">SKA</option>
              <option value="sleep">Sleep</option>
              <option value="songwriter">Songwriter</option>
              <option value="soul">Soul</option>
              <option value="soundtracks">Soundtracks</option>
              <option value="spanish">Spanish</option>
              <option value="study">Study</option>
              <option value="summer">Summer</option>
              <option value="swedish">Swedish</option>
              <option value="synth-pop">Synth Pop</option>
              <option value="tango">Tango</option>
              <option value="techno">Techno</option>
              <option value="trance">Trance</option>
              <option value="trip-hop">Trip Hop</option>
              <option value="turkish">Turkish</option>
              <option value="work-out">Work Out</option>
              <option value="world-music">World Music</option>

            </select>
          </label>
          {/* <input type="submit" value="Submit" /> */}
          
        </form>
      );
    }
  }

export default GenreSeeds;