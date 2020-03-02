const axios = require("axios");

axios.get(`https://swapi.co/api/films/`).then(res => {
  const films = res.data.results;
  const fetchTitle = films.map(val => val.title);
  console.log(fetchTitle);
  const getSpecifictitl = films.filter(val => {
    return val.title === "The Phantom Menace";
  });
  console.log(getSpecifictitl);
});
