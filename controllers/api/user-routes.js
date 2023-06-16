const { sign } = require('crypto');
const { User } = require ('../models');


const userController = {
    // Handler for creating a new user
    async signup(req, res) {
        try {
            await User.create(req.body);


            res.redirect('/login');
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to create user' });  
        }
    },

    // Handler for logging in a user   
    async login(req, res) {
        try {
             // Perform user authentication
      // ... (authenticate user credentials)

      // Set the logged_in session variable
        req.session.logged_in = true;
        req.session.user_id = user.id;

        // Redirect to the dashboard
        req.redirect('/dashboard');
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to login user' });
        }
    },

     // Handler for the logout route
  logout(req, res) {
    // Destroy the session and redirect to the homepage
    req.session.destroy(() => {
      res.redirect('/');
    });
  },
};

module.exports = userController;