const url = "https://api.spacexdata.com/v2/launchpads";

/// d3.json() calls API and executes subsequent code only when API call is complete
/// .then() ensures data is recieved before executing arrow function--js is async and does not always wait for each command to finish unless otherwise told
/// data is stored in recievedData var
d3.json(url).then(receivedData => console.log(receivedData));