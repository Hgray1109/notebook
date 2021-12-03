import React,{ useState, useEffect} from "react";
import JournalCard from './cards-folder/JournalCard'


export default function Journal(){
    const [journals, setJournals] = useState([])

    useEffect(()=>{
        fetch('/journals')
        .then(resp => resp.json())
        .then(setJournals)
    },[])

    const fuckthisshit = journals.map( journal => 
<JournalCard 
        key={journal.id}
        journal={journal}
        />
        )
    console.log(journals)

    return(
        <div className='journal-container'>
            <h1>this is the journal page</h1>

        </div>
    )
}





// I want the user to be able to:
// Search *
// They get to see their writing ()
// Index of all Journal titles
// CLick on Journal Title - link to individual page (other Titles/journals are gone)
// Back Button To index Delete Button on individual Page