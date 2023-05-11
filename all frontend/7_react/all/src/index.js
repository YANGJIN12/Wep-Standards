import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";
import Intro from "./page/Intro";
import Es6 from "./page/Es6";
import Rd from "./page/Rd";
import Jsx from "./page/Jsx";
import Cp from "./page/Cp";
import Condition from "./page/Condition";
import Lists from "./page/Lists";
import Forms from "./page/Forms";
import Memo from "./page/Memo";
import Hook from "./page/Hook";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>{/*네비게이션 헤더 사용 */}
                    <Route index element={<Home />} />
                    <Route path="intro" element={<Intro />} />
                    <Route path="es6" element={<Es6 />} />
                    <Route path="render" element={<Rd />} />
                    <Route path="jsx" element={<Jsx />} />
                    <Route path="component" element={<Cp />} />
                    <Route path="condition" element={<Condition />} />
                    <Route path="lists" element={<Lists />} />
                    <Route path="forms" element={<Forms />} />
                    <Route path="memo" element={<Memo />} />
                    <Route path="hook" element={<Hook />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);