const ToWithPic = (props) => {

    const {img, text, date} = props
    
    return (
        <>
            <div className="message">
                <div className="message-text message-to-text-with-picture">
                    <img src={img} alt="" />
                    <p className="message-text">{text}</p>
                </div>
                <p className="message-date">{date}</p>
            </div>
        </>
    )
    
}


export default ToWithPic