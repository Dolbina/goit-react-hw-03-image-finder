import axios from "axios";

axios.defaults.baseURL = "";
export const addSearch = async values => {
    const response = await axios.post(values);
    return response.data;
};