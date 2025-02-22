
import Hero from './Components/Hero'
import TextCarousel from './Components/Carosoul'
import DrawerAppBar from './Components/Navbar'
import TheQuickWay from './Components/TheQuickWay'
import Sliders from './Components/Slider'
import Iframe from './Components/Iframe'
import MoreTime from './Components/MoreTime'
import Boom from './Components/Boom'
import Blog from './Components/Blog'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
        <DrawerAppBar/>
        <Hero/>
        <TheQuickWay/>
        <Sliders/>
        <TextCarousel/>
        <Iframe/>
        <MoreTime/>
        <Boom/>
        <Blog/>
        <Footer  />;

    </div>
  )
}

export default App