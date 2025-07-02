function Header() {
    return (<>
        <header box-="square" shear-="top">
            <div className="box-heading">
                <span>MaBlog</span>
            </div>
            
            <nav>
                <ul marker-="open tree">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">My Blogs</a></li>
                    <li><a href="#">Write</a></li>
                    <li><a href="#">Logout/Login</a></li>
                </ul>
            </nav>
        </header>
    </>)
}

export default Header;