import './header.css'


const Header = (props) => {

    const {icon, name, status} = props

    return (
        <>
            <header className="header">
                <img src={icon} alt="Icon" />
                <div className="profile-info">
                    <h1 className="profile-name">{name}</h1>
                    <div className="profile-status">{status}</div>
                </div>
            </header>
        </>
    )

}


export default Header
