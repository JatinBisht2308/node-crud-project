exports.signUp = async(req,res,next) => {
    return res.status(200).send({message:"hitting the sign up route"})
}
// Login route
exports.logIn = async(req,res,next) => {
    return res.status(200).send({message:"hitting the login route"})
}
// Update user route
exports.updateUser = async(req,res,next) => {
    return res.status(200).send({message:"hitting the update user route"})
}
// Delete User route
exports.deleteUser = async(req,res,next) => {
    return res.status(200).send({message:"hitting the delete user route"})
}
// Data route
exports.data = async(req,res,next) => {
    return res.status(200).send({message:"hitting the data route"}) 
}
