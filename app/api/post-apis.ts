import { toast } from "react-toastify";

export async function getPosts(page: number | [0]) {
    console.log(page);

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
    if (!res.ok) {
        throw new Error('Failed to fetch posts data')
    }
    return res.json()
}

export async function createPost({ title, body, userId }: createContentType) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
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
            toast.success('Created post successfully')
            return json;
        });
    return res
}


export async function deletePost({ postId }: {postId: number}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
    })
        .then((response) => response.json())
        .then((json) => {
            toast.success('Deleted post successfully')
        });
    return 200
}

export async function updatePost({ title, body, userId,postId }: createContentType) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: postId,
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
            toast.success('Updated post successfully')
            return json;
        });
    return res
}