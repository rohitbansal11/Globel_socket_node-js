const tryControlller = async (req, res) => {

global.io.emit("getNotifications", req.body);
   return res.json(req.body)
   
  };

  module.exports = {
    tryControlller
  };
  