import { User } from './user.type';

const URL: string = "http://localhost:3000/users"

export class FormulaireService {

    findAll = (): Promise<User[]> => {
        return fetch(URL).then((res) => res.json())
    }

    post = (user: User): Promise<User> => {
        return fetch(URL, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-type": "Application/json" }
        }).then((res) => res.json())
    }

    delete = (id: number): any => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

    put = (element:User): any => {
        return fetch(`${URL}/${element.id}`, {
                method: "PUT",
                body: JSON.stringify(element),
                headers: {"Content-type": "Application/json" }
        }).then(ress => ress.json())
    }
}

export const formulaireService = Object.freeze(new FormulaireService)