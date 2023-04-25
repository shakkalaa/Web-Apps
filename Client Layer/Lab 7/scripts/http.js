export const sendGETRequest = async (url) => { //Asynchronous function
    const options = new Object(); //Empty object for HTTP options
    options.method = "GET"; //HTTP method: GET
    const response = await fetch(url, options); //Send request with fetch (wait)
    const data = await response.json(); //Extract json from response (wait)
    return data //return data as an Object
}
    