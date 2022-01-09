import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './UserTemplate.css'
import { action, commentAction } from '../store/redux';
import { useState } from 'react';

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
            <div className="mx-auto shadow post mt-4">
                <div className="row g-0 userInfo">
                    <div className="col-md-2">
                        <img className='user-img d-block mx-auto' src="https://mauigoddessproject.files.wordpress.com/2016/12/sienna-99-of-140.jpg?w=667" />
                    </div>
                    <div className="col-md-10 text-muted">
                        <p id='userName'>Beauty</p>
                        <p>Alum | Finance,MBA | 2016 | Business Manager at Capgemini <br />1d | San Francisco</p>
                    </div>
                </div>
                <p className='text-muted'>The concept of Research : A cross-cultural study</p>
                <p>Oxford Nanopore has pulled in $100m from investors in the Asia-Pacific region, as it completes a funding round that values the fast growing UK biotechnology company at$1.5bn.</p>
                <p className='text-muted'>{data.views} Views | {data.likes}  Likes | {data.comments} Comments | {data.shares} Shares</p>
                <div className='btn-group'>
                    <button className='btn' onClick={() => onUpdate('likes')}> Like</button>
                    <button className='btn' onClick={() => onUpdate('shares')}> Share</button>
                    <button className='btn' onClick={showCommentBox}>Add Comment</button>
                    <button className='btn' onClick={showComments}> {!show && <p className='mb-0'>Show comments</p>}{show && <p className='mb-0'>Hide comments</p>}</button>
                </div>
            </div>

        </div>
    )
}

export default UserTemplate;