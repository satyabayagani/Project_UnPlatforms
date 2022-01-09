import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './UserTemplate.css'
import { action, commentAction } from '../store/redux';
import { useState } from 'react';
import userData from '../userData.json' 
// frontend\public\userData.json D:\Project_UnPlatforms\frontend\public\userData.json

const UserTemplate = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.dataslice.initial[0]);
    const [show, hide] = useState(false)
    const onUpdate = (attr) => {
        let updateData = { ...data };
        //sending update request for likes on clicking like button
        if (attr === 'likes') {
            updateData.likes = updateData.likes + 1;
            axios.put(`http://localhost:3200/api/updatelikes`, { likes: updateData.likes, id: updateData.id })
                .then(res => { dispatch(action.getData([updateData])) })
                .catch(err => console.log(`error in updating ${attr}`, err))
        }
        //sending update request for shares on clicking share button
        if (attr === 'shares') {
            updateData.shares = updateData.shares + 1;
            axios.put(`http://localhost:3200/api/updateshares`, { shares: updateData.shares, id: updateData.id })
                .then(res => { dispatch(action.getData([updateData])) })
                .catch(err => console.log(`error in updating ${attr}`, err))
        }
    }

    const showCommentBox = () => { dispatch(commentAction.showOrHideBox()) }
    const showComments = () => {
        hide(!show)
        dispatch(commentAction.showOrHideComments())
    }
    return (
        <div>
            <div className="mx-auto post mt-4">
                <div className="row g-0 userInfo">
                    <div className="col-md-2">
                        <img className='user-img d-block mx-auto shadow' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxItRnDdjTdtG6aL0I93dDr22Ivka5vHdlg&usqp=CAU" alt='Photo Unavailabe'/>
                    </div>
                    <div className="col-md-10 text-muted">
                        <p id='userName'>{userData[0].username}</p>
                        <p > {userData[0].personalInfo} <br /> {userData[0].Added}</p>
                    </div>
                </div>
                <p className='text-muted'>{userData[0].study}</p>
                
                <p>{userData[0].studyInfo}</p>
                <p className='text-muted'>{data.views} Views | {data.likes}  Likes | {data.comments} Comments | {data.shares} Shares</p>
                <div className='d-flex flex-wrap'>
                    <button className='like' onClick={() => onUpdate('likes')}><i className="far fa-thumbs-up"></i> Like</button>
                    <button className='comment' onClick={showCommentBox}><i className="far fa-comment-alt"></i> Add Comment</button>
                    <button className='showcomment' onClick={showComments}> {!show && <p className='mb-0'><i className="far fa-eye"></i> Show comments</p>}{show && <p className='mb-0'><i className="far fa-eye-slash"></i> Hide comments</p>}</button>
                    <button className='share' onClick={() => onUpdate('shares')}><i className="fas fa-share"></i> Share</button>
                </div>
            </div>

        </div>
    )
}

export default UserTemplate;