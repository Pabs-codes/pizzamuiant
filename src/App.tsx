import 'react'

import './App.css'
import MenuAppBar from './Components/AppBar'
import Caroucsell from './Components/Carousel'
import Tabs from './Components/SlideNav'
import NavBar from './Components/Navigation'
import Bodyy from './Components/Body'

function App() {

  return (
    <>
    <MenuAppBar/>
    <Caroucsell/>
   {/* <Tabs/> */}

    <NavBar/>
    <Bodyy/>
    </>
  )
}

export default App
