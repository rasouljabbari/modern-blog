interface postContentType {
    title?: string,
    body?: string
}

interface createContentType {
    userId?: number,
    title: string,
    body: string,
    postId?: number
}

interface postType extends createContentType{
    id: number
}

interface propsType {
    post: postType
}

interface modalTypes {
    setShowModal: (value: boolean) => void,
    size: 'sm' | 'md' | 'lg',
    children: React.ReactNode
}

interface modalContentType {
    setShowModal: (value: boolean) => void,
    post?: postType,
    isNew?: boolean
}

interface deletePostType {
    setShowModal: (value: boolean) => void,
    postId: number,
}