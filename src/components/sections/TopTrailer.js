let TrailerMovies = [];
// const url =
//   "https://api.themoviedb.org/3/movie/upcoming?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US&page=1";

// try {
//   const respone = fetch(url);
//   const data = respone.json();
//   let sliceData = data.results.slice(0, 10);
//   TrailerMovies = sliceData;
// } catch (err) {
//   console.log("Error: ", err);
// }

fetch(
  "https://api.themoviedb.org/3/movie/now_playing?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US&page=2"
)
  .then((response) => response.json())
  .then((data) => {
    let sliceData = data.results.slice(0, 12);
    TrailerMovies = sliceData;
  });

export default TrailerMovies;
