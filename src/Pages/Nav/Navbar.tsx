import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
    const [click, setClick] = useState<{nav:number; flag:boolean;}>({nav:0, flag:false});
    const handleClick = (navIndex: number) => {
        setClick(prev => ({
            nav:navIndex,
            flag: prev.nav !== navIndex ? true : !prev.flag 
        }))
    }
    const menu1 : {name:string; url:string }[] = [{name:"테스트sub1", url:"./Pages/TEST1"}, {name:"테스트sub2", url:"./Pages/TEST2"}, {name:"테스트sub3", url:"./Pages/TEST3"}]
    const styleul = "transition-all duration-300 pl-4"
    return (
        <nav>
            <div onClick={() => handleClick(1)} >테스트</div>
            <ul style={{ display: click.nav === 1 && click.flag ? 'block' : 'none' }} className={styleul}>
                {menu1.map((e,i) => (
                    <li><Link to={e.url}>{e.name}</Link></li>
                ))}
            </ul>

            <div onClick={() => handleClick(2)}>테스트2</div>
            <ul style={{ display: click.nav === 2 && click.flag ? 'block' : 'none' }} className={styleul}>
                {menu1.map((e,i) => (
                    <li><Link to={e.url}>{e.name}</Link></li>
                ))}
            </ul>            
        </nav>
    );
}

export default Navbar;