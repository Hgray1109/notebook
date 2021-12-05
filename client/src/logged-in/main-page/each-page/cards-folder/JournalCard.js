import React from "react";

import { Link} from 'react-router-dom';

export default function JournalCard({journal}) {
        
            console.log(journal)
    
    return(
        <div>
            {journal ? 
            (<div>
                <Link to={`/journals/${journal.id}`} style={{ textDecoration: 'none', color: 'black' }} ><button>{journal.title}</button> </Link>

            </div>): null}
        </div>
    )
}



 // const [inputVisible, setInputVisible] = useState(false)

// {/* {journal.id} */}
//         {/* {inputVisible && <textarea></textarea>}
        
        
        
        
//         <button onClick = {() => setInputVisible(!inputVisible)}> {journal.title}</button> */}