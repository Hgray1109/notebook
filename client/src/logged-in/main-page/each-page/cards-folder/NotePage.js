import React, {useState} from "react";
import { useParams } from 'react-router-dom'

export default function NotePage({ journal }){
    const [journalEntry, setJournalEntry] = useState('')
    const [newJournal, setNewJournal] = useState({})
    const { id } = useParams()
    const newId = parseInt(id)

    function handleFormSubmit(e) {
        e.preventDefault()

        fetch(`/journals/${newId}/update_journal`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({journal_body: journalEntry})
        })
            .then(resp => resp.json())
            .then(data => {
                setNewJournal(data)
                setJournalEntry('')
                
            })
            // setNewJournal(journals.find( journal => journal.id === newId))

    }

    console.log(newJournal)

    // const rightJournal = journals.find( journal => journal.id === newId)

    // console.log(rightJournal.journal_body)


    return(
        <div>
            <h1>notepage</h1>
            {newJournal ? <span>{newJournal.journal_body}</span> : <span>something else</span>}
            <form onSubmit={handleFormSubmit}>
                <label>Journal entry</label>
                <input type='text' value={journalEntry} onChange={(e) => setJournalEntry(e.target.value)}></input>
                <button type='submit'>submit your journal</button>
            </form> 

        </div>
    )
}