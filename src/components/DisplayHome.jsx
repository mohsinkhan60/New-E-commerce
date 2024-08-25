import { albumsData, songsData } from "../assets/assets"
import AlbumData from "./AlbumData"
import Navbar from "./Navbar"
import SongData from "./SongData"


export const DisplayHome = () => {
  return (
    <>
    <Navbar />
    <div className="mb-4">
      <h1 className="font-bold my-5 text-2xl">Featered Charts</h1>
      <div className="flex overflow-auto">
      {albumsData.map((item, index) => (
         <AlbumData key={index} {...item} />
      ))}
      </div>
    </div>
    <div className="mb-4">
      <h1 className="font-bold my-5 text-2xl">Today`s biggest hits</h1>
      <div className="flex overflow-auto">
         {songsData.map((item, index) => (
            <SongData key={index} {...item} />
         ))}
      </div>
    </div>
    </>
  )
}
export default DisplayHome