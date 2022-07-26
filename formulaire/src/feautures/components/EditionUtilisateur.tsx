import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { User } from '../services/user.type'

export type UtilisateurProps = {
    user: User,
    modifiedUser: Function
}

export const EditionUtilisateur = (props: UtilisateurProps) => {

    const [user, setUser] = useState(props.user)

    const modifierUser = () => {
        props.modifiedUser(user)
    }

    const handleChangeNom = (event:any)=>{
        setUser({...user, nom:event.target.value,})}
    
    const handleChangePrenom = (event:any) :void =>{
        setUser({...user, prenom:event.target.value,})}

    return (

        <>
            <p>
                nom: <input type="text" value={user.nom} onChange={handleChangeNom} />
            </p>
            <p>
                prenom: <input type="text" value={user.prenom} onChange={handleChangePrenom} />
            </p>
            <button onClick={() => modifierUser()}>Modifier</button>
        </>
    )
}
