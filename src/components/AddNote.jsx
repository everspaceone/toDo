import React, { useContext, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { Context} from '../context/NoteContext'
import Button from '../ui/Button'
import Card from '../ui/Card'
function AddNote() {
    const {lang,addNote,updateNote,noteEdit,active,setActive,title,setTitle,text,setText} = useContext(Context)
    const [disable,setDisable] = useState(true)
    const addTogle =(e)=>{
        e.preventDefault()
        setActive(!active)
        setTitle('')
        setText('')
    }
    const titleChange = (e)=>{
        setTitle(e.target.value)
        setDisable(false)
    }
    const textChange = (e)=>{
        setText(e.target.value)
        setDisable(false)
    }
    const onSumbit = (e)=>{
        e.preventDefault()
        if (title.trim() !== '' || text.trim() !== '') {
            const newNote = {
                id:new Date().getTime().toString(),
                title:title,
                text:text,
                time:new Date().toLocaleDateString()
            }
            if (noteEdit.edit) {
                updateNote(noteEdit.item.id,newNote)
            }else{
                addNote(newNote)
            }
            setActive(!active)
            setTitle('')
            setText('')
            setDisable(true)
        }
    }
  return (
    <>
    <div className={`addNote ${active ? 'active' : ''}`}>
        <Card classes={'card'}>
            <form onSubmit={onSumbit}>
                <h2 className="title" style={{textAlign:"center"}}>{lang.addNote}</h2>
                <label className="add__label">
                    {lang.inputTitle}
                    <input type="text" className="add__input" placeholder={lang.inputTitle} value={title} onChange={titleChange} />
                </label>
                <label className="add__label">
                    {lang.inputContent}
                    <input type="text" className="add__input" placeholder={lang.inputContent} value={text} onChange={textChange} />
                </label>
                <div className="note__btn">
                    <Button classes={'btn-danger'} click={addTogle}>
                        {lang.cancelBtn}
                    </Button>
                    <Button classes={'btn-secondary'} type="submit" disable={disable}>
                        {noteEdit.edit ? lang.editBtn : lang.addBtn}
                    </Button>
                </div>
            </form>
        </Card>
    </div>
    <Button classes={'btn-primary add__btn'} click={addTogle}>
        <FaPencilAlt />
    </Button>
    </>
  )
}

export default AddNote