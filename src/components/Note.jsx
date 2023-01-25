import React, { useContext } from 'react'
import {FaPencilAlt, FaTrashAlt} from 'react-icons/fa'
import { Context } from '../context/NoteContext'
import Button from '../ui/Button'
import Card from '../ui/Card'
function Note({note}) {
  const {lang,editNote,delNote} = useContext(Context)
  return (
    <Card classes={'card'}>
      <div className="note__info">
        <h3 className="note__title">{note.title}</h3>
        <p className="note__time">{note.time}</p>
      </div>
      <p className="note__text">{note.text}</p>
      <div className="note__btn">
        <Button classes="btn-secondary" click={()=>editNote(note)}>
          <FaPencilAlt />
          <span>{lang.edit}</span>
        </Button>
        <Button classes="btn-danger" click={()=>delNote(note.id)}>
          <FaTrashAlt />
          <span>{lang.del}</span>
        </Button>
      </div>
    </Card>
  )
}

export default Note