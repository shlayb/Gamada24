'use client';

import React, { useState, useEffect } from 'react';

interface CheckItemProps {
  item: string;
  link?: string;
}

export default function CheckItem({ item, link }: CheckItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    // Load the checkbox state from localStorage
    const storedValue = localStorage.getItem(item);
    if (storedValue) {
      setIsChecked(JSON.parse(storedValue));
    }
  }, [item]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsChecked(checked);
    // Save the checkbox state to localStorage
    localStorage.setItem(item, JSON.stringify(checked));
  };

  return (
    <div className="flex items-center gap-3 py-2">
      <input type="checkbox" id={item} className="min-h-5 min-w-5 border-4 rounded-md dark:border-gray-100 border-gray-300 focus:ring-sky-500 focus:border-sky-500" checked={isChecked} value="" onChange={handleCheckboxChange} />
      <label htmlFor={item} className="text-[16px] leading-5 h-auto font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-90">
        {item}{' '}
        {link ? (
          <a href={link} target="_blank" className="text-sky-600">
            (klik disini)
          </a>
        ) : null}
      </label>
    </div>
  );
}
