import './App.css';
import UserTemplate from './components/UserTemplate';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { action } from './store/redux';
import axios from 'axios';
import PostComments from './components/postComments';
import ShowComments from './components/showComments';
import { commentAction } from './store/redux';

function App() {
  const dispatch = useDispatch();
  const showbox = useSelector(state => state.comment.showbox)
  const showcomments = useSelector(state => state.comment.showcomments)

  useEffect(() => {
    axios.get("http://localhost:3200/api/all")
      .then(res => {
        if (res.data.length === 0) {
          axios.post("http://localhost:3200/api/create")
            .then(resp => {
              console.log(resp.data)
              dispatch(action.getData([resp.data]))

              axios.put("http://localhost:3200/api/updateView", { views: resp.data.views + 1, id: resp.data.id })
                .then(res => console.log("Views updated successfully"))
                .catch(err => console.log("error in updating views", err))
            }
            )
            .catch(err => console.log("error in initialising data", err))
        }
        else {
          dispatch(action.getData(res.data))
          axios.put("http://localhost:3200/api/update", { views: res.data[0].views + 1, id: res.data[0].id })
            .then(res => console.log("Views updated successfully"))
            .catch(err => console.log("error in updating views", err))
        }


        axios.get("http://localhost:3200/api/getcomments")
          .then(res => {
            dispatch(commentAction.addComment(res.data.reverse()))
          })
          .catch(err => console.log("error in retrieving comments", err))

      })
      .catch(err => console.log("error in loading data", err))


  }, [dispatch])


  return (
    <div>
      <div className="container">
        <UserTemplate></UserTemplate>
        {showbox && <PostComments></PostComments>}
        {showcomments && <ShowComments></ShowComments>}
      </div>
    </div>
  );
}

export default App;
