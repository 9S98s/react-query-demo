import { useMutation } from '@tanstack/react-query';
import { updateUser } from '../api/user';

const useUpdateUser = () => {
    return useMutation(updateUser, {
        onSuccess: (data) => {
            alert('사용자 정보가 성공적으로 수정되었습니다!');
            console.log('수정된 사용자 정보:', data);
        },
        onerror: (error) => {
            alert('사용자 정보 수정에 실패하였습니다.');
            console.error('오류:', error);
        },
    });
};

export default useUpdateUser;