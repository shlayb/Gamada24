'use client';

import React, { useState, useEffect, useRef } from 'react';
import DropDown from './dropdown';

export default function GetId() {
  const [name, setName] = useState('');

  useEffect(() => {
    const cachedName = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (cachedName) {
      setName(cachedName);
    }
  }, []);

  const handleNameChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newName = (document.getElementById('MyName') as HTMLInputElement)?.value;
    setName(newName);
    document.cookie = `username=${newName}`;
    window.location.reload();
  };

  return (
    <>
      <div className="w-full h-auto p-4 max-lg:pt-20">
        <div className="flex gap-4 max-lg:grid max-lg:justify ">
          <input
            id="MyName"
            type="text"
            placeholder="Masukan Nama"
            className="p-4 w-[38%] max-lg:w-full rounded-xl transition-all duration-150 text-dark dark:text-light bg-light border-slate-700 border-2 dark:bg-dark"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <DropDown />
          <button onClick={handleNameChange} className="p-4 w-[24%] max-lg:w-full rounded-xl text-dark dark:text-light transition-all duration-200 bg-light border-slate-700 border-2 dark:bg-dark hover:bg-slate-300 active:translate-y-1">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
