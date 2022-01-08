import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import './UserTemplate.css'
import { action } from '../store/redux';

const UserTemplate = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.dataslice.initial[0]);

    const onUpdate = (attr) => {
        let updateData = { ...data };
        if (attr === 'likes')
            updateData.likes = updateData.likes + 1;
        if (attr === 'shares')
            updateData.shares = updateData.shares + 1;
        axios.put("http://localhost:3200/api/update", updateData)
            .then(res => { dispatch(action.getData([updateData])) })
            .catch(err => console.log("error in updating likes", err))
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
                        <button className='btn' > Comment</button>
                        <button className='btn'> show comments </button>
                    </div>
                </div>
            
        </div>
    )
}

export default UserTemplate;