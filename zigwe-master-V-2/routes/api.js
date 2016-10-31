var express = require('express');
var router = express.Router();
var connection = require('../Connection');

/*router.route('/foods').get(function(req,res){
	var category = req.param("category");
	var term = req.param("term");
	var foods = [
		{id:1,name:"Burnt Pepper Chicken",price:120,discount:0,image:"food1",category:"eatery",qty:0,item_type:"non-veg"},
		{id:2,name:"Lemon Basil Chicken",price:100,discount:0,image:"food2",category:"eatery",qty:0,item_type:"non-veg"},
		{id:3,name:"Chicken Manchurian",price:130,discount:0,image:"food3",category:"eatery",qty:0,item_type:"non-veg"},
		{id:4,name:"ChickenThai Meal Test",price:90,discount:0,image:"food4",category:"eatery",qty:0,item_type:"non-veg"},
		{id:5,name:"Biryani",price:120,discount:0,image:"food1",category:"eatery",qty:0,item_type:"veg"},
		{id:6,name:"Veg Roll",price:100,discount:0,image:"food2",category:"eatery",qty:0,item_type:"veg"},
		{id:7,name:"Mixed Manchurian",price:130,discount:0,image:"food3",category:"eatery",qty:0,item_type:"veg"},
		{id:8,name:"Paneer Chilly",price:90,discount:0,image:"food4",category:"eatery",qty:0,item_type:"veg"},
		{id:9,name:"Masala Dosa",price:120,discount:0,image:"food1",category:"eatery",qty:0,item_type:"veg"},
		{id:10,name:"Idly & Vada",price:100,discount:0,image:"food2",category:"eatery",qty:0,item_type:"veg"},
		{id:11,name:"Mutter Paneer",price:130,discount:0,image:"food3",category:"eatery",qty:0,item_type:"veg"},
		{id:12,name:"Malai Kofta",price:90,discount:0,image:"food4",category:"eatery",qty:0,item_type:"veg"}
	]
	res.send(foods);
});*/

/*router.route('/foods').get(function(req,res){
	var category = req.param("category");
	var term = req.param("term");
	var foods = connection.query('select * from items where category=/'+category+'/',function(err,result){
			 res.render('items', {items : result});
			  if (err) throw err
         
		});	
});*/

router.route('/foods').get(function(req,res){
	var key = req.param("category");
	var query  = 'select * from items';	
	console.log(query);
	connection.query(query,	function(err,result){
			if(err) {
				res.send({message: err});
				console.log(err);
				return;
			}else {
				var foods = JSON.stringify(result);
				console.log("printing the result "+foods);
				res.send(foods);				
			}
		}
	);
});

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
function getFoodsByTerm(){
	
}

module.exports = router;