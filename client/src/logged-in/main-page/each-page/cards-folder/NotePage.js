import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from 'react-router-dom'

export default function NotePage({ journal }){
    const [journalEntry, setJournalEntry] = useState('')
    const [newJournal, setNewJournal] = useState({})
    const [refresh, setRefresh] = useState(false)
    const [notes, setNotes] = useState("")
    const { id } = useParams()
    const newId = parseInt(id)
    const navigate = useNavigate();

    function refreshPage() {
        window.location.reload(false);
      }

    useEffect(() => {
        fetch(`/journals/${newId}`)
            .then(resp => resp.json())
            .then(data=> {
                setNewJournal(data)
                console.log(data)
            })
    },[refresh])


    function handleFormSubmit(e) {
        e.preventDefault()

        fetch(`/journals/${newId}/update_journal`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({journal_body: journalEntry})
        })
            .then(resp => resp.json())
            .then(data => {
                
                setJournalEntry('')
                refreshPage()
                setRefresh(!refresh)
            })
    }


    function handleNoteSubmit(e) {
        e.preventDefault()

        fetch(`/journals/${newId}/journal_note`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({notes: notes})
        })
            .then(resp => resp.json())
            .then(data => {
                
            //     setJournalEntry('')
                refreshPage()
            //     setRefresh(!refresh)
            })
    }


    function handleEdit(e) {
        e.preventDefault()

        fetch(`/journals/${newId}/update_journal`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({journal_body: null})
        })
            .then(resp => resp.json())
            .then(data => {
                
                
                refreshPage()
                setRefresh(!refresh)
            })
    }


    function handleLastPage() {
        navigate("/journals")
    }

    return(
        <div>
            <h1>notepage</h1>
            {newJournal.journal_body ? 
            <span>{newJournal.journal_body}</span> : <form onSubmit={handleFormSubmit}>
            <label>Journal entry</label>
            <input type='text' value={journalEntry} onChange={(e) => setJournalEntry(e.target.value)}></input>
            <button type='submit'>submit your journal</button>
            </form>  }
            <form onSubmit={handleNoteSubmit}>
                <label> Discovery </label>
                <input type = 'text' value={notes} onChange={(e) => setNotes(e.target.value)}></input>
                <p>{newJournal.notes}</p> 
                <button type='submit'>Create Discovery Note</button>
            </form>
            <button onClick={handleEdit}>this is the edit button</button>
            <button onClick={handleLastPage}>last page</button>
            
        </div>
    )
}