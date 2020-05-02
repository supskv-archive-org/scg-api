const { Client, Status } = require("@googlemaps/google-maps-services-js");
const api = require("../../config/api");

const client = new Client({});

exports.getDirectionFrom = async function (origin, destination) {
  try {
    const result = await client.directions({
      params: {
        origin: origin,
        destination: destination,
        // drivingOptions: {
        //   departureTime: new Date(Date.now()), // for the time N milliseconds from now.
        //   trafficModel: "optimistic",
        // },
        key: api.google_maps_api_key,
      },
      timeout: 1000, // milliseconds
    });

    return { success: true, data: result.data };
  } catch (e) {
    return { success: false };
  }
};
