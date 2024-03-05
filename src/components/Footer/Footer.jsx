import './footer.css'
import camera from '../../assets/images/camera.svg'
import btn from '../../assets/images/btn.svg'
import Modal from '../Modal/Modal';
import { useState } from "react";


const Footer = () => {

    const [inputValue, setInputValue] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <footer className="footer">
                <input type="text" placeholder='Написать сообщение...' required onChange={(e) => setInputValue(e.target.value)}/>
                <img src={inputValue ? btn : camera} alt="" onClick={() => {!inputValue ? setIsModalOpen(true) : null}}/>
                {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
            </footer>
        </>
    )

}


export default Footer