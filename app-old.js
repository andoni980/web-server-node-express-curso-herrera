const http = require( 'http' );

http.createServer( ( req, res ) => {

    // res.writeHead( 200, { 'Content-Type': 'application/json' } )
    // res.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv' );
    // res.writeHead( 200, { 'Content-Type': 'application/csv' } );

    res.write( 'hola mundo' );

    res.end();
} )
    .listen( 3030 );

console.log( 'escuchando el puerto', 3030 );