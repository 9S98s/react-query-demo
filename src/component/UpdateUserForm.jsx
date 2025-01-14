import React, { useState } from 'react';
import useUpdateUser from '../hooks/useUpdateUser';

const UpdateUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const mutation = useUpdateUser();


  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>이메일:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? '수정 중...' : '수정하기'}
      </button>
    </form>
  );
};

export default UpdateUserForm;