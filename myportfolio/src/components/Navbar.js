
import { useState } from 'react';
import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';




const Navbar = () => {

    const MenuLinks = [
        {
            title: "About",
            url: "/About",
            cName: "nav-links",
        },
    
        {
            title: "Portfolio",
            url: "/Portfolio",
            cName: "nav-links",
        },
    
        {
            title: "Contact",
            url: "/Contact",
            cName: "nav-links",
        },
    ]; 

    const [menuList, setMenuList] = useState(false);
    const showHide = () => setMenuList(!menuList);
    return (
        <div>
            <nav className="navbar-items">
				<a href="/">
					<h1 id="logo"></h1>
				</a>
				<div className="menu-icon" onClick={showHide}>
					{!menuList ? <GoIcons.GoThreeBars /> : <AiIcons.AiOutlineClose />}
				</div>
				<div className="menu-list">
					<ul className={menuList ? "nav-menu active" : "nav-menu"}>
						{MenuLinks.map((item, index) => {
							return (
								<li key={index}>
									<Link
										to={item.url}
										className={item.cName}
										onClick={() => showHide(menuList)}
										style={{ color: "inherit", textDecoration: "inherit" }}
									>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
        </div>
    );
};

export default Navbar; 