import "./navbar.scss"
const Navbar=()=>{
    return(
        <div className="navbar"> 
        <div className="logo">
            <img src="logo.svg" alt=""/>
            <span>Lamadmin</span>
        </div>
        <div className="icons">
        <img src="/search.svg" alt="" className="icon"/>
        <img src="/app.svg" alt="" className="icon"/>
        <img src="/expand.svg" alt="" className="icon"/>
        <div className="notification">
            <img src="/notifications.svg" alt=""/>
            <span>1</span>
        </div>
        <div className="user">
            <img src="https://c8.alamy.com/comp/TC2FPE/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg" alt=""/>
            <span>kebede</span>
        </div>
        <img src="/settings.svg" alt="" className="icon"/>
        </div>
        </div>
    )
}

export default Navbar