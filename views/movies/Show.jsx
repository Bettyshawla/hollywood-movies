const React = require("react")
const DefaultLayout = require("../Default")

class Show extends React.Component {
  render() {
    const { movie } = this.props
    return (
      <DefaultLayout>
      <div>
        <article>
          <h2>{movie.title}</h2>
          <img src={movie.poster} alt="" />
          <p>{movie.genre} | {movie.releaseDate ? movie.releaseDate : "" }</p>
          <p>{movie.rating}</p>
          <p>{movie.watchAgain ? "I would watch again" : "You gotta pay me to watch it"}</p>
          <h4>{movie.director}</h4>
          Cast: 
          <ul>
            {movie.cast.map((star) => {
              return(
                <li>{star}</li>
              )
            })}
          </ul>

          <a href={`/movies/${ movie._id }/Edit`}><button>Edit</button></a>
          <form action={`/movies/${ movie._id }?_method=DELETE`} method="POST">
            <input type="submit" value="Delete" />
          </form>
          <a href="/movies/"><button>Back to Main</button></a>
        </article>
      </div>
    </DefaultLayout>
    )
  }
}

module.exports = Show