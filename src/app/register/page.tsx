"use client";
import axios from "axios";

function registerPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // cancels its default actions

    // extract form data
    const formData = new FormData(e.currentTarget);

    //console.log(`name: ${name}, email: ${email}, password: ${password}`)
    try {
        const res = await axios.post('/api/auth/signup', {
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
      <form onSubmit={handleSubmit}>
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="UserName"
          name="name"
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
        <button className="bg-indigo-500 px-4 py-2">Register</button>
      </form>
    </div>
  );
}

export default registerPage;
