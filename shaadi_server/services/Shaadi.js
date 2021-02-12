const { response } = require('express')
const { User } = require('../model/user')

let data = {
    diya: { username: "diya", password: "testone",relation:"self",gender:"female"},
    dillu: { username: "dillu", password: "1234" ,relation:"self",gender:"male" },
    drishya: { username: "drishya", password: "12345",relation:"self",gender:"female"},
    gopi: { username: "gopi", password: "123456",relation:"self",gender:"male" }
}
let currentUser
function getCurrentUser() {
    return currentUser
}

function getUsers() {
    return User.find({})//.select("username accnum")
    .then(users=>{
        if(users){
            return{
                statusCode:200,
                users:users,
                
            }
        }
    })
}
function registration1(username,password,relation,gender) {
    // data[username] = { username, password, accnum,history:[],balance:0}
    return User.findOne({
        username
    }).then(user => {
        if (user) {
            return {
                statusCode: 400,
                message: "Account already exists please login"
            }
        }
        const newUser = new User({
            username, password, relation, gender
        })

        newUser.save()
        return {
            statusCode: 200,
            message: "successfully completed part 1 ..taking to part 2 of registration"
        }

    })

}
function registration2(fullname, dob, religion, community, place) {
    // data[username] = { username, password, accnum,history:[],balance:0}
    return User.findOne({
        username
    }).then(user => {
        if (user) {
            return {
                statusCode: 400,
                message: "Account already exists please login"
            }
        }
        const newUser = new User({
            fullname, dob, religion, community, place
        })

        newUser.save()
        return {
            statusCode: 200,
            message: "Account created successfully"
        }

    })

}
function login(username, password) {
    return User.findOne({
        username,
        password
    }).then(user => {
        if (user) {

            return {
                statusCode: 200,
                message: "logged in successfully"

            }
        }
        return {
            statusCode: 400,
            message: "Invalid user"
        }
    })
}

module.exports = {
    getUsers:getUsers,
    registration1:registration1,
    
    login:login
}