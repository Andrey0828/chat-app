import './assets/styles/app.css'
import bg from './assets/images/bg.png'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import aleksander from './assets/images/aleksander.png'
import evgen from './assets/images/evgen.png'
import proweb from './assets/images/proweb.png'


const App = () => {

    const chat = {
        'evgen': [
            ['f', 'n', "Привет. Как дела? Где ты изучаешь программирование?", "12:21"],
            ['t', 'n', "Привет. Нормально. Как у тебя дела? Я учусь в учебном центре PROWEB", "12:41"],
            ['f', 'y', proweb, "Это PROWEB?", "13:00"]
        ], 
        'aleksander': [
            ['t', 'n', "Привет. Как дела? Где ты изучаешь программирование?", "12:21"],
            ['f', 'n', "Привет. Нормально. Как у тебя дела? Я учусь в учебном центре PROWEB", "12:41"],
            ['t', 'y', proweb, "Это PROWEB?", "13:00"]
        ]
    }

    return (
        <>
            <div className="phones">
                <div className="phone" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                    <Header icon={aleksander} name="Александр" status="Онлайн"/>
                    <Main messages={chat['evgen']}/>
                    <Footer/>
                </div>
                <div className="phone" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                    <Header icon={evgen} name="Евгений" status="Онлайн"/>
                    <Main messages={chat['aleksander']}/>
                    <Footer/>
                </div>
            </div>
        </>
    )

}


export default App