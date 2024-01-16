import { Route, Routes } from "react-router-dom";

import Login from "../components/register/Login";
import Home from "../components/home";
import Signup from "../components/register/Signup";

const App = () => {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
}

export default App;