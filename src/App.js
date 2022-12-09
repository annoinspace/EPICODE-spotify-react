import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./css/album.css"
import "./css/home.css"
import Homepage from "./components/Home/Homepage"
import MusicPlayer from "./components/MusicPlayer"
import Sidebar from "./components/Sidebar"
import TopNav from "./components/Home/TopNav"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <TopNav />
      <Homepage />
      <MusicPlayer />
    </div>
  )
}

export default App
