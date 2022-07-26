import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { User } from '../services/user.type'
import { EditionUtilisateur } from './EditionUtilisateur'
import { Utilisateur } from './Utilisateur'


export type FormulaireListProps = {
    users: User[],
    deleteUser: Function,
    modifiedUser: Function
}

export const FormulaireList = (props: FormulaireListProps) => {
    const [selectId, setSelectId] = useState<number>(2)

    const modifiedUser = (user: User) => {
        props.modifiedUser(user)
        setSelectId(0)
    }

    return (
        <>
            {props.users && (props.users).map((user: User, index: number) => {
                if (user.id === selectId) {
                    return <EditionUtilisateur key={index} user={user}  modifiedUser={modifiedUser} />
                } else {
                    return <Utilisateur key={index} user={user} deleteUser={props.deleteUser} handleClickEdit={setSelectId} />
                }
            })}



        </>


    )
}
