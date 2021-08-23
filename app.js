const express = require( 'express' )
const hbs = require( 'hbs' );
require( 'dotenv' ).config();

const app = express()
const port = process.env.PORT;


// Handlebars

app.set( 'view engine', 'hbs' );
hbs.registerPartials( __dirname + '/views/partials' );


// servir contenido estatico

app.use( express.static( 'public' ) );

app.get( '/', ( req, res ) => {
    res.render( 'home', {
        nombre: 'Andoni Larrazabal',
        titulo: 'Curso nodejs'
    } );
} )

app.get( '/generic', ( req, res ) => {
    res.render( 'generic', {
        nombre: 'Andoni Larrazabal',
        titulo: 'Curso nodejs'
    } );
} )

app.get( '/elements', ( req, res ) => {
    res.render( 'elements', {
        nombre: 'Andoni Larrazabal',
        titulo: 'Curso nodejs'
    } );
} )

app.get( '*', ( req, res ) => {
    res.send( 'public/404.html' )
} )
app.listen( port, () => {
    console.log( `Example app listening at http://localhost:${ port }` )
} );