const React = require("react")
const DefaultLayout = require("../Default")

class Index extends React.Component {
  render(){
    const { movies } = this.props
    return(
      <DefaultLayout>
        <div>
          {
            movies.map((movie) => {
              return(
                <article>
                  <img src={movie.poster} alt="" />
                  {/* <h2>{movie.title}</h2> */}
                  {/* <p>{movie.genre} | {movie.releaseDate ? movie.releaseDate : "" }</p>
                  <p>{movie.rating}</p>
                  <p>{movie.watchAgain ? "I would watch again" : "You gotta pay me to watch it"}</p>
                  <h4>{movie.director}</h4> */}
                  <a href={`/movies/${movie._id}`}><h2>{movie.title}</h2></a>
                </article>
              )
            })
          }
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index