import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs:[]
   }

  fetchSongs=()=>{
    fetch(API_ENDPOINT)
    .then(resp =>resp.json())
    .then(data =>{this.setState({
      songs:data})})
  }
  handleFav=(id,fav)=>{
    fetch(`http://localhost:6001/songs/${id}`,{
        method:"PATCH",
        headers:{
        'Content-Type':'application/json',
        Accept:'application/json'
        },
        body:JSON.stringify({
            favorite:!fav
        })
    })
    .then(resp=>resp.json())
    .then(resp =>{
      let targetSongs = this.state.songs.findIndex(song=>song.id === resp.id)
      let copySongs = [...this.state.songs]
      copySongs[targetSongs]=resp
      this.setState({data:copySongs})
    })
}


  renderNav = () => {
    console.log(this.handleFav)
    return (
      <div className="simple-flex-row">
        <button onClick={this.fetchSongs}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }
 
  render(){
 console.log(this.state)  
    return (
      <div className="App">
        {this.renderNav()} {}
        <MainContainer songs={this.state.songs}
        handleFav={this.handleFav}
        />
       
      </div>
    );
  }
}

export default App;
