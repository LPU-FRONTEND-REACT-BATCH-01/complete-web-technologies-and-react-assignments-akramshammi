let users=[
    {id:1,username:"AkramShammi",password:"Akru"},
    {id:2,username:"Ankit",password:"Anku"},
    {id:3,username:"Aditya",password:"Adi"}
]

let inputData = {
    username:"Ankit",
    password:"Anku"
}
let userExists = users.some(ele => ele.username === inputData.username);

if (userExists) {
    console.log("User Found : Sign in");

    let user = users.find(ele => ele.username === inputData.username);

    if (user.password === inputData.password) {
        console.log("Navigating to Home Page");
    } else {
        console.log("Invalid Credentials");
    }

} else {
    console.log("User Not Found : Sign up");
}
