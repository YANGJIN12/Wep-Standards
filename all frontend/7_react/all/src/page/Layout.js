import {Outlet, Link} from "react-router-dom";
//리엑트에 임시 내비게이션
import '../css/mysass.scss';

const Layout = () => {
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/intro">What ?</Link>
                </li>
                <li>
                    <Link to="/es6">Es6</Link>
                </li>
                <li>
                    <Link to="/render">Render</Link>
                </li>
                <li>
                    <Link to="/jsx">Jsx</Link>
                </li>
                <li>
                    <Link to="/component">Component</Link>
                </li>
                <li>
                    <Link to="/condition">Condition</Link>
                </li>
                <li>
                    <Link to="/lists">Lists</Link>
                </li>
                <li>
                    <Link to="/forms">Forms</Link>
                </li>
                <li>
                    <Link to="/memo">Memo</Link>
                </li>
                <li>
                    <Link to="/hook">Hook</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default Layout;//렌더링을 시켜야 됩니다