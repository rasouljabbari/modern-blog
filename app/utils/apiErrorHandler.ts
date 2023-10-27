import { toast } from 'react-toastify';

export const apiErrorHandler = (res: any) => {
    const { status, message } = res

    if (status === 404) {
        toast.error('Not found api route')
    } else if (message === 'Failed to fetch') {
        toast.error('Network error:  please check your connection')
    } else {
        toast.error('Failed to fetch api route')
    }

    return false
}