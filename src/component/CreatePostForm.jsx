import React, { useState } from 'react';
import useCreatePost from '../hooks/useCreatePost';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const mutation = useCreatePost();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>제목:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>내용:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? '추가 중...' : '게시글 추가'}
      </button>
    </form>
  );
};

export default CreatePostForm;