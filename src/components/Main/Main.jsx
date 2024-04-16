import To from './Messages/To'
import From from './Messages/From'
import './main.css'
import ToWithPic from './Messages/ToWithPic'
import FromWithPic from './Messages/FromWithPic'
import { useRef, useEffect } from 'react'


const Main = (props) => {

    const mainRef = useRef(null)

    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollTop = mainRef.current.scrollHeight
        }
    }, [props.messages])

    return (
        <main className="main" ref={mainRef}>
            {props.messages?.map((message, id) => (
                message[0] == 'f' ? (
                    message[1] == 'n' ? (
                        <To key={id} text={message[2]} date={message[3]}/>
                    ) : (
                        <ToWithPic key={id} img={message[2]} text={message[3]} date={message[4]}/>
                    )
                ) : (
                    message[1] == 'n' ? (
                        <From key={id} text={message[2]} date={message[3]}/>
                    ) : (
                        <FromWithPic key={id} img={message[2]} text={message[3]} date={message[4]}/>
                    )
                )
            ))}
        </main>
    )
    
}


export default Main