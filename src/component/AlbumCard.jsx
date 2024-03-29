import { useDispatch } from "react-redux";
import { getSong } from "../redux/action";

const AlbumCard = ({ songInfo }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="col text-center"
      id={songInfo.id}
      onClick={() => {
        dispatch(getSong(songInfo));
      }}
    >
      <img className="img-fluid" src={songInfo.album.cover_medium} alt="track" />
      <p>
        Track: {songInfo.title.length < 16 ? songInfo.title : songInfo.title.substring(0, 16) + "..."}
        <br />
        Artist: {songInfo.artist.name}
      </p>
    </div>
  );
};

export default AlbumCard;
