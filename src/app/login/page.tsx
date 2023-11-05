'use client'
import { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // cancels its default actions

    // extract form data
    const formData = new FormData(e.currentTarget);

    //console.log(`name: ${name}, email: ${email}, password: ${password}`)
    try {
        const res = await axios.post('./../api/auth/login', {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="m-5 p-3 text-black"
          type="email"
          placeholder="email"
          name="email"
        />
        <input
          onChange={handleChange}
          className="m-5 p-3 text-black"
          type="password"
          placeholder="password"
          name="password"
        />
        <button className="border-white">login</button>
      </form>
    </div>
  );
}

export default LoginPage;
