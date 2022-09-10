
import { CAP_NHAT_NAME, CAP_NHAT_EMAIL, CAP_NHAT_INFO_USER } from "../reducers/infoReducer"; 




export const updateInfo = /* (name,email,sdt,age,role) */ (newMemberProfile ) => async dispatch => {
    try {
        //1. Side-effect: Làm gì đấy bất đồng bộ(vd như gọi lên server) dùng middleware redux-thunk
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000)
        });
        console.log('Da cap nhat name!');
        //console.log(newMemberProfile);

        //2. Cập nhật thông tin của infoReducer trong store
        /* dispatch({
            type: CAP_NHAT_INFO_USER,
            name: name,
            email: email,
            sdt: sdt,
            age: age,  
            role: role,
        }) */
        dispatch({
            type: CAP_NHAT_INFO_USER,
            newMemberProfile,
        });
        // Làm thêm cập nhật role
        /* dispatch({
            type: CAP_NHAT_NAME,
            name: name,
        }) */
    } catch (e) {
        
    }
}