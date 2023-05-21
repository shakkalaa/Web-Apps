var express = require ( 'express' );
var router = express . Router ();
const controller = require ( '../controllers/user-controllers' );

router . get ( '/' , controller . getIndex );

module . exports = router 