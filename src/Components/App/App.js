import React from 'react';

import './App.css';

import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
// import { Track } from '../Track/Track';

import Spotify from '../../util/Spotify';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [],
      playlistName: 'your playlist name',
      playlistTracks: []
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(newTrack) {
    if(this.state.playlistTracks.find( savedTrack => savedTrack.id === newTrack.id)) {
      return; 
    }

    this.state.playlistTracks.push(newTrack)
    this.setState({playlistTracks: this.state.playlistTracks})    
  }

  removeTrack(track) {
    let newPlaylist = this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id)
    this.setState({playlistTracks: newPlaylist})
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  updatePlaylistName(newName) {
    this.setState({playlistName: newName})
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  render () {
    return (
    <div>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <div className='App'>
        <SearchBar onSearch={this.search} />
      <div className='App-playlist'>
        <SearchResults searchResults={this.state.searchResults} 
          onAdd={this.addTrack} />
        <Playlist onNameChange={this.updatePlaylistName} 
          playlistTracks={this.state.playlistTracks} 
          onRemove={this.removeTrack}
          onSave={this.savePlaylist} />
      </div>
      </div>
    </div>
    )}
  
}

export default App;
