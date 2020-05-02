const { Client, Status } = require("@googlemaps/google-maps-services-js");
const api = require("../../config/api");

const client = new Client({});

// client
//   .directions({
//     params: {
//       origin:
//         "SCG Khwaeng Bang Sue, Khet Bang Sue, Krung Thep Maha Nakhon 10800",
//       destination:
//         "999/9 Rama I Rd, Pathum Wan, Pathum Wan District, Bangkok 10330",
//       drivingOptions: {
//         departureTime: new Date(Date.now()), // for the time N milliseconds from now.
//         trafficModel: "optimistic",
//       },
//       key: "AIzaSyDE2xHmOR937DIGgGHaTkuTfGB4HBQIMxQ",
//     },
//     timeout: 1000, // milliseconds
//   })
//   .then((r) => {
//     if (r.data.status === Status.OK) {
//       console.log(r.data.routes[0].legs);
//     } else {
//       console.log(r.data.error_message);
//     }
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// getDirectionFrom(
//   "SCG Khwaeng Bang Sue, Khet Bang Sue, Krung Thep Maha Nakhon 10800",
//   "centralwOrld, 999/9 Rama I Rd, Pathum Wan, Pathum Wan District, Bangkok 10330"
// );

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
