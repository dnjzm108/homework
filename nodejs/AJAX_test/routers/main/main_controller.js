const { User } = require('../../models/index')

let main =async(req, res) => {
        let result = await User.findAll({});
        res.json({
            result,
        })
    
    
}


module.exports = {
    main: main
}