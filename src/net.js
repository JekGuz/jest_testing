async function getPost(id, fetchFn = fetch) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const res = await fetchFn(url);
    if (!res.ok) {
        console.log('Ошибка HTTP: ' + res.status);
    }
    return res.json();
}

async function hello(name) {
    return `Hello, ${ name }`;
}

module.exports = { getPost, hello };