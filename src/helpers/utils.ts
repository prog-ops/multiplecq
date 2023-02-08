import {Category} from "../models/Quiz";

export const constructCategories = (categories: Category[]) => {
    let result: { label: string, code: number }[] = []
    for (let cat of categories) {
        result.push({code: cat.id, label: cat.name})
    }
    return result;
}