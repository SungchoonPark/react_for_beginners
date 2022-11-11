import { useEffect, useCallback, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>"loading"</h1>
      ) : (
        <div>
          <div>
            <Link to="/">
              <button>Home</button>
            </Link>
            <h1>{movie.title}</h1>
          </div>
          <img src={movie.large_cover_image} alt="title" />
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <span>
            <p>{movie.description_full}</p>
          </span>
        </div>
      )}
    </div>
  );
}

export default Detail;
