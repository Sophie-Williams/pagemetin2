'use strict'

function index(req,res){

	res.render('index', {user : req.user});

}


module.exports = {
	index
}