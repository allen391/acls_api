const fs = require("fs");

module.exports = {
  readFile: (url) => {
    return new Promise((resolve, reject) => {
      fs.readFile(url, (err, data) => {
        if (!err){
          resolve(data)
        }else {
          console.log(err)
          reject(err)
        }
      })
    })
  }
}
