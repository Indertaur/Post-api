import React, { useState } from 'react'
import { addComment } from '../actions/Index'
import { useDispatch, useSelector } from 'react-redux';
import AddReply from './AddReply';

export default function AddComment(props) {
    const [inputComment, setInputComment] = useState('');
    const list = useSelector((state) => state.commentReducers.list); 
    const dispatch = useDispatch();

    return (
        <div>
            <h5 className='comment-heading'>Comments</h5>
            {
                list.filter(post_id => post_id.post_id === props.post_id).map((item) =>{
                    return (
                        <div className='comment-box' key={item.id}>
                            <h4><i className='fa fa-user user-icon'></i>{item.comment}</h4>
                            <AddReply comment_id={item.id} />
                        </div>
                    )
                })
            }
            <h5 className='comment-heading'>Add a Comment</h5>
            <textarea className='comment-input' value={inputComment} onChange={(e) => setInputComment(e.target.value)}></textarea>
            <div className='comment-btn-box'>
                <button  className='sm-btn' onClick={() => dispatch(addComment(props.post_id, inputComment), setInputComment("")) } >Submit</button>
            </div>
        </div>
    )
}
