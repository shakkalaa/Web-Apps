const formId = "1FAIpQLSfGCFzOSDsAtYxjqtmPRrYV5P6KnPg6cmT_ubGrcLfOj8Tx-w" ;
const entry1 = "entry.710396936" ;
const entry2 = "entry.1810959664" ;
const entry3 = "entry.1810518716" ;
const getPath = formId => `https://docs.google.com/forms/d/e/ ${ formId } /formResponse` ; 
const responseEvent = response => alert("Success!");

const postToGoogleDB = function ( data ){
    const path = getPath ( formId );
    const url = getURL ( path , data )
    sendRequest('POST, url')
        .then(responseEvent);
} 
   
const getURL = function ( path , params ){
    const url = new URL ( path );
    for ( let key in params ){
        url.searchParams.set( key , params [ key ] );
    }
    return url ;
} 

const initRequest = function ( verb , url ){
    const init = new Object();
    init.method = verb;
    init.mode = 'no-core';
    return new Request(url, inti);
} 

const sendRequest = async function(verb, url){
    const request = initRequest(verb, url);
    const response = await fetch(request);

    return response;
}
   