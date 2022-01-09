import './postComments.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { action, commentAction } from '../store/redux'
const PostComments = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.dataslice.initial)
    function addComment(event) {
        event.preventDefault()
        let commentcount = { ...count[0] }
        commentcount.comments = commentcount.comments + 1

        //Posting a comment to database
        axios.post("http://localhost:3200/api/addComments", { comments: event.target.txt.value })
            .then(res => dispatch(commentAction.addComment([{ comments: event.target.txt.value }])))
            .catch(err => console.log(err))
        console.log(commentcount)

        //Updating count of comments in database
        axios.put("http://localhost:3200/api/updateComment", { id: commentcount.id, comments: commentcount.comments })
            .then(res => dispatch(action.getData([commentcount])))
            .catch(err => console.log(err))
    }

    return (
        <div className="mt-4 comment mx-auto">
            <form onSubmit={addComment}>
                <textarea name="txt" className="form-control w-75 d-block mx-auto" required></textarea>
                <button type='submit' className='btn btn-primary mt-2 d-block mx-auto'>Post <i className="far fa-paper-plane"></i></button>
            </form>
        </div>
    )
}

export default PostComments;