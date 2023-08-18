import { Navigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Home from "./Home";
import NotFound from "./NotFound";
import Plans from "./Plans";
import Trainers from "./Trainers";

const router = [
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'contact',
        element: <Contact />
    },
    {
        path: 'gallery',
        element: <Gallery />
    },
    {
        path: 'home',
        element: <Home />
    },
    {
        path: 'plans',
        element: <Plans />
    },
    {
        path: 'trainers',
        element: <Trainers />
    },
    {
        path: '/',
        element: <Navigate to="/home"/>
    },
    {
        path: '*',
        element: <NotFound />
    },

];

export default router;