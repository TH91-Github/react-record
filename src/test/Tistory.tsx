import { useState, ChangeEvent, FormEvent } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../firebase';

export const Tistory = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Tistory">
      {/*  */}
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
};
