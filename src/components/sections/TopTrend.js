let TrendMovies = [];
const url =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=07ae8877cdaf5f35409fc766524ec281&language=en-US&page=6";

try {
  const respone = fetch(url);
  const data = respone.json();
  let sliceData = data.results.slice(0, 10);
  TrendMovies = sliceData;
} catch (err) {
  console.log("Error: ", err);
}

export default TrendMovies;
