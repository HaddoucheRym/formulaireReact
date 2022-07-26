import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { User } from '../services/user.type'

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
      <p>
        Nom: {props.user.nom}
      </p>
      <p>
        Prenom: {props.user.prenom}
      </p>
      <button onClick={() => supprimerUser()} >Supprimer</button>
      <button onClick={() => props.handleClickEdit(props.user.id)}>Modifier</button>

    </>
  )
}
