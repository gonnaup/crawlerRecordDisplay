import { BASE_URL } from '../configs/constant.config';
import AXIOS from 'axios';

export const _axios = AXIOS.create({baseURL: BASE_URL});


