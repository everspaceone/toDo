import React, { useContext, useState } from 'react';
import {FaSearch, FaArrowLeft} from "react-icons/fa";
import {CgCloseO} from "react-icons/cg";
import uzlang from "../images/Flag_of_Uzbekistan.svg";
import rulang from "../images/Flag_of_Russia.svg";
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Context } from '../context/NoteContext';
function Nav() {
    const {lang,iconLang,changeLang,search,setSearch,searchText} = useContext(Context)
    const [active,setActive] = useState(false)
    function backHome() {
        setActive(!active)
        setSearch('')
    }
  return (
    <>
    <Card classes='header Nav'>
        <div className="head-languages">
            <button onClick={()=>changeLang('uz')} className={`head-lang ${iconLang ? "active" : ''}`}>
                <span>UZ</span>
                <img src={uzlang} alt="uzbek" />
            </button>
            <button onClick={()=>changeLang('ru')} className={`head-lang ${!iconLang ? "active" : ''}`}>
                <span>RU</span>
                <img src={rulang} alt="russian" />
            </button>
        </div>
        <div className="container">
            <h1 className="title text-center">{lang.navTitle}</h1>
        </div>
        <Button click={()=>setActive(!active)}>
            <FaSearch />
        </Button>
    </Card>
    <Card classes={`Nav search ${active ? 'active' : ''}`}>
        <Button click={backHome}><FaArrowLeft /></Button>
        <div className="container">
            <input type="text" className="input" placeholder={lang.search} value={search} onChange={(e)=>searchText(e)} />
        </div>
        <Button click={()=>setSearch('')}><CgCloseO /></Button>
    </Card>
    </>
  )
}

export default Nav