const postModel = require('../../models/postModel.js')

const postDto = require("../../dto/postDto.js")
exports.getAllPosts = async (req, res) => {
    try {
        const posts= await postModel.find().populate('userId')
        if (!posts || posts.length == 0) {
            return res.status(404).json({
                success: false,
                message: "No Post exists!"
            })
        }
        return res.status(200).json({
            success: true,
            data: posts.map((each) => new postDto(each))
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error: ${error.message}`
        })
    }

}