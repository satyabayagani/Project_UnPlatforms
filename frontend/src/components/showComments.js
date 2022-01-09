import { useSelector } from "react-redux";

const ShowComments= ()=>{
        const displaycomments=useSelector(state=>state.comment.initComments);
         console.log(displaycomments)
        let empty=false;
        if(displaycomments.length!==0)
            empty=true
    return(
        <div>
            <div>
            {!empty && <p>No Comments</p>}
            {empty && displaycomments.map((obj)=><p>{ obj.comments}</p>)}
            </div>
        </div>
    )
}

export default ShowComments;