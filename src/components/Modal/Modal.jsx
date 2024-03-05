import './modal.css'


const Modal = ({ onClose }) => {
    return (
        <>
            <div className="modal">
                <div className="modal-window">
                    <h3 className="modal-title">Отправить картинку</h3>
                    <form action="" className="modal-form">
                        <div className="modal-form-input">
                            <label className="input-title">    
                                <input type="text" placeholder="URL"/>
                                <span>URL</span>
                            </label>
                            <label className="input-content">    
                                <input type="text" placeholder="Комментарий"/>
                                <span>Комментарий</span>
                            </label>
                        </div>
                        <div className="modal-form-btns">
                            <button className="modal-form-btn" onClick={onClose}>Отмена</button>
                            <button className="modal-form-btn">Добавить</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Modal