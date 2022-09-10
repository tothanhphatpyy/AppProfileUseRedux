const BASE_URL = 'https://booking-hotel-phat.herokuapp.com';

import axios from "axios";

export const fetchDataUser = async () => {
      const response = await axios.get(`${BASE_URL}/list-user?userID=62e3eecc9c8544b9f8e78781`);
      return response.data 
}
