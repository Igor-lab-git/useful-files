const formPostElement = document.querySelector(".load-todo-post");
const postIdInputElement = document.querySelector("#post-id");
const boxResult = document.querySelector(".result");
const createPostForm = document.querySelector(".create-post-form");
const searchFormPost = document.querySelector(".search-form-post");
const postViewsInputElement = document.querySelector("#post-views");

formPostElement.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/posts/${postIdInputElement.value}`)
        .then(response => {
            console.log(response)
            if (!response.ok) {
                const errorMessage = response.status === 404 ? "Пост по такому ID не найдена" : "Что-то пошло не так :(";

                throw new Error(errorMessage);
            }
            return response.json()
        })
        .then((json) => {
            console.log(json);

            const {title, views} = json;

            boxResult.innerHTML = `
        <p>${title}, просмотров ${views}</p>
        `

        })
        .catch((error) => {
            boxResult.innerHTML = error.message;
        })
})

createPostForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(createPostForm);
    const objectFormData = Object.fromEntries(formData);

    fetch(`http://localhost:3000/posts/`, {
        method: "POST",
        // headers: {'content-type': 'application/json; charset=UTF-8'},
        // credentials: 'include',
        body: JSON.stringify({
            ...objectFormData,
            views: 0,
        })
    }).then(response => {
        if (!response.ok) throw new Error("Ошибка сервера")
        console.log(response);
        return response.json();
    }).then(json => {
        console.log("Пост создан🎉", json);
    })
        .catch(error => {
            console.log(error.message);
        })
})

searchFormPost.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/posts?views_gte=${postViewsInputElement.value}`)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json => {
            console.log(json)
            boxResult.innerHTML = json.map(({title, views}) => {
                return `<p>${title} <b>просмотров</b>: ${views}</p>`
            }).join("")
        })
})

