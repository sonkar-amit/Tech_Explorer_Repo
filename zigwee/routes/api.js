var express = require('express');
var router = express.Router();
var connection = require('../Connection');

var data = {
	count : 10,
	description : "test description",
	eid : 1,
	name:"oats",
	price: 20,
	url: "www.testzigwee.com",
	item_type: "food"
};

// //Used for routes that must be authenticated.
// router.use(function(req, res, next) {
//
// 	if (req.method === 'GET')
// 	{
// 		return next();
// 	}
//
// 	if (!req.isAuthenticated()){
// 		return res.redirect('/#login');
// 		console.log('test')
// 	}
//
// 	// if the user is not authenticated then redirect him to the login page
// 	return next();
// });

router.route('/posts')

	.post(function(req,res)
	{
		connection.query('insert into eateries set ?',data, function(err, result) {
			if(err) {
				res.send({message: err});
				return;
			}
			else {
				res.send({message: result});
			}
		});
	})

	.get(function(req,res)
	{
		res.send({message:"TODO get all the posts in the database"});
	})

//api for a specfic post
router.route('/posts/:ids')

    //create
    .put(function(req,res){
        return res.send({message:'TODO modify an existing post by using param ' + req.params.ids});
    })

    .get(function(req,res){
        return res.send({message:'TODO get an existing post by using param ' + req.params.ids});
    })

    .delete(function(req,res){
        return res.send({message:'TODO delete an existing post by using param ' + req.params.id});
    })

module.exports = router;