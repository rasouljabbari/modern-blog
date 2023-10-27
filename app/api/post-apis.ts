import { toast } from "react-toastify";
import { API_URL } from "../../config"
import { apiErrorHandler } from "../utils/apiErrorHandler";

const headers = {
    'Content-type': 'application/json; charset=UTF-8',
}

export async function getPosts(page: number | [0]) {
    return await fetch(`${API_URL}/posts?_page=${page}&_limit=10`,
        {
            next:
            {
                revalidate: 3600,
                tags: ['post']
            }
        })
        .then((response) => {
            return response.json()
        })
        .catch((err) => {
            return apiErrorHandler(err)
        })
}

export async function createPost({ title, body, userId }: createContentType) {
    return await fetch(`${API_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId,
        }),
        headers,
    })
        .then((response) => {
            toast.success('Created post successfully')
            return response.json()
        })
        .catch((err) => {
            return apiErrorHandler(err)
        })
}


export async function deletePost({ postId }: { postId: number }) {
    return await fetch(`${API_URL}/posts/${postId}`, {
        method: 'DELETE'
    })
        .then((response) => {
            toast.success('Deleted post successfully')
            return response.json()
        })
        .catch((err) => {
            return apiErrorHandler(err)
        })
}

export async function updatePost({ title, body, userId, postId }: createContentType) {
    return await fetch(`${API_URL}/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: postId,
            title,
            body,
            userId,
        }),
        headers,
    })
        .then((response) => {
            toast.success('Updated post successfully')
            return response.json()
        })
        .catch((err) => {
            return apiErrorHandler(err)
        })
}