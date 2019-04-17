var  mongojs  =  require("./node_modules/mongojs");
var  db  =  mongojs('mongodb://localhost:27017/catalog', ['book']);
exports.getAllBooks = function (_id, res) {
    
   db.book.find({},{_id: 0}, function (err, result) {
        if (err) {
            res.json(err);

        } else {
            console.log(result)
            res.send({ "value": result});
        }
    }
    )
}


