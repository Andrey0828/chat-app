const From = (props) => {

    const {text, date} = props

    return (
        <>
            <div className="message message-from">
                <p className="message-date">{date}</p>
                <p className="message-text message-from-text">{text}</p>
            </div>
        </>
    )

}


export default From