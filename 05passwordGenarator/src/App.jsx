import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState('');

  const passwordRef = useRef(null);
  const passwordbtnRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbersstring = "0123456789";
    const symbolsstring = "!@#$%^&*()";
    if (numberallowed) {
      str += numbersstring;
    }
    if (charallowed) {
      str += symbolsstring;
    }
    let pass = createPassword(str, length);
    setpassword(pass);
  }, [length, numberallowed, charallowed]);

  const createPassword = (charcter, passwordLength) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * charcter.length);
      result += charcter.charAt(characterIndex);
    }
    return result;
  }
  const copyToCLick = (() => {
    window.navigator.clipboard.writeText(password);

    passwordRef.current.select();


    passwordbtnRef.current.innerText = 'Copied!';

    // After 2 seconds, revert back to the original text
    setTimeout(() => {
      passwordbtnRef.current.innerText = 'Copy';
    }, 2000); // 2 seconds
  })
  useEffect(() => {
    generatePassword()
  }, [length, numberallowed, charallowed]);

  return (
    <div className='w-full max-w-xl mx-auto shadow-md rounded-lg py-3 px-8 bg-gray-500 text-white'>
      <h1 className='text-3xl text-center rounded text-white mb-2'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3 text-black'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyToCLick} id="copyToCLick" ref={passwordbtnRef}
          className='outline-none bg-blue-300 px-3 py-0.5 shrink-0 text-white'>
          Copy
        </button>
      </div>

      <div className="flex items-center text-sm gap-x-2 mb-2">
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          name="length"
          className='cursor-pointer'
          onChange={(e) => { setlength(e.target.value) }}
        />
        <label htmlFor="lengthInput">Length: {length}</label>
        <input
          defaultChecked={numberallowed}
          type="checkbox"
          name="numberallowed"
          id=""
          onChange={(e) => { setnumberallowed((prev) => !prev) }}
        />
        <label htmlFor="numberInput">Number</label>

        <input
          defaultChecked={charallowed}
          type="checkbox"
          name="charallowed"
          onChange={(e) => { setcharallowed((prev) => !prev) }}
          id=""
        />
        <label htmlFor="charInput">Special Character</label>
      </div>

      {/* <div className="flex items-center text-sm gap-x-2 mb-2">
        
      </div> */}
    </div>

  )
}

export default App
