import logo from './assets/desktop/logo.svg';
import appleLogo from './assets/desktop/apple-podcast.svg';
import googleLogo from './assets/desktop/google-podcasts.svg';
import pocketLogo from './assets/desktop/pocket-casts.svg';
import spotifyLogo from './assets/desktop/spotify.svg';
import dots from './assets/desktop/bg-pattern-dots.svg';

import React from 'react'

import './App.css';

function App() {

  const [errorMsg, setErrorMsg] = React.useState("")

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(e.target[0].value === "") {
      setErrorMsg("Oops! Please add your email")
    }
    else if(!validateEmail(e.target[0].value)){
      setErrorMsg("Oops! Please check your email")
    }
    else{
      setErrorMsg("")
    }
    

  }

  return (
    <div className="App">
      <div className="wrapper" >
        <main>
          <nav>
            <img src={logo} alt="Pod"/>
          </nav>
          <div className="main">
            <h1>Publish your podcasts <strong>everywhere.</strong></h1> 
            <p className="desc">
              Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
              Apple Podcasts, Google Podcasts, Pocket Casts and more!
            </p>
            <form onSubmit={handleSubmit}>
              <input type="text" name="email" placeholder="Email address" />
              <input type="submit" value="Request Access"   />
            </form>
            { errorMsg && <p className="error">{errorMsg}</p> }
            <div className="logos">
              <div><img src={spotifyLogo} className="logo" alt="Spotify Logo" /></div>
              <div><img src={appleLogo} className="logo" alt="Apple Podcast" /></div>
              <div><img src={googleLogo} className="logo" alt="Google Podcast" /></div>
              <div><img src={pocketLogo} className="logo" alt="Pocket Casts" /></div>
            </div>
          </div>
        </main>
        <div className="dots">
          <img src={dots} />
        </div>
      </div>
    </div>
  );
}

export default App;
