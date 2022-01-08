import './showComments.css'
import axios from 'axios'
const ShowComments=()=>{

   function addComment(event){
       event.preventDefault()
       axios.post("http://localhost:3200/api/addComments",{comments:event.target.txt.value})
       .then(res=>console.log(res))
       .catch(err=>console.log(err))
       
   }

    return(
        <div className="mt-4 comment mx-auto">
            <form onSubmit={addComment}>
            <textarea name="txt" className="form-control w-75 d-block mx-auto"></textarea>
            <button type='submit' className='btn btn-warning mt-2 d-block mx-auto'>Add Comment</button>
            </form>
            
        </div>
    )
}

export default ShowComments;