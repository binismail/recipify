import React, {useEffect, useState} from 'react';
import logo from './logo.png'
import './tailwind.generated.css';
import './App.css';

const App = ()=> {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState()

  useEffect(() => {
    getReceipe()
  })
  const APP_ID = '4df8dd6c';
    const APP_KEY = '449c64ab6aed20792910cb5b27183333';

    let getReceipe = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${}&from=0&to=3&calories=591-722&health=alcohol-free`);
      const data = response.json();
      console.log(data)
    }

  const Header = () => {
    return(
      <header className="header flex justify-between">
      <div>
        <img src={logo} alt="website logo"/>
      </div>
      <form className="flex">
      <input type="text" value={search} className="input shadow-lg" placeholder="enter you recipe..."/>
      <button className="btn shadow-lg">Search</button>
      </form>
      <div>
      
      </div>
      </header>
    )
  }

  const AppIn = ()=> {

    const Aside = ()=> {

      return(
        <div className="aside shadow-xl">
        <h1>aside</h1>
        </div>
  
      )
    }

    const Main = ()=> {
      return (
        <div className="main">
        <h1>MAIN</h1>
        </div>
      )
    }

    return(

      <div className="flex">
      <Aside/>
      <Main/>
      </div>
    )
  }

  const Footer = ()=> {
    return(
      <div className="footer text-center">
      <h4>Footer here</h4>
      </div>
    )
  }

  return (
    <>
    <div className="flex flex-col">
    <Header/>
    <AppIn/>
    <Footer/>    
    </div>
    </>
  )
}

export default App;
