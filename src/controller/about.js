exports.getAbout = async (req,res,next)=>{
    const members = require('../config/members')
    try {
      res.send(members)
    } catch (e) {
      res.send(e)
    }
  }