import AboutScreen from "../screens/aboutScreen";
import ContactScreen from "../screens/contactScreen";
import HomeScreen from "../screens/homeScreen";
import NotFound from "../screens/notfoundScreen";

export const routeData = [
    {
        path: "/",
        element: <HomeScreen />
    },
    {
        path:"about",
        element:<AboutScreen/>
    },
    {
        path:"/contact",
        element:<ContactScreen/>
    },

    {
        path: "*",
        element: <NotFound />
    }
]