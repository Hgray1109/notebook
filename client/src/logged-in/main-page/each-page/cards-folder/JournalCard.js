import React, {useState} from "react";

import { Link} from 'react-router-dom';

export default function JournalCard({journal}) {
        
            console.log(journal)
    
    return(
        <nav>
            {journal ? <Link to={`/journals/${journal.id}`} style={{ textDecoration: 'none', color: 'black' }} ><button>Create Your Journal</button> </Link> : null}
        </nav>
    )
}



 // const [inputVisible, setInputVisible] = useState(false)

// {/* {journal.id} */}
//         {/* {inputVisible && <textarea></textarea>}
        
        
        
        
//         <button onClick = {() => setInputVisible(!inputVisible)}> {journal.title}</button> */}