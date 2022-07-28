import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { User } from '../services/user.type'
import './Utilisateur.css'

export type UtilisateurProps = {
  user: User,
  deleteUser: Function,
  handleClickEdit: Function
}

export const Utilisateur = (props: UtilisateurProps) => {

  const supprimerUser = () => {
    props.deleteUser(props.user.id)
  }

  return (

    <>
    <div className='user-box'>
      <p>
        Nom: {props.user.nom}
      </p>
      <p>
        Prenom: {props.user.prenom}
      </p>
      <button className='supprimer' onClick={() => supprimerUser()} ><i className="pi pi-trash"></i></button>
      <button className='modifier' onClick={() => props.handleClickEdit(props.user.id)}><i className="pi pi-pencil"></i></button>
    </div>
    </>
  )
}
