const userModel = require('../../models/userModel.js')

const userDto = require("../../dto/userDto.js")
exports.createUsers = async (req, res) => {
    try {
        const data = req.body
        const user = await userModel.create(data)
       
        return res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: new userDto(user)
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error: ${error.message}`
        })
    }

}