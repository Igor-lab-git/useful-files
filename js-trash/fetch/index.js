const url = 'https://jsonplaceholder.typicode.com/todos/'

const getUsersData = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (e) {
        console.error(e.message)
    }
}

getUsersData(url).then(data => console.log(data))