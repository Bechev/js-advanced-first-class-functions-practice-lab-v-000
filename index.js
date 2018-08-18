const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};


const logDriversByHometown = function (drivers,location){
  driver.forEach(driver){
    if( driver.hometown === location){
      console.log(driver.name);
    }
  }
}