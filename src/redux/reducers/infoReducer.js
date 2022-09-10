export const CAP_NHAT_NAME = 'CAP_NHAT_NAME';
export const CAP_NHAT_EMAIL = 'CAP_NHAT_EMAIL';
export const CAP_NHAT_INFO_USER = 'CAP_NHAT_INFO_USER';

const initialState = {
    name: 'To Phat',
    email: 'ttppy13@gmail.com',
    sdt: '0869017747',
    age: '20',
    role: 0,
} 




export default function actionForReducer(state = initialState, payload){
    switch(payload.type){
        /* case CAP_NHAT_NAME:
            return {
                ...state,
                name: payload.name
            }
        case CAP_NHAT_EMAIL:
            return {
                ...state,
                email: payload.email
            } */
        /* case CAP_NHAT_INFO_USER:
            return {
                ...state,
                name: payload.name,
                email: payload.email,
                sdt: payload.sdt,
                age: payload.age,
                role: payload.role,
            } */
        case CAP_NHAT_INFO_USER:
            return payload.newMemberProfile;
        default: 
            return state
    }
}

