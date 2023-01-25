import React, {createContext, useEffect, useState} from "react";
import { ru,uz } from "../language";
const Context = createContext()
const NoteProvider = ({children})=>{


    const getLocalStorage = ()=>{
        let notes = localStorage.getItem("notes")
        if (notes) {
            return notes = JSON.parse(localStorage.getItem("notes"))
        }else{
            return []
        }
    }

    const [iconLang,setIconLang] = useState(false)
    const [lang,setLang] = useState(ru)
    const [search,setSearch] = useState('')
    const [noteEdit,setNoteEdit] = useState({item:{},edit:false})
    const [notes,setNotes] = useState(getLocalStorage)
    const [active,setActive] = useState(false)
    const [title,setTitle] = useState("")
    const [text,setText] = useState("")



    useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(notes))
    },[notes])

    const changeLang = (lng)=>{
        lng === 'uz' ? setLang(uz) : setLang(ru)
        setIconLang(!iconLang)
    }
    function searchText(e) {
        setSearch(e.target.value)
    }
    function addNote(newNote) {
        setNotes([newNote,...notes])
    }
    function updateNote(id,update) { 
        setNotes(notes.map((item)=>(item.id === id ? update : item)))
        setNoteEdit({
            item:{},
            edit:false
        })
    }
    function editNote(note) {
        setNoteEdit({
            item:note,
            edit:true
        })
        setActive(!active)
        setTitle(note.title)
        setText(note.text)
    }
    function delNote(id) {
        setNotes(notes.filter(note => note.id !== id))
    }
    return(
        <Context.Provider value={{lang,changeLang,iconLang,search,setSearch,searchText,editNote,delNote,notes,addNote,updateNote,noteEdit,active,setActive,title,setTitle,text,setText}}>
            {children}
        </Context.Provider>
    )
}
export {NoteProvider,Context}