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
                </ul>
            </nav>

            <details is-="popover">
                <summary>Logout/Login</summary>
                <form action="">
                    <div className="widget">
                        <label htmlFor="username">
                            Username:
                        </label>
                        <input type="text"
                               id="username" 
                               name="username" 
                               placeholder="johndoe123"
                               required />
                    </div>

                    <div className="widget">
                        <label htmlFor="password">
                            Password:
                        </label>
                        <input type="password"
                               id="password"
                               name="password"
                               placeholder="********"
                               required />
                    </div>

                    <div className="btns-container">
                        <button size-="small">Login</button>
                        <button size-="small">Register</button>
                    </div>
                </form>
            </details>
            
        </header>
    </>)
}

export default Header;