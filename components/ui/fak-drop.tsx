'use client';
import { use, useEffect, useRef, useState } from 'react';
import CheckItem from './checkboxitem';
import BoxNote from './boxnote';

interface FakDropProps {
  fakultas: string;
  src?: string;
  kebutuhan?: string[];
  ATK?: string[];
  catatankhusus?: string[];
  perlengkapankhusus?: string[];
}

export default function FakDrop({ fakultas, src, kebutuhan, ATK, catatankhusus, perlengkapankhusus }: FakDropProps) {
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
      <div className="w-[95%] h-auto mx-auto my-2 rounded-xl bg-cyan-400 text-dark cursor-pointer border-slate-800 border-[1px] transition-all duration-100">
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="p-3 flex justify-between items-center"
        >
          <h2 className="text-xl font-[500] px-3 transition-all  hover:scale-105 hover:translate-x-3 ease-in-out duration-100">Fakultas {fakultas}</h2>
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

        {/* {isOpen ? (
          <div ref={pdf} className="flex justify-center px-1 py-2 pb-4 transition-all ease-linear duration-1000">
            <iframe src={src} className="w-[90%] aspect-3/4"></iframe>
          </div>
        ) : null} */}
        {isOpen && kebutuhan ? (
          <div ref={pdf} className=" px-8 py-2 pb-4 transition-all ease-linear duration-100">
            <h2 className="font-medium text-lg">PERLENGKAPAN/PAKAIAN UMUM:</h2>
            <hr className="my-2 border-[1px] border-dark dark:border-light " />
            {kebutuhan
              ? kebutuhan.map((item, index) => {
                  return <CheckItem key={index} item={item} />;
                })
              : null}
          </div>
        ) : null}
        {isOpen && ATK ? (
          <div ref={pdf} className=" px-8 py-2 pb-4 transition-all ease-linear duration-100">
            <h2 className="font-medium text-lg">ATK dan perlengkapan pribadi :</h2>
            <hr className="my-2 border-[1px] border-dark dark:border-light " />
            {ATK
              ? ATK.map((item, index) => {
                  return <CheckItem key={index} item={item} />;
                })
              : null}
          </div>
        ) : null}
        {isOpen && perlengkapankhusus ? (
          <div ref={pdf} className=" px-8 py-2 pb-4 transition-all ease-linear duration-100">
            <h2 className="font-medium text-lg">Perlengkapan Khusus :</h2>
            <hr className="my-2 border-[1px] border-dark dark:border-light " />
            {perlengkapankhusus
              ? perlengkapankhusus.map((item, index) => {
                  return <CheckItem key={index} item={item} />;
                })
              : null}
          </div>
        ) : null}
        {isOpen && catatankhusus ? <BoxNote list={catatankhusus} /> : null}
      </div>
    </>
  );
}
