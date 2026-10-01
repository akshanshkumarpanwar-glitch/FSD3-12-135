// we use In-memory database
let users = [
    {id:1,name:'Aaryan Vashishtha',mob:'9387xxxxxx',email:'aaryan.example@exam.com'},
    {id:2,name:'Aditya Verma',mob:'9147xxxxxx',email:'verma.example@exam.com'}
]

let nextId = 3;

export const getUsers = () => users;

export const addUser = (user) => {
    user.id = nextId++;
    users.push(user);
    return user;
};
