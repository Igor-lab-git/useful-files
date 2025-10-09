const logMessage = (date, importance, message) => {
    return `[${date.getHours()}:${date.getMinutes()}] -[ ${importance} - ${message}]`;
}

console.log(logMessage( new Date(),"message", "my message"))