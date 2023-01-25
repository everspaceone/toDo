import React from 'react';
import AddNote from './components/AddNote';
import Nav from './components/Nav'
import Notes from './components/Notes';
import { NoteProvider } from './context/NoteContext';

function App() {
  return (
    <NoteProvider>
    <Nav />
    <Notes />
    <AddNote />
    </NoteProvider>
  );
}

export default App;
