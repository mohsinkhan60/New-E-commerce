/* eslint-disable react/prop-types */

import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export const SongData = ({ id, name, image, desc }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div 
      onClick={() => playWithId(id)}
      key={id}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};
export default SongData;
