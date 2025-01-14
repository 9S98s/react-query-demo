import { useMutation } from "@tanstack/react-query";
import { createPost } from '../api/posts';

const useCreatePost = () => {
  return useMutation(createPost, {
    onSuccess: (data) => {
      console.log('게시글 생성 성공:', data);
      alert('게시글이 성공적으로 생성되었습니다!');
    },
    onError: (error) => {
      console.error('게시글 생성 실패:', error);
      alert('게시글 생성에 실패했습니다.');
    }
  });
};

export default useCreatePost;