

const User = require("../models/users");

const authenticateUser = async (req, res, next) => {
  console.log(req.session,req.session.userId,req.session.userEmail);

  if (req.session && req.session.userId && req.session.userEmail) {
      try {
          const user = await User.findById(req.session.userId);
          if (!user) {
              return res.status(404).json({ error: "User not found" });
          }
          
          
          req.userId = user._id;
          req.userEmail = user.useremail;

         
          next();
      } catch (error) {
          console.error("Error retrieving user data:", error);
          res.status(500).json({ error: "Internal Server Error" });
      }
  } else {
      res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authenticateUser;
