import React, {useState} from "react";


export default function JournalCard({journal}) {
    const [inputVisible, setInputVisible] = useState(false)

    return(
        <div>{journal.id}
        {inputVisible && <textarea></textarea>}
        
        
        
        
        <button onClick = {() => setInputVisible(!inputVisible)}> Display Entry </button>
        </div>
    )
}