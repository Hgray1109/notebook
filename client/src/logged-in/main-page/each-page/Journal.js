import React, { useState, useEffect} from "react";
import JournalCard from './cards-folder/JournalCard'
import NotePage from "./cards-folder/NotePage";
import { Link} from 'react-router-dom';

export default function Journal({ journals, onJournalCardDelete }){
    debugger
    

    const eachJournal = journals ? (journals.map( journal => (
<JournalCard 
        key={journal.id}
        journal={journal}
        onDelete = {onJournalCardDelete}
        />

        )
        )) : null
    

    return(
        <div className='journal-container'>
            <h1>this is the journal page</h1>
            {eachJournal}
            <Link to={`/journals/addJournal`} style={{ textDecoration: 'none', color: 'black' }} ><button>Add Journal</button> </Link>
        </div>
    )
}





// I want the user to be able to:
// Search *
// They get to see their writing ()
// Index of all Journal titles
// CLick on Journal Title - link to individual page (other Titles/journals are gone)
// Back Button To index Delete Button on individual Page