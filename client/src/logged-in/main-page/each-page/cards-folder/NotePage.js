import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from 'react-router-dom'

export default function NotePage({ journal, noterefresh }){
    const [journalEntry, setJournalEntry] = useState('')
    const [newJournal, setNewJournal] = useState({})
    const [refresh, setRefresh] = useState(false)
    const [notes, setNotes] = useState("")
    const { id } = useParams()
    const newId = parseInt(id)
    const navigate = useNavigate();

    // function refreshPage() {
    //     window.location.reload(false);
    //   }

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
                // refreshPage()
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
            noterefresh()
            navigate('/journals')
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
                
                
                
                setJournalEntry('')
                setRefresh(!refresh)
               
            })
    }


    function handleLastPage() {
        navigate("/journals")
    }

    return(
        <div>
            <h1>NotePage</h1>
            <div>
            {newJournal.journal_body ? 
            <span>{newJournal.journal_body}</span> : <form className = "noteEntry" onSubmit={handleFormSubmit}>
            <label>Journal entry</label>
            <textarea  className="textpadding" type='text' value={journalEntry} onChange={(e) => setJournalEntry(e.target.value)}></textarea>
            <div className= "button"> <button type='submit'>Submit Your Journal</button> </div>
            </form>  }
            <form className="discoverypadding" onSubmit={handleNoteSubmit}>
                <label className = "discoveryMargin"> Discovery </label>
                <textarea className="dispadding" rows="4" cols="100" type = 'text-area' value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                <p>{newJournal.notes}</p> 
                <button type='submit'>Create Discovery Note</button>
            </form>
            </div>
            <button onClick={handleEdit}>Edit Entry</button>
            <button onClick={handleLastPage}>Last Page</button>
            
        </div>
    )
}