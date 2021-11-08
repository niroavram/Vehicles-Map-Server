const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors("http://localhost:3000/"||"https://www.beenyan.com/"));


// const {updateGames,collectGamesApi,finishGames,Testing} = require("./football-api/apiConroller")


var authVehicle = require("./routes/authVehicle")

app.use(express.json());
app.use(authVehicle);

// setInterval(function() {
//   Testing();
//   }, 1000*20,);
//   // setInterval(function() {
//   //   updateGames();
//   //   }, 1000*60*4,);
//   // setInterval(function() {
//   //   finishGames();
//   //   }, 1000*15,);


app.listen(PORT,()=>{
    console.log("server running on PORT",PORT)
})

