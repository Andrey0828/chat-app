import './assets/styles/app.css'
import bg from './assets/images/bg.png'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import aleksander from './assets/images/aleksander.png'
import evgen from './assets/images/evgen.png'
import proweb from './assets/images/proweb.png'
import { useState, useEffect } from "react"


const App = () => {

    const [chat, setChat] = useState(() => {
        const savedChat = localStorage.getItem('chat')
        return savedChat ? JSON.parse(savedChat) : {
                'evgen': [], 
                'aleksander': []
            }
    })

    // const [chat, setChat] = useState({
    //     'evgen': [
    //         // ['f', 'n', "Привет. Как дела? Где ты изучаешь программирование?", "12:21"],
    //         // ['t', 'n', "Привет. Нормально. Как у тебя дела? Я учусь в учебном центре PROWEB", "12:41"],
    //         // ['f', 'y', proweb, "Это PROWEB?", "13:00"]
    //     ], 
    //     'aleksander': [
    //         // ['t', 'n', "Привет. Как дела? Где ты изучаешь программирование?", "12:21"],
    //         // ['f', 'n', "Привет. Нормально. Как у тебя дела? Я учусь в учебном центре PROWEB", "12:41"],
    //         // ['t', 'y', proweb, "Это PROWEB?", "13:00"]
    //     ]
    // })

    const [url, setUrl] = useState('')
    const [comment, setComment] = useState('')
    const [titleController_user1, setTitle_user1] = useState('')
    const [titleController_user2, setTitle_user2] = useState('')

    const clearModal = () => {
        setUrl('')
        setComment('')
    }
    
    const addMessage = (from) => {
        const currentDate = new Date()
        const hours = currentDate.getHours()
        const minutes = currentDate.getMinutes()
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`


        if (from == 'phone1') {
            if (url != '') {
                setChat(prevChat => ({
                    ...prevChat,
                    evgen: [...prevChat['evgen'], ['t', 'y', url, comment, formattedTime]],
                    aleksander: [...prevChat['aleksander'], ['f', 'y', url, comment, formattedTime]]
                }))
                clearModal()
            } else {
                setChat(prevChat => ({
                    ...prevChat,
                    evgen: [...prevChat['evgen'], ['t', 'n', titleController_user1, formattedTime]],
                    aleksander: [...prevChat['aleksander'], ['f', 'n', titleController_user1, formattedTime]]
                }))
            }
        } else {
            if (url != '') {
                setChat(prevChat => ({
                    ...prevChat,
                    evgen: [...prevChat['evgen'], ['f', 'y', url, comment, formattedTime]],
                    aleksander: [...prevChat['aleksander'], ['t', 'y', url, comment, formattedTime]]
                }))
                clearModal()
            } else {
                setChat(prevChat => ({
                    ...prevChat,
                    evgen: [...prevChat['evgen'], ['f', 'n', titleController_user2, formattedTime]],
                    aleksander: [...prevChat['aleksander'], ['t', 'n', titleController_user2, formattedTime]]
                }))
            }
        }
    }

    useEffect(() => {
        localStorage.setItem('chat', JSON.stringify(chat))
    }, [chat])

    return (
        <>
            <div className="phones">
                <div className="phone1" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                    <Header icon={aleksander} name="Александр" status="Онлайн"/>
                    <Main messages={chat['evgen']}/>
                    <Footer setTitle={setTitle_user1} titleController={titleController_user1} addMessage={addMessage} setUrl={setUrl} url={url} setComment={setComment} source='phone1'/>
                </div>
                <div className="phone2" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                    <Header icon={evgen} name="Евгений" status="Онлайн"/>
                    <Main messages={chat['aleksander']}/>
                    <Footer setTitle={setTitle_user2} titleController={titleController_user2} addMessage={addMessage} setUrl={setUrl} url={url} setComment={setComment} source='phone2'/>
                </div>
            </div>
        </>
    )

}


export default App