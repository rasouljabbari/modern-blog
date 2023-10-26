export async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1`)
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch posts data')
    }
    return res.json()
}