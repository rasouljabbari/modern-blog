import { toast } from "react-toastify";
import {API_URL} from "../../config"

const headers = {
    'Content-type': 'application/json; charset=UTF-8',
}

export async function getPosts(page: number | [0]) {
    const res = await fetch(`${API_URL}/posts?_page=${page}&_limit=10`,
        {
            next:
            {
                revalidate: 3600,
                tags: ['post']
            }
        })
    if (!res.ok) {
        throw new Error('Failed to fetch posts data')
    }
    return res.json()
}

export async function createPost({ title, body, userId }: createContentType) {
    const res = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId,
        }),
        headers,
    })
        .then((response) => response.json())
        .then((json) => {
            toast.success('Created post successfully')
            return json;
        });
    return res
}


export async function deletePost({ postId }: {postId: number}) {
    const res = await fetch(`${API_URL}/posts/${postId}`, {
        method: 'DELETE'
    })
        .then((response) => response.json())
        .then((json) => {
            toast.success('Deleted post successfully')
        });
    return 200
}

export async function updatePost({ title, body, userId,postId }: createContentType) {
    const res = await fetch(`${API_URL}/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: postId,
            title,
            body,
            userId,
        }),
        headers,
    })
        .then((response) => response.json())
        .then((json) => {
            toast.success('Updated post successfully')
            return json;
        });
    return res
}