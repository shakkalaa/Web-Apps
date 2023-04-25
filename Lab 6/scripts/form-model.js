const formId = "1FAIpQLSdZnAt_TDTPQvDPZt7xIGNjZT1b2e-SsS8eQrvPPBSa_CP7QA" ;
const entry1 = "entry.506337080" ;
const entry2 = "entry.765298335" ;
const entry3 = "entry.98502925" ;

const responseEvent = response => alert ( 'Success!' ); 
const getPath = formId => `https://docs.google.com/forms/d/e/${ formId }/formResponse` ; 

const postToGoogleDB = function ( data ){
    const path = getPath( formId );
    const url = getURL( path , data )
    sendRequest( 'POST' , url )
        .then( responseEvent ); 

}

const getURL = function( path , params ){
    const url = new URL( path );
    for( let key in params ){
        url.searchParams.set( key , params [ key ] );
    }

    return url ;
} 

const initRequest = function( verb , url ){
    const init = new Object ();
    init.method = verb ;
    init.mode = 'no-cors' ;
    return new Request ( url , init );
} 
  
const sendRequest = async function( verb , url ) {
    const request = initRequest( verb , url );
    const response = await fetch( request );
    return response ;
} 
   