import React, { useState } from 'react'
import { addPost, selectPost,  deletePost } from '../actions/Index'
import { useDispatch, useSelector } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import Popup from './Popup';
import AddComment from './AddComment';

export default function AddPost() {
    
    const [inputTitle, setInputTitle] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [itemId, setItemId] = useState('');
    const list = useSelector((state) => state.postReducers.list); 
    const dispatch = useDispatch();

    const togglePopup = (id) => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className='form-box'>
                <h1>Add New Post</h1>
                <input placeholder='title' value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} /> 
                <br /> 
                <textarea  placeholder='desc' rows='6' value={inputDesc} onChange={(e) => setInputDesc(e.target.value)} ></textarea> 
                <div>
                    <button className='lg-btn' onClick={ () => dispatch(addPost(inputTitle, inputDesc), setInputTitle(""), setInputDesc("")) }>Add Post</button>  
                </div>
            </div>
            <hr className='hr-lg' />
            <div className='showList'>
                {
                    list.map((item) =>{
                        return (
                            <div className='item-box' key={item.id}>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <i onClick={() => (
                                    togglePopup(item.id),
                                    setItemId(item.id),
                                    dispatch(selectPost(item.id))
                                )} className='fa fa-edit fa-lg edit-icon icon'></i>
                                <i onClick={() => dispatch(deletePost(item.id))} className='fa fa-trash fa-lg delete-icon icon'></i>
                                <AddComment post_id={item.id} />
                            </div>
                        )
                    })
                }
            </div>
            {isOpen && <Popup id={itemId} handleClose={togglePopup} />}
        </>
    )
}
