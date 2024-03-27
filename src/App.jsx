import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [text, setText] = useState("Copy");
  const [length, SetLength] = useState(8);
  const [number, setNumber] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [generatedPassword, setGenertedPassword] = useState();
  const [hide, setVisibility] = useState("hidden");
  const textRef = useRef();

  const password = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "1234567890";
    let Characters = "!@#$%&";

    if (number) str += num;
    if (symbols) str += Characters;
    let pass = "";
    for (let i = 0; i < length; i++) {
      const alphabets = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(alphabets);
    }
    setGenertedPassword(pass);
  }, [length, number, symbols]);

  useEffect(() => {
    password();
    setText("Copy");
    setVisibility("hidden");
  }, [length, symbols, number]);

  const copyText = () => {
    setText("copied");
    setVisibility("");
    textRef.current.select();
    window.navigator.clipboard.writeText(generatedPassword);
  };

  return (
    <>
      <div className="bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 h-screen w-screen flex items-center justify-center">
        <div className="card w-auto h-auto bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 text-neutral-content ">
          <div className={`stats shadow ${hide} `}>
            <div className="stat text-center">
              <div className="stat-value text-xl">Password Copied</div>
            </div>
          </div>
          <div className="card-body items-center text-center">
            <div className="flex items-center justify-center gap-2">
              <label className="input input-bordered flex items-center gap-2 text-black">
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
                <input
                  type="text"
                  className="grow"
                  value={generatedPassword}
                  ref={textRef}
                />
              </label>
              <button className="btn btn-primary" onClick={copyText}>
                {text}
              </button>
            </div>
            <div className="card-actions justify-end p-4">
              <div className="flex items-center justify-center gap-2 mt-2">
                <input
                  type="range"
                  min="8"
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
                    onChange={() => {
                      setSymbols((prev) => !prev);
                    }}
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
                    onChange={() => {
                      setNumber((prev) => !prev);
                    }}
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
