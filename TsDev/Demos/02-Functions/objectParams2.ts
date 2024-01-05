function displayLocation(loc: {lon: number, lat: number, pop?: number}) {
    console.log(`Longitude: ${loc.lon}`);
    console.log(`Latitude: ${loc.lat}`);

    if (loc.pop !== undefined)
        console.log(`Population: ${loc.pop}`);
}

// This call is OK.
displayLocation({lon: -3.94, lat: 51.62});

// This call is also OK.
displayLocation({lon: -3.94, lat:51.62, pop: 275_000});