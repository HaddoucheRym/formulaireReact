import React, { useState } from 'react'
import { User } from '../services/user.type'
import './Add.css'

export type AddUserProps = {
    addUser(newUser: User): void,
    users:User[],
    setUsers:Function

}

export const AddUser = (props: AddUserProps) => {
    const [newUser, setNewUser] = useState<User>({
        id: 0,
        nom: "",
        prenom: ""
    })


    // const saveInput = (name: string, value: any): any => {
    //     setUsers((previousUsers:any) => { return { ...previousUsers, [name]: value } })
    // }

    const handleChangeNom = (event:any)=>{
        setNewUser({...newUser, nom:event.target.value,})}
    
    const handleChangePrenom = (event:any) :void =>{
        setNewUser({...newUser, prenom:event.target.value,})}
    
    const handleClickSave = (): void => {
        props.addUser(newUser)
    }


    return (
        <>
        <div className='add'>
            <h2>AddUser</h2>
            <div>
                <p>
                    nom: <input className='inputNom' type="text"  defaultValue={newUser.nom} onChange={(event:any)=> handleChangeNom(event)} />
                </p>
                <p>
                    prenom: <input className='inputNom' type="text" defaultValue={newUser.prenom} onChange={(event:any)=> handleChangePrenom(event)} />
                </p>
            </div>
            <button onClick={handleClickSave} >Ajouter</button>
        </div>
            
        </>


    )
}
