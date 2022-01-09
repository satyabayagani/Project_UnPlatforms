import { useSelector } from "react-redux";
import './showComents.css'

const ShowComments= ()=>{
        const displaycomments=useSelector(state=>state.comment.initComments);
        //empty named variable to toggle the show and hide behaviour for comments
        let empty=false;
        if(displaycomments.length!==0)
            empty=true
    return(
        <div className="cmt mx-auto">
            <div className="mt-4 shadow p-3">
            {!empty && <p>No Comments</p>}
            {empty && <p>Comments: </p>}
            {empty && displaycomments.map((obj,index)=>
            <div key={index} >
            <p className="comm">{ obj.comments}</p> 
            {/* <p className="d-block ms-auto">Added at: {new Date(obj.createdAt).toLocaleString('en-IN')}</p> */}
            <hr />
            </div>
        )}
            </div>
        </div>
        
       
    )
}

export default ShowComments;