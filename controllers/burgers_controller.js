var express = require("express");

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// $(function () {
//     $(".create-form").on("submit", function (event) {
//         event.preventDefault();

//         var newBurger = {
//             burger_name: $("#newburger")
//                 .val()
//                 .trim(),
//             devoured: 0
//         };

//         $.ajax("/api/burgers", {
//             type: "POST",
//             data: newBurger
//         }).then(function () {
//             console.log("Added new burger");
//             location.reload();
//         });
//     });

//     $(".eatburger").on("click", function (event) {
//         event.preventDefault();

//         var id = $(this).data("id");
//         var devouredState = {
//             devoured: 1
//         };

//         $.ajax("/api/burgers/" + id, {
//             type: "PUT",
//             data: devouredState
//         }).then(function () {
//             console.log("Burger devoured");
//             location.reload();
//         });
//     });

//     $(".trashburger").on("click", function (event) {
//         event.preventDefault();

//         var id = $(this).data("id");

//         // Send the DELETE request.
//         $.ajax({
//             type: "DELETE",
//             url: "/api/burgers/" + id
//         }).then(location.reload());
//     });
// });





router.post("/api/burgers", function (req, res) {
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function (result) {
            // Send back the ID of new burger
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.updateOne({ devoured: req.body.devoured }, condition, function (
        result
    ) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
