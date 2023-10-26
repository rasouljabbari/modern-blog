interface postContentType {
    title?: string,
    body?: string
}
interface postType {
    userId: number,
    id: number,
    title: string,
    body: string
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