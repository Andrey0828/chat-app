const To = (props) => {

    const {text, date} = props

    return (
        <>
            <div className="message">
                <p className="message-text message-to-text">{text}</p>
                <p className="message-date">{date}</p>
            </div>
        </>
    )
    
}


export default To