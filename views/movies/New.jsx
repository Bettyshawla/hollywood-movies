const React = require("react")
const DefaultLayout = require("../Default")

class New extends React.Component {
  render () {
    return(
      <DefaultLayout>
        <form action="/movies" method="POST">
          <fieldset>
            <legend>Create a New Movie</legend>
            <label>
              TITLE:<input type="text" name="title" placeholder="Enter movie title" />
            </label>
            <label>
              GENRE:<input type="text" name="genre" placeholder="enter genre" />
            </label>

            <label> RELEASE DATE:<input type="text" name="releaseDate" /> </label>

            <label> LENGTH:<input type="number" name="length" /> </label>

            <label> POSTER:<input type="text" name="poster" /> </label>

            <label>DIRECTOR :<input type="text" name="director" /> </label>

            <label>RATING :<input type="text" name="rating" /> </label>

          
            <label> CAST:<input type="text" name="cast" /> </label>
            <label>WATCH AGAIN :<input type="checkbox" name="watchAgain" /> </label>
          </fieldset>
          <input type="submit" value="create New Movie" />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New