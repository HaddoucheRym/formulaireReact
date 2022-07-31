import React, { useEffect, useState } from 'react'
import { AddUser } from '../components/AddUser'
import { FormulaireList } from '../components/FormulaireList'
import { formulaireService } from '../services/formulaireService'
import { User } from '../services/user.type'
import './PageFormulaire.css'

export const PageFormulaire = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        findAllFormulair()
    }, [])

    const findAllFormulair = (): void => {
        formulaireService.findAll().then(data => setUsers(data))
    }

    const addUser = (newUser: User): void => {
        formulaireService.post(newUser).then(() => {
            findAllFormulair()
        })
    }

    const deleteUser = (id: number) => {
        formulaireService.delete(id).then(() => {
            findAllFormulair()
        })
    }

    const modifiedUser = (user: User) => {
        formulaireService.put(user).then(() => {
            findAllFormulair()
        })
    }

    return (
        <>
        <h2 className='listUser'>Users List</h2>
            <FormulaireList users={users} deleteUser={deleteUser} modifiedUser={modifiedUser} />
            <AddUser addUser={addUser} users={users} setUsers={setUsers} />
        </>
    )
}
