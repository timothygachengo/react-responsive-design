import { useRoutes } from "react-router-dom";
import MediaQueries from './media-queries';
import Tailwind from './tailwind';

const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <Tailwind />
        },
        {
            path: "/media-queries",
            element: <MediaQueries />
        }
    ]);
}

export default Router;