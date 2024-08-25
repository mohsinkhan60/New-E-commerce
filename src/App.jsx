import Player from "./components/Player"
import Sidebar from "./components/Sidebar"


export const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
      </div>
      <Player />
    </div>
  )
}
export default App