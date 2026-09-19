const postModel = require('../../models/postModel.js')

const postDto = require("../../dto/postDto.js")
exports.createPosts = async (req, res) => {
    try {
        const data = req.body
        const post = await postModel.create(data)
       
        return res.status(200).json({
            success: true,
            message: "Post created successfully!",
            data: new postDto(post)
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error: ${error.message}`
        })
    }

}