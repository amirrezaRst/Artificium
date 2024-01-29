import { Route, Routes } from "react-router-dom";

import Login from "../components/register/Login";
import Home from "../components/home";
import Signup from "../components/register/Signup";
import JoinWorkspace from "../components/register/JoinWorkspace";
import MainLayout from "../layouts/MainLayout";
import Chat from "../components/chat";
import Library from "../components/library";
import { HelmetProvider } from "react-helmet-async";

const App = () => {

    return (
        <HelmetProvider>
            <Routes>
                <Route exact path="/" element={<MainLayout><Home /></MainLayout>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/join-workspace" element={<JoinWorkspace />} />
                <Route path="/chat" element={<MainLayout><Chat /></MainLayout>} />
                <Route path="/library" element={<MainLayout><Library /></MainLayout>} />
            </Routes>
        </HelmetProvider>
    );
}

export default App;