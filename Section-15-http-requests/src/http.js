export async function fetchAvailablePlaces(){
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch places"); //if do not catch the error, the error crashes the app
    }

    return resData.places;
}

export async function updateUserPlaces(places){
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places}),//{places: places}
        headers: {
            'Content-type': 'application/json' 
            //inform the backend that data attached to this request will be in JSON format. 
            //Make suer that data is extracted successfully on the backend
        }
    })

    const resData = await response.json();

    if(!response.ok){
        throw new Error('Fail to update user data.');
    }

    return resData.message;
}