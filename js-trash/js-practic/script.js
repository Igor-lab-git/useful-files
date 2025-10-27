const name = "Igor"

const admin = name
console.log(name)
console.log(admin)

const series = ['Доктор Хаус', 'Клиника', 'Чёрное зеркало'];

console.log(series)

console.log(1)
console.log("2")

const sayHy = (name) => {
    return `Hy ${name}?`
}

function safeAll(callback) {
    if(typeof  callback === "function") {
        callback();
    } else  {
        console.log(`It is not function ${callback}`);
    }
}
safeAll('sayHy("igor")')

console.log(Number([]))


const user = {
    name: "Igor",
    greet() {
        return `Hello, my name is ${this.name}`
    }
}
const newGreet = user.greet
console.log(newGreet())