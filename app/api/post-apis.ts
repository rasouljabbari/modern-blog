export async function getPosts(page: number | [0]) {
    console.log(page);
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
    if (!res.ok) {
        throw new Error('Failed to fetch posts data')
    }
    return res.json()
}