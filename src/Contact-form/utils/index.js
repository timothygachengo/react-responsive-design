import axios from "axios";
import {
    SEND_EMAIL_API,
    SERVICE_ID,
    TEMPLATE_ID,
    USER_ID
} from '../constants';

export const sendEmail = async ({
    name,
    email,
    message,
    subject
}) => {
    const data = {
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: USER_ID,
        template_params: {
            name,
            email,
            message,
            phoneNumber: 'test',
            subject
        }
    };

    try {
        const response = await axios.post(SEND_EMAIL_API, data);
        return response;
    } catch (error) {
        return error;
    }
}