import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6dc5ad66-d169-443a-b138-e1ee3ee9c5f3"
    }
})

export const userAPI ={
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => (response.data) );

    },
    deleteBtn(id) {
        return  instance.delete(`follow/${id}`, {})
            .then(response => (response.data) );
    },
    postBtn(id) {
        return  instance.post(`follow/${id}`,{}, {})
            .then(response => (response.data) );
    }
}

export const getUsers = (currentPage, pageSize) =>{
   return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
       .then(response => (response.data) );

}
export const deleteBtn = (id) =>{
    return  instance.delete(`follow/${id}`, {})
        .then(response => (response.data) );
}
export const  postBtn = (id) =>{
    return  instance.post(`follow/${id}`,{}, {})
        .then(response => (response.data) );
}

// .then(response => {
//     return response.data;
//  })

