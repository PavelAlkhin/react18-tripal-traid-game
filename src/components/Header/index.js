import style from './Header.module.css';

function Header() {
    const menu = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
    const menuItems = menu.map((item, index) =>
        <li key={index}><a href={"#"}>{item}</a></li>
    )
    return (
        <header className={style.root}>
            <div className={style.header}>
                <div className={style.container}>
                    <div className={style.logo}></div>
                    <ul className={style.nav}>
                        {menuItems}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;