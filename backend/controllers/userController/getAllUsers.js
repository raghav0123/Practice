const userModel = require('../../models/userModel.js')

const userDto = require("../../dto/userDto.js")
exports.getAllUsers = async (req, res) => {
    try {
        const Users = await userModel.find()
        if (!Users || Users.length == 0) {
            return res.status(404).json({
                success: false,
                message: "No User exists!"
            })
        }
        return res.status(200).json({
            success: true,
            data: Users.map((each) => new userDto(each))
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error: ${error.message}`
        })
    }

}