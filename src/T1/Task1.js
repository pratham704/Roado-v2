const userSessionSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    deviceId: { type: String, required: true }, // can be expo id 
    logged_in: { type: Date, required: true }, 
    logged_out: { type: Date }, 
    lastSeenAt: { type: Date, required: true }, 
  }, { timestamps: true });



  const getStatics = async (req, res) => {
    try {
      const currentDate = new Date();

      // middlewear auth , for authentication next()
  
      const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0, 23, 59, 59);
  
      const loggedInUsersCount = await UserSession.countDocuments({
        logged_in: { $gte: startOfMonth, $lte: endOfMonth },
      });
  
      const activeUsersCount = await UserSession.countDocuments({
        lastSeenAt: { $gte: startOfMonth, $lte: endOfMonth },
      });
  
      const currentlyLoggedInUsersCount = await UserSession.countDocuments({
        logged_in: { $lte: currentDate },
        $or: [
          { logged_out: { $gte: currentDate } }, 
          { logged_out: { $exists: false } }, 
        ],
      });


      let resData = {
        loggedInUsersCount , 
        activeUsersCount , 
        currentlyLoggedInUsersCount
      }


      res.status(200).json({"success" : true , data  : resData});


    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };
  
  