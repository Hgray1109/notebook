import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";


export default function AddJournalPage({ user, refresh}){
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate();


    // function refreshPage() {
    //     window.location.reload(false);
    //   }


    function handleJournalPost(e){
        e.preventDefault()
        fetch(`/journals`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id: user.id,
                title,
                journal_body: body
            })
        })
                .then(resp=>resp.json())
                .then(data=>{
                    console.log(data)
                    setTitle('')
                    setBody('')
                    refresh()
                    navigate('/journals')
                    
                })

    }


    return(
        <div className= "submissionJournal">
            <form onSubmit={handleJournalPost}>
                <label>Journal Title</label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Journal Body</label>
                <input type='text' value={body} onChange={(e) => setBody(e.target.value)}></input>
                <div>
                <button type='submit' style={{ textDecoration: 'none', color: 'BLACK' }}>Add Journal</button>
                </div>
            </form>
        </div>
    )
}