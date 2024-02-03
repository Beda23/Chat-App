import React, { useState } from 'react';
import { sendMessage,isTyping } from 'react-chat-engine';
import { SendOutlined,PictureOutlined } from '@ant-design/icons';

const MessageForm =(props)=>{
    const [val,setval]=useState('');
    const{chatId, creds}= props;

    const handleChange =(event)=>{
        setval(event.target.value);
        isTyping(props,chatId)

    };
    const handleSubmit =(event)=>{
        event.preventDefault();
        const text= val.trim();
        if(text.length>0) sendMessage(creds,chatId,{text});
        setval('')

    };
    const handleUpload=(event)=>{
        sendMessage(creds,chatId,{files: event.target.files,text:''})
    }
    return(
        <>
            <form className='message-form' onSubmit={handleSubmit}>
                <input
                    className='message-input'
                    placeholder='Send a message..'
                    value={val}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                <label htmlFor='upload-button'>
                    <span className='image-button'>
                        <PictureOutlined className='picture-icon'/>
                    </span>
                </label>
                <input
                    type="file"
                    multiple={false}
                    id="upload-button"
                    style={{display:'none'}}
                    onChange={handleUpload}
                />
                <button type='submit' className='send-button'>
                    <SendOutlined className='send-icon'/>
                </button>
            </form>
        </>

    );
};
export default  MessageForm;