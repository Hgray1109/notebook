import React from "react";

import { Link} from 'react-router-dom';

export default function JournalCard({journal, onDelete}) {
        
            console.log(journal)

            // function refreshPage() {
            //     window.location.reload(false);
            //   }
        
        function handleJournalDeletion(){
            onDelete(journal.id)
             // refreshPage()
        }
    
    return(
        <div>
            {journal ? 
            (<div>
                <Link to={`/journals/${journal.id}`} style={{ textDecoration: 'none', color: 'black' }} ><button>{journal.title}</button> </Link>
                <button onClick={handleJournalDeletion}>Delete Button</button>
            </div>): null}
            
        </div>
    )
}



 // const [inputVisible, setInputVisible] = useState(false)

// {/* {journal.id} */}
//         {/* {inputVisible && <textarea></textarea>}
        
        
        
        
//         <button onClick = {() => setInputVisible(!inputVisible)}> {journal.title}</button> */}