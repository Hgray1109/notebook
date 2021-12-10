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
            (<div className= "titlebttn">
                <Link to={`/journals/${journal.id}`} style={{ textDecoration: 'none', color: 'black' }} ><button>{journal.title}</button> </Link>
                <button style={{ textDecoration: 'underline red', color: 'red' }} className= "deletetitle" onClick={handleJournalDeletion}>Delete Entry</button>
            </div>): null}
            
        </div>
    )
}



 // const [inputVisible, setInputVisible] = useState(false)

// {/* {journal.id} */}
//         {/* {inputVisible && <textarea></textarea>}
        
        
        
        
//         <button onClick = {() => setInputVisible(!inputVisible)}> {journal.title}</button> */}