import { React, useState } from "react";

import { toast } from "react-toastify";

import Spinner from "../../spinner";
import config from "../../config";

export const Login = (props) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const [errors, setErrors] = useState({});

  const [iscalling, setiscalling] = useState(false);
  const [loginErrorStatus, setLoginErrorStatus] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (username === "" || password === "") {
      toast.warn("Please Fill The Fields");
    } else if (username === undefined || password === undefined) {
      toast.warn("Please Fill The Fields");
    } else {
      setiscalling(true);
      setErrors(newErrors);
      fetch(`${config.APP_CONFIG}/Login/api`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 5000,
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((data) => data.json())
        .then((data) => {
          setiscalling(false);
          if (data.status_code === 200) {
            window.localStorage.setItem("user", username);
            props.setToken(data.msg);
           
          } else if (data.status_code === 400) {
            toast.warn(data.msg);
          }
        })
        .catch((err) => {
          setLoginErrorStatus(1);
          setiscalling(false);
        });
    }
  };

  if (iscalling) {
    return <Spinner />;
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://img.logoipsum.com/243.svg"
            alt="Your Company"
          /> */}
          <p className="mx-auto h-10 w-auto">E-DASHBOARD</p>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.username && (
                  <p className="text-red-500 text-xs italic">
                    {errors.username}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member? <button>Sign Up</button>
          </p>
        </div>
      </div>
    </>
  );
};
