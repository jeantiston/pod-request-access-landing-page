import logo from './assets/desktop/logo.svg';
import appleLogo from './assets/desktop/apple-podcast.svg';
import googleLogo from './assets/desktop/google-podcasts.svg';
import pocketLogo from './assets/desktop/pocket-casts.svg';
import spotifyLogo from './assets/desktop/spotify.svg';
import dots from './assets/desktop/bg-pattern-dots.svg';

import './App.css';

function App() {
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
            <form>
              <input type="email" name="email" placeholder="Email address" />
              <input type="submit" value="Request Access" />
            </form>
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
