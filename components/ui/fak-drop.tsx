'use client';
import React, { useEffect, useRef } from 'react';
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

  // useEffect(() => {
  //   const PdfCurrent = pdf.current;
  //   if ( PdfCurrent) {
  //     PdfCurrent.classList.toggle('hidden');
  //   }
  // }, [isOpen]);

  return (
    <>
      <div className="w-full h-auto mx-auto my-2 rounded-xl text-dark dark:text-light cursor-pointer transition-all duration-100">
        <div className="flex justify-center">
          <a href={src} download={fakultas + '.pdf'} target="_blank" className="text-center text-blue-500 font-normal text-xl p-2 w-full">
            <button>Dowload PDF</button>
          </a>
        </div>

        {/* {isOpen ? (
          <div ref={pdf} className="flex justify-center px-1 py-2 pb-4 transition-all ease-linear duration-1000">
            <iframe src={src} className="w-[90%] aspect-3/4"></iframe>
          </div>
        ) : null} */}
        {kebutuhan ? (
          <div ref={pdf} className=" px-4 py-2 pb-4 transition-all ease-linear duration-100">
            <h2 className="font-medium text-lg">PERLENGKAPAN/PAKAIAN UMUM:</h2>
            <hr className="my-2 border-[1px] " />
            {kebutuhan
              ? kebutuhan.map((item, index) => {
                  return <CheckItem key={index} item={item} />;
                })
              : null}
          </div>
        ) : null}
        {ATK ? (
          <div ref={pdf} className=" px-4 py-2 pb-4 transition-all ease-linear duration-100">
            <h2 className="font-medium text-lg">ATK dan perlengkapan pribadi :</h2>
            <hr className="my-2 border-[1px] " />
            {ATK
              ? ATK.map((item, index) => {
                  return <CheckItem key={index} item={item} />;
                })
              : null}
          </div>
        ) : null}
        {perlengkapankhusus ? (
          <div ref={pdf} className=" px-4 py-2 pb-4 transition-all ease-linear duration-100">
            <h2 className="font-medium text-lg">Perlengkapan Khusus :</h2>
            <hr className="my-2 border-[1px] " />
            {perlengkapankhusus
              ? perlengkapankhusus.map((item, index) => {
                  return <CheckItem key={index} item={'Pada Hari ke-3 : ' + item} />;
                })
              : null}
          </div>
        ) : null}
        {catatankhusus ? <BoxNote list={catatankhusus} /> : null}
      </div>
    </>
  );
}
