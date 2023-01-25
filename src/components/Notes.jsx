import React, { useContext, useState } from 'react';
import { Context } from '../context/NoteContext';
import {ImTable2, ImList} from "react-icons/im";
import Button from '../ui/Button';
import Note from './Note';

function Notes() {
  const {notes,lang,search} = useContext(Context)
  const [active,setActive] = useState(false)
  let list
  if (active) {
    list = <><ImList /><span>{lang.list}</span></>
  }else{
    list = <><ImTable2 /><span>{lang.table}</span></>
  }
  return (
    <div className='container'>
        <div className="allnotes">
            <h2 className="title">{lang.noteTitle}</h2>
            <Button classes={'btn-primary'} click={()=>setActive(!active)}>{list}</Button>
        </div>
        <div className={`notes ${active ? 'active' : ''}`}>
          {notes.filter((note)=>{
            if (search === '' || search === null || search === undefined) {
              return note
            }else if (note.title.toString().toUpperCase().includes(search.toUpperCase())) {
              return note
            }
          }).map((note)=>(
            <Note note={note} key={note.id} />
          ))
          }
        </div>
    </div>
  )
}

export default Notes