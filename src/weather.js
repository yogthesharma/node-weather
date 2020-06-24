const request = require(`request`);
// const yargs = require(`yargs`);

const weather = (location, callback) => {
  const url =
    `http://api.weatherstack.com/current?access_key=73cf54e07457d657ea324f3e19209fe2&query=` +
    location;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      // console.log("Giving request but not getting it");
      callback("Unable to connest to internet", undefined);
    } else if (response.body.success === false) {
      // console.log("Giving request but not getting it");
      callback(response.body.error.info, undefined);
    } else {
      callback(
        undefined,
        `It is currently ${response.body.current.temperature} degrees out there in ${response.body.request.query}`
      );
    }
  });
};

module.exports = {
  weather: weather,
};
