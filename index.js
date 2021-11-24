const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});

app.post("/create", (req, res) => {
  
  const userInfo = req.body;

  const {fullname, aboutme, githuburl, twitterurl, favoritebooks, favoriteartists} = req.body;
  const firstname = fullname.split(' ')[0];
  const lastname = fullname.split(' ')[1];
  const favoriteBooks = favoritebooks.split(',')
  const favoriteArtists = favoriteartists.split(',')

console.log(favoriteBooks)
 

  res.render("homepage" , {fullname, firstname, lastname, favoriteBooks, favoriteArtists, githuburl, twitterurl, aboutme})

})


app.get("/people/:id", (req, res) => {
  res.render("people");
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
