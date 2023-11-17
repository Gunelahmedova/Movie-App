const movieDetail = document.querySelector("#moviedetail");
const search = document.querySelector("#search");

search.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const movieTitle = this.value;
    getMovie(movieTitle);
    this.value = "";
  }
});

function getMovie(title) {
  const myPromises = fetch(
    `http://www.omdbapi.com/?apikey=a407a7b3&t=${title}`
  );

  myPromises
    .then((res) => {
      const dataMovie = res.json();
      return dataMovie;
    })
    .then((data) => {
      console.log(data);
      showMovie(data);
    })
    .catch((err) => {
      console.log("err", err);
    });
}

function showMovie(movie) {
  console.log(movie);

  movieDetail.innerHTML = `<div class="d-flex gap-5 my-5 px-5">
    <img src="${movie.Poster}" />

    <div>
    <h1>${movie.Title}</h1>
    <ul>
     <li> Year: ${movie.Year} </li>
     <li> IMDB: ${movie.imdbRating}</li>
     <li> Time: ${movie.Runtime}</li>
     <li> Genre:  ${movie.Genre}</li>
     <li> Awards: ${movie.Awards}</li>
      
      
      
    </ul>

    </div>
  </div>`;
}
