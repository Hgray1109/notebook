import React,{useState} from 'react'


export default function AddJournalPage({ user}){
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    function handleJournalPost(e){
        e.preventDefault()
        fetch(`/journals`,{
            method: 'Post',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id: user.id,
                title,
                journal_body: body
            })
        })
    }


    return(
        <div>
            <form onSubmit={handleJournalPost}>
                <label>Journal Title</label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Journal Body</label>
                <input type='text' value={body} onChange={(e) => setBody(e.target.value)}></input>
                <button type='submit'></button>
            </form>
        </div>
    )
}