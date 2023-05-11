import { useRoutes } from "react-router-dom";
import MediaQueries from './media-queries';
import Tailwind from './tailwind';
import ContactForm from './Contact-form';

const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <Tailwind />
        },
        {
            path: "/media-queries",
            element: <MediaQueries />
        },
        {
            path: "/contact-form",
            element: <ContactForm />
        }
    ]);
}

export default Router;