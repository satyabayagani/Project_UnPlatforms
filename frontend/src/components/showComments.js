import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentAction } from "../store/redux";

const ShowComments= ()=>{
        const displaycomments=useSelector(state=>state.comment.initComments);
         console.log(displaycomments)
    return(
        <div>
            {displaycomments.map((obj)=><p>{ obj.comments}</p>)}
        </div>
    )
}

export default ShowComments;