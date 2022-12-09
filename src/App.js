import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./css/home.css"
import "./css/album.css"
import Homepage from "./components/Homepage"
import MusicPlayer from "./components/MusicPlayer"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Homepage />
      <MusicPlayer />
    </div>
  )
}

export default App
