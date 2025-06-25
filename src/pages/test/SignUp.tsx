import { ChangeEvent, FormEvent, useState } from "react";
import { firebaseAuth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {
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
      console.log("성공"+ result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
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
        <button type="submit">
          회원가입
        </button>
      </form>
    </div>
  )
}