class postDto {
    constructor(post) {
        this.id = post._id
        this.title = post.title,
        this.content = post.content
        this.userId = post.userId   
    }
}
module.exports = postDto;