'use client';
import { use, useEffect, useRef, useState } from 'react';

interface FakDropProps {
  fakultas: string;
  src: string;
}

export default function FakDrop({ fakultas, src }: FakDropProps) {
  const pdf = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const PdfCurrent = pdf.current;
  //   if (isOpen && PdfCurrent) {
  //     PdfCurrent.classList.toggle('hidden');
  //   }
  // }, [isOpen]);

  return (
    <>
      <div className="w-[95%] h-auto mx-auto my-2 rounded-xl bg-sky-500 cursor-pointer border-slate-800 border-[1px] transition-all duration-500">
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="p-3 flex justify-between items-center"
        >
          <h2 className="text-xl font-[500] px-3 transition-all  hover:scale-105 hover:translate-x-3 ease-in-out duration-200">Fakultas {fakultas}</h2>
          <div>
            <button
              className="p-1  transition-all hover:scale-150 ease-in-out"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div ref={pdf} className="flex justify-center px-1 py-2 pb-4 transition-all ease-linear duration-1000">
            <iframe src={src} className="w-[90%] aspect-3/4"></iframe>
          </div>
        ) : null}
      </div>
    </>
  );
}
