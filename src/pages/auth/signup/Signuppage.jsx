import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [usn, setUsn] = useState('');
  const [sfname, setSfname] = useState('');
  const [slname, setSlname] = useState('');
  const [passout, setPassout] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const signupData = {
      username,
      email,
      password,
      firstName: sfname,
      lastName: slname,
      passoutYear: passout,
    };

    if (userType === 'ALUMNI') {
      signupData.companyName = companyName;
    } else if (userType === 'STUDENT') {
      signupData.usn = usn;
    }

    try {
      let response;
      if (userType === 'ALUMNI') {
        response = await axios.post("http://localhost:3001/registerAlumni", signupData);
      } else if (userType === 'STUDENT') {
        response = await axios.post("http://localhost:3001/registerStudent", signupData);
      }

      if (response.status === 201) {
        alert('Signup successful! Please login.');
        navigate('/login');
      } else {
        throw new Error('Signup failed');
      }
    } catch (err) {
      setError('Signup failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="w-full flex bg-white">
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
        <div className="text-sm text-blue-200">
          <a className="hover:text-blue-800" href="https://central.sjceplacements.org/">
            Click here to redirect to the college placement website
          </a>
        </div>

        <div className="flex justify-center pt-32 md:pt-4">
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Student_%28example%29.svg/888px-Student_%28example%29.svg.png"
              className="w-20 h-20"
              alt="Logo"
            />
          </a>
        </div>
        <div className="flex flex-col justify-center md:justify-start my-2 pt-8 md:pt-1 px-8 md:px-24 lg:px-32">
          <h2 className="text-center text-black">Signup</h2>
          {error && <p className="text-red-500">{error}</p>}
          <div className="py-2 px-1">
            <button
              className={`bg-black text-white font-semibold py-2 px-10 mx-1 border border-gray-500 rounded ${userType === 'ALUMNI' ? 'selected' : ''}`}
              onClick={() => setUserType('ALUMNI')}
            >
              ALUMNI
            </button>
            <button
              className={`bg-black text-white font-semibold py-2 px-10 mx-1 border border-gray-500 rounded ${userType === 'ADMIN' ? 'selected' : ''}`}
              onClick={() => setUserType('ADMIN')}
            >
              ADMIN
            </button>
            <button
              className={`bg-black text-white font-semibold py-2 px-10 mx-1 border border-gray-500 rounded ${userType === 'STUDENT' ? 'selected' : ''}`}
              onClick={() => setUserType('STUDENT')}
            >
              STUDENT
            </button>
          </div>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSignup}>
            <div className="flex flex-col pt-4">
              <label htmlFor="username" className="text-lg">Username</label>
              <input
                type="text"
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="sfname" className="text-lg">First Name</label>
              <input
                type="text"
                id="sfname"
                placeholder="First Name"
                value={sfname}
                onChange={(e) => setSfname(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="slname" className="text-lg">Last Name</label>
              <input
                type="text"
                id="slname"
                placeholder="Last Name"
                value={slname}
                onChange={(e) => setSlname(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {userType === 'ALUMNI' && (
              <div className="flex flex-col pt-4">
                <label htmlFor="companyName" className="text-lg">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
            {userType === 'STUDENT' && (
              <>
                <div className="flex flex-col pt-4">
                  <label htmlFor="usn" className="text-lg">USN</label>
                  <input
                    type="text"
                    id="usn"
                    placeholder="USN"
                    value={usn}
                    onChange={(e) => setUsn(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex flex-col pt-4">
                  <label htmlFor="passout" className="text-lg">Passout Year</label>
                  <input
                    type="text"
                    id="passout"
                    placeholder="Passout Year"
                    value={passout}
                    onChange={(e) => setPassout(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </>
            )}
            <input type="submit" value="Sign Up" className="bg-blue-900 text-white font-bold text-lg hover:bg-blue-200 hover:text-gray-900 py-2 px-4 rounded-xl mt-8" />
          </form>
          <div className="text-center pt-12 pb-12">
            <p>Already have an account? <a href="/login" className="underline font-semibold hover:bg-blue-200">Log in here</a></p>
          </div>
        </div>
      </div>
      <div className="w-2/3 md:w-1/2 shadow-2xl">
        <img className="w-full h-screen md:block float-center" src="https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Background" />
      </div>
    </div>
  );
};

export default Signup;
