import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [text, setText] = useState("copy");
  const [length, SetLength] = useState(6);
  const [number, setNumber] = useState(true);
  const [symbols, setSymbols] = useState(true);

  function password() {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "1234567890";
    let Characters = "!@#$%&";
    let pass = "";

    // if()
  }

  const copyText = () => {
    setText("copied");
  };

  return (
    <>
      <div className="bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 h-screen w-screen flex items-center justify-center">
        <div className="card w-auto h-auto bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 text-neutral-content ">
          <div className="card-body items-center text-center">
            <div className="flex items-center justify-center gap-2">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input type="password" className="grow" value="password" />
              </label>
              <button className="btn btn-primary" onClick={copyText}>
                {text}
              </button>
            </div>
            <div className="card-actions justify-end p-4">
              <div className="flex items-center justify-center gap-2 mt-2">
                <input
                  type="range"
                  min={6}
                  max="100"
                  value={length}
                  onChange={(e) => SetLength(e.target.value)}
                  className="range range-primary"
                />
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text font-bold text-black mr-2">
                    Characters
                  </span>
                  <input
                    type="checkbox"
                    defaultChecked={symbols}
                    // onChange={}
                    className="checkbox checkbox-warning"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text font-bold text-black mr-2">
                    Numbers
                  </span>
                  <input
                    type="checkbox"
                    defaultChecked={number}
                    // onChange={}
                    className="checkbox checkbox-warning"
                  />
                </label>
              </div>
            </div>
            <div className="font-bold">Length: {length}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
