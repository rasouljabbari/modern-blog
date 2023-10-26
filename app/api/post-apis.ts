import { toast } from "react-toastify";

export async function getPosts(page: number | [0]) {
    console.log(page);
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
    if (!res.ok) {
        throw new Error('Failed to fetch posts data')
    }
    return res.json()
}

export function createPost({ title, body, userId }: createContentType) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            toast.success('Created post successfully')    
        });
}