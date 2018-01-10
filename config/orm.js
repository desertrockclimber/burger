// Create an orm.js file inside config directory.

// Import (require) connection.js into orm.js

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll() 

// insertOne() 

// updateOne() 

// Export the ORM object in module.exports.

var connection = require('./connection.js');
// function printQuestionMarks(num) {
// 	var arr = [];

// 	for (var i = 0; i<num; i++){
// 		arr.push("?");
// 	};
// 	return arr.toString()
// };

// function objToSql(ob) {
// 	var arr = [];
// 	for (var key in ob) {
// 		if (ob.hasOwnProperty(key)) {
// 				arr.push(key + '=' + ob[key]);
// 		}
// 	}
// 	return arr.toString();
// }

var orm = {

  selectAll: function(tableName, cb) {
    var s = "SELECT * FROM " + tableName + ';';

    connection.query(s, function(err, res) {
    		if (err) throw err;
      cb(res);
      console.log(res);
    });
  },
   insertOne: function(tableName, cols, vals, cb) {
   	var s = "INSERT INTO "+ tableName +  " (" + cols +") " + "VALUES('" + [vals] +"')";
   	console.log(s);
   	connection.query(s, vals, function(err, res){
   			if (err) throw err;
   		cb(res);
   	})
   	// var s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
    // burger.complete = burger.complete || 0;
    // connection.query(s, [
    //   burger.text, burger.complete
    // ], function(err, result) {

      
   },

  
  updateOne: function(tableName, col_name, condition, cb){
  	var s = "UPDATE " + tableName + "SET" + col_name + "=1 " + "WHERE id= " + condition;
  		console.log(s);

    connection.query(s, function(err, res) {
    		if (err) throw err;
      cb(res);
    });
  }
};

module.exports = orm;