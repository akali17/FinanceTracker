import {Routes, Route, Navigate} from 'react-router-dom';
import LoginForm from '../pages/LoginAndRegister/LoginForm';
import RegisterForm from '../pages/LoginAndRegister/RegisterForm';
import Dashboard from '../pages/Dashboard/Dashboard';
import {ProtectedRoute} from '../components/ProtectedRoute';
import Layout from "../layouts/Layout.tsx";
import Home from "../pages/Home/Home.tsx";
import AboutUs from "../pages/AboutUs/AboutUs.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            {/*<Route path="/" element={<Navigate to="/dashboard" replace/>}/>*/}
            <Route
                path="/"
                element={
                    <Layout>
                        <Home/>
                    </Layout>
                }
            />

            <Route
                path="/login"
                element={
                    <Layout>
                        <LoginForm/>
                    </Layout>
                }
            />

            <Route
                path="/register"
                element={
                    <Layout>
                        <RegisterForm/>
                    </Layout>
                }
            />
            <Route
                path="/about-us"
                element={
                    <Layout>
                        <AboutUs/>
                    </Layout>
                }
            />
            <Route
                path="/dashboard/*"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;