const FromWithPic = (props) => {

    const {img, text, date} = props

    return (
        <>
            <div className="message message-from">
                <p className="message-date">{date}</p>
                <div className="message-text message-from-text-with-picture">
                    <img src={img} alt="" />
                    <p className="message-text">{text}</p>
                </div>
            </div>
        </>
    )
    
}


export default FromWithPic