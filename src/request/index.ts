import axios from "axios";


const API_BASE  = 'http://211.58.89.49:8080';

export const requestPostingDetail = (id:number) => axios.get(`${API_BASE}/api/posting/detail/` + id);

export const requestPostingList = (univ: string) => (
    axios.get(`${API_BASE}/api/posting/univ`, { params: { university: univ } })
);
