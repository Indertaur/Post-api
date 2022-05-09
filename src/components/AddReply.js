import React, { useState } from 'react'
import { addReply } from '../actions/Index'
import { useDispatch, useSelector } from 'react-redux';

export default function AddReply(props) {
    const [inputReply, setInputReply] = useState('');
    const list = useSelector((state) => state.replyReducers.list); 
    const dispatch = useDispatch();

    return (
        <div>
            {
                list.filter(comment_id => comment_id.comment_id === props.comment_id).map((item) =>{
                    return (
                        <div className='reply-box' key={item.id}>
                            <h4><i className='fa fa-user user-icon'></i>{item.reply}</h4>
                        </div>
                    )
                })
            }
            <div className='add-reply-box'>
                <h5 className='comment-heading'>Add a Reply</h5>
                <textarea className='comment-input' value={inputReply} onChange={(e) => setInputReply(e.target.value)}></textarea>
                <div className='comment-btn-box'>
                    <button className='sm-btn' onClick={() => dispatch(addReply(props.comment_id, inputReply), setInputReply("")) } >Submit</button>
                </div>
            </div>
        </div>
    )
}
