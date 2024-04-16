import './modal.css'


const Modal = ({ onClose, setUrl, url, handleAddMessage, setComment }) => {

    const isValidHttpUrl = (string) => {
        try {
            return new URL(string)
        } catch (e) {
            return false
        }
    }

    const handleButtonClick = () => {
        if (isValidHttpUrl(url)) {
            handleAddMessage()
            onClose()
        }
        onClose()
    }
    

    return (
        <>
            <div className="modal">
                <div className="modal-window">
                    <h3 className="modal-title">Отправить картинку</h3>
                    <div action="" className="modal-form">
                        <div className="modal-form-input">
                            <label className="input-title">    
                                <input type="text" placeholder="URL" onChange={(e) => {setUrl(e.target.value)}}/>
                                <span>URL</span>
                            </label>
                            <label className="input-content">    
                                <input type="text" placeholder="Комментарий" onChange={(e) => {setComment(e.target.value)}}/>
                                <span>Комментарий</span>
                            </label>
                        </div>
                        <div className="modal-form-btns">
                            <button className="modal-form-btn" onClick={onClose}>Отмена</button>
                            <button className="modal-form-btn" onClick={handleButtonClick}>Добавить</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Modal