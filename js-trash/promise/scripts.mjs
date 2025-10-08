import {filteredUser, setUserLocalToStorage} from "./index.mjs";
import {filteredAgeOfUsers, getUsersLocalToStorage} from "./tabs.mjs";

setUserLocalToStorage(filteredUser);

const usersLocalToStorage = getUsersLocalToStorage();

console.log(usersLocalToStorage);
console.log(filteredAgeOfUsers);
console.log(filteredUser);
