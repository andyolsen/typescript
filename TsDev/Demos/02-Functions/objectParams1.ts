function displayLocation(loc: {lon: number, lat: number}) {
    console.log(`Longitude: ${loc.lon}`);
    console.log(`Latitude: ${loc.lat}`);
}

// This call is OK.
displayLocation({lon: -3.94, lat: 51.62});

// This call is not OK - 'lat' property is missing.
displayLocation({lon: -3.94});

// This call is not OK - 'lat' property is incorrect type.
displayLocation({lon: -3.94, lat:'51.62'});

// This call is not OK - 'pop' property was unexpected.
displayLocation({lon: -3.94, lat:51.62, pop: 275_000});