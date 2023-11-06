"use client";
import axios from "axios";


function registerPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // cancels its default actions

    // extract form data
    const formData = new FormData(e.currentTarget);

    //console.log(`name: ${name}, email: ${email}, password: ${password}`)
    try {
        const res = await axios.post("./../api/auth/register", {
            name: formData.get('name'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
            birthDate: formData.get('birthDate'),
            typeDocument: formData.get('typeDocument'),
            IdentityNumber: formData.get('IdentityNumber')
        })
        console.log(res)
    } catch (error) {
        console.log(error) 
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="UserName"
          name="name"
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="lastName"
          name="lastName"
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="typeDocument"
          name="typeDocument"
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="IdentityNumber"
          name="IdentityNumber"
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="*********"
          name="password"
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="*********"
          name="confirmPassword"
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="date"
          name="birthDate"
        />

        <button className="bg-indigo-500 px-4 py-2">Register</button>
      </form>
    </div>
  );
}

export default registerPage;
