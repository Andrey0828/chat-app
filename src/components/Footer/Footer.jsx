import './footer.css'
import camera from '../../assets/images/camera.svg'
import btn from '../../assets/images/btn.svg'
import Modal from '../Modal/Modal';
import { useState } from "react";


const Footer = (props) => {

    const { setTitle, titleController, addMessage, setUrl, url, setComment, source } = props
    const [isModalOpen, setIsModalOpen] = useState(false)

    const write_message = (message) => {
        setTitle(message)
    }

    const handleAddMessage = () => {
        addMessage(source)
        setTitle('')
    }

    return (
        <>
            <footer className="footer">
                <input type="text" placeholder='Написать сообщение...' required value={titleController} onChange={(e) => {write_message(e.target.value)}}/>
                <button className='btn' onClick={titleController ? handleAddMessage : () => setIsModalOpen(true)}>
                    <img src={titleController ? btn : camera} alt=""/>
                </button>
                {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} setUrl={setUrl} url={url} handleAddMessage={handleAddMessage} setComment={setComment} source={source}/>}
            </footer>
        </>
    )

}


export default Footer