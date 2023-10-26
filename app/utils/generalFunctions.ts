export const edit_item_with_id = (lastItems: any[], editItem: any) => {
    if (lastItems?.length > 0) {
        return lastItems.map((item) => {
            if (parseInt(item?.id) === parseInt(editItem?.id)) {
                return { ...editItem }
            } else {
                return { ...item }
            }
        })
    } else {
        return [editItem]
    }
}