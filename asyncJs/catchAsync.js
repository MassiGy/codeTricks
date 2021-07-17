// ExpressJS based async function handler

// basic version (without passing the error to an third party express error handler middelware ).

const catchAsync = fn => { // accepts a function 
        return function(req, res) { // retun a function that will be executed on calling the catchasync function
            fn(req, res).catch(e => { // execute the funtion that is passed as an argument and append to it .catch methode  
                console.log(e); // console to your node terminal the error
                req.flash('error flag', e.message) // flash the error message as an alert for user 
            })
        }
    }
    //* Then do this  */
app.post('/products', catchAsync(async(req, res) => {
    await new Product(req.body);
    req.flash('success flag', 'Product Added !');
    res.redirect('/shop');
}));
//* rather than this */ 
app.post('/products', async(req, res) => {
    try {
        await new Product(req.body);
        req.flash('success flag', 'Product Added !');
        res.redirect('/shop');

    } catch (err) {
        req.flash('error flag', err);
        res.redirect('/shop');
    }
})