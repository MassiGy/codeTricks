// let suppose that those required entities does exist!
const User = require('./modals/user.js');
const Review = require('./modals/reviews.js');
const express = require('express');
const app = express();



// let suppose that we want to retrieve data from the database to send it back to the user
// for an exemple when the client want to see the profile of a user with a specific id .

app.get('/users/:id', async(req, res) => {
    const { id } = req.params;
    //* Do this 
    const fetchedUser = await User.findById(id)
        .populate({
            path: 'Activity',
            populate: {
                path: 'reviews',
                modal: 'Reviews',
            }
        })

    //* instead of this
    const fetchedUser = await User.findById(id).populate('Activity')
        .then(() => {
            populate('reviews')
        })
        .catch(err => {
            console.log(err.message)
        })


    //* then send back the data
    res.render('UserPage.ejs', { fetchedUser });
})