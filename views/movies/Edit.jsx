const React = require("react")
const DefaultLayout = require("../Default")

class Edit extends React.Component {
  render (){
    const { movie } = this.props
    return (
      <DefaultLayout>
<form action={`/movies/${movie._id}?_method=PUT`} method="POST">          <fieldset>
            <legend>Edit a New Movie</legend>
            <label>
              TITLE:<input type="text" name="title" placeholder="Enter movie title" value={movie.title} />
            </label>
            <label>
              GENRE:<input type="text" name="genre" placeholder="enter genre" value={movie.genre} />
            </label>

            <label> RELEASE DATE:<input type="text" name="releaseDate" value={movie.releaseDate} /> </label>

            <label> LENGTH:<input type="number" name="length" value={movie.length} /> </label>

            <label> POSTER:<input type="text" name="poster" value={movie.poster}/> </label>

            <label>DIRECTOR :<input type="text" name="director" value={movie.director} /> </label>

            <label>RATING :<input type="text" name="rating" value={movie.rating} /> </label>


            <label> CAST (Please separate cast members with commas):<input type="text" name="cast" value={movie.cast.join(",")} /> </label>
            {
              movie.watchAgain ?
              <label>WATCH AGAIN :<input type="checkbox" name="watchAgain" checked/> </label>
              :
              <label>WATCH AGAIN :<input type="checkbox" name="watchAgain"/> </label>
            }
          </fieldset>
          <input type="submit" value="edit New Movie" />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = Edit