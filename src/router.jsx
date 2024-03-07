import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import ACharacterPage from "./pages/ACharacterPage";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "about/",
                element: <AboutPage />
            },
            {
                path: "characters/",
                element: <CharactersPage />
            },
            {
                path: "character/:id",
                element: <ACharacterPage />
            }
        ],
        errorElement: <NotFound />
    },
]);

export default router;