type Loc = {
    lon: number;
    lat: number;
    pop?: number;
};

function displayLocation({lon, lat, pop}: Loc) {
    console.log(`Longitude: ${lon}`);
    console.log(`Latitude: ${lat}`);

    if (pop !== undefined)
        console.log(`Population: ${pop}`);
}

displayLocation({lon: -3.94, lat: 51.62});
displayLocation({lon: -3.94, lat:51.62, pop: 275_000});