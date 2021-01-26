import React, { useState, useEffect } from "react";
import axios from "axios";
type body = {
  username: string;
  password: string;
};

const Register: React.FC = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const ChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const ChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    let body: body = {
      username: Username,
      password: Password,
    };
    axios.post("http://localhost:5000/auth/register", body).then((res: any) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">Register</h1>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="pt-6 font-semibold text-sm text-gray-600 pb-1 block">
                Username
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={Username}
                onChange={ChangeUser}
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Password
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={Password}
                onChange={ChangePassword}
              />
            </div>
            <div className="flex justify-end py-5">
              <div className="grid grid-cols-2 gap-1">
                <div className="text-center sm:text-left whitespace-nowrap">
                  <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block align-text-top"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="inline-block ml-1">Sign Up</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
