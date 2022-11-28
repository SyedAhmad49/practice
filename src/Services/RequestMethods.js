import request from "./RequestHandler"


function getGithubAccount(username) {
        return request({
        url:`https://api.github.com/users/${username}`,
        method:"GET"
        })
    }

const Service = {getGithubAccount}
export default Service