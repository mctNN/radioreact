import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { DATA } from './Data';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function App() {
  const [url,setUrl] = useState(null)

  const changeUrl = () => {
    setUrl(url);
  }

  return (
    <div>
      <div className='header'>En Sevdiğiniz Radyo İstasyonunuz</div>
      <div className='App'>
        {DATA.map((item) =>{ return (
          <a onClick={() => setUrl(item.url)} className='radio-station'>
          <img src={item.image} />
        </a>
        )})}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='player'>
      <AudioPlayer
       autoPlay
       src={url}
       onPlay={e => console.log("onPlay")}
       // other props here
    />
      </div>
    </div>
  );
}

export default App;
