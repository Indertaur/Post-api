import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../actions/Index'

export default function Popup(props) {
    const item = useSelector((state) => state.postReducers.item); 
    const [inputTitle, setInputTitle] = useState(item.title);
    const [inputDesc, setInputDesc] = useState(item.desc);
    const dispatch = useDispatch();
    

    return (
        <div className='popup-box'>
            <div className='box'>
                <i className='fa fa-times close-popup' onClick={props.handleClose}></i>
                <h2>Edit Post</h2>
                <div className='form-box'>
                    <input placeholder='title' value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} /> 
                    <br /> 
                    <textarea  placeholder='desc' rows='4' value={inputDesc} onChange={(e) => setInputDesc(e.target.value)} ></textarea> 
                </div>
                <button className='lg-btn' onClick={() => dispatch(editPost(item.id, inputTitle, inputDesc), props.handleClose) } >Edit Post</button>  
            </div>
        </div>
    )
}
