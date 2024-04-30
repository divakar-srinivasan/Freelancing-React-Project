import React from 'react'
import './message.css'
import { IoSearch ,IoAddCircleOutline,IoCall,IoSendSharp,IoVideocamSharp,IoMenuSharp} from "react-icons/io5";
import img from '../Assest/img3.png';
import { GrEmoji } from "react-icons/gr";
import { MdOutlineAttachFile } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";

const Message = () => {
  return (

    <div className='container'>
      <div className='left-container'>
        <div className='left-top'>
          <h1>Chats</h1>
          <div className='lt-search'>
          <input type='text' placeholder='Search...' className='linput'/>
          <div className='icon'><IoSearch /></div>
          </div>
        </div>
        <div className='left-content'>
          <div className='left-chat'>
              <img src={img} alt='loading' className='img'></img>
              <div className='user-name'>Divakar</div>
          </div>
          <div className='left-chat'>
              <img src={img} alt='loading' className='img'></img>
              <div className='user-name'>Divakar</div>
          </div>
          <div className='left-chat'>
              <img src={img} alt='loading' className='img'></img>
              <div className='user-name'>Divakar</div>
          </div>
          <div className='left-chat'>
              <img src={img} alt='loading' className='img'></img>
              <div className='user-name'>Divakar</div>
          </div>
          <div className='left-chat'>
              <img src={img} alt='loading' className='img'></img>
              <div className='user-name'>Divakar</div>
          </div>
          <div className='left-chat'>
              <img src={img} alt='loading' className='img'></img>
              <div className='user-name'>Divakar</div>
          </div>
          <div className='left-chat'>
              <img src={img} alt='loading' className='img'></img>
              <div className='user-name'>Divakar</div>
          </div>
          <div className='left-chat'>
              <img src={img} alt='loading' className='img'></img>
              <div className='user-name'>Divakar</div>
          </div>
          <div className='left-chat'>
              <img src={img} alt='loading' className='img'></img>
              <div className='user-name'>Divakar</div>
          </div>

        </div>

        <div className='add-icon'>
        <IoAddCircleOutline />
        </div>
      </div>
      <div className='right-container'>
          <div className='right-top'>
            <div className='top'>
            <img src={img} alt='loading' className='img'></img>
            <div className='right-user-name'>Divakar</div>
            </div>
            <div className='top'>
            <div className='right-icon'><IoCall /></div>
            <div className='right-icon'><IoVideocamSharp /></div>
            <div className='right-icon'><IoMenuSharp /></div>
            </div>
          </div>
          <div className='chatbox'>
            <div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div><div className='right-user-name'>hi</div>
          </div>
          <div className='right-bottom'>
            <div className='bottom'>
            <div className='right-icon'><GrEmoji /></div>
            <input className='bottom-search' type='text' placeholder='Send Message....'></input>
            <div className='right-icon'><MdOutlineAttachFile /></div>
            <div className='right-icon'><FaMicrophone /></div>
            <div className='right-icon'><IoSendSharp /></div>
            </div>
          </div>


      </div>
    </div>
  )
}

export default Message