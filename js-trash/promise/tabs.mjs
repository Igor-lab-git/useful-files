import {db} from "./vars.mjs";

const filteredAgeOfUsers = db.filter((user) => user.age > 30);

const getUsersLocalToStorage = (user) => {
    return localStorage.getItem("user");
}

export { getUsersLocalToStorage, filteredAgeOfUsers }
