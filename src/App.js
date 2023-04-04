import Nav from './Nav'
import Header from './Header'
import SearchBar from './SearchBar'
import Footer from './Footer'
import './App.css'
import Button from './Button'

function App() {
  return (
    <div>
      <Nav />
      <div className='App'>
        <Header />
        <SearchBar />
        <div>
          <Button text='Google Search' />
          <Button text="I'm Feeling Lucky" />
        </div>
        <div className='links-container'>
          <p>Google offered in:</p>
          <div className='links'>
            <a href='https://youtu.be/Drrf7HsF1JE'>Hausa</a>
          </div>
          <div className='links'>
            <a href='https://youtu.be/Raj4pYHDQeg'>Igbo</a>
          </div>
          <div className='links'>
            <a href='https://youtu.be/V9KH-5kLc50'>Èdè</a>
          </div>
          <div className='links'>
            <a href='https://youtu.be/3Ne5TDM1nys'>Yorùbá</a>
          </div>
          <div className='links'>
            <a href='https://youtu.be/YEBjyQh8dBo'>Nigerian</a>
          </div>
          <div className='links'>
            <a href='https://youtu.be/soRXAbUiVoo'>Pidgin</a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
