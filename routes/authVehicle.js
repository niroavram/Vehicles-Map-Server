const { constants } = require("buffer");
const express = require("express");
const Router = express.Router();
const vehicles_location = require("../vehicle/vehicles_location");

Router.get("/all-vehicles-location",(req, res) => {
res.json({vehicles: vehicles_location})

});
Router.post("/vehicles-in-polygon",(req, res) => {
  const vehicles_in_poly = [];
  const {markers} = req.body;
  const vehicles  = vehicles_location.vehicles_location  
  console.log(vehicles.length)
  for(let i=0;i<vehicles.length;i++){
    let  inPoly =false
    const x =vehicles[i].location.lat
    const y =vehicles[i].location.lng
    for (let i = 0, j = markers.length - 1; i < markers.length; j = i++) {
      let xi = markers[i].lat, yi = markers[i].lng;
      let xj = markers[j].lat, yj = markers[j].lng;
      
      let intersect = ((yi > y) != (yj > y))
          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) {
        inPoly = !inPoly
  }}
    if(inPoly){
      vehicles_in_poly.push(vehicles[i])
    }
  }
  res.json({vehicles_in_poly: vehicles_in_poly})
  
  });




module.exports = Router;
