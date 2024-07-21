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
  Kebutuhan2?: string[];
  ATK2?: string[];
}

export default function FakDrop({ fakultas, src, kebutuhan, ATK, catatankhusus, perlengkapankhusus, Kebutuhan2, ATK2 }: FakDropProps) {
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
          <a href={src} download={'Pionir Fakultas ' + fakultas + '.pdf'} target="_blank" className="text-center text-light font-normal text-xl p-2 w-full">
            <button className="w-full bg-blue-500 py-2 rounded-xl border-[1px] hover:border-[1px] hover:border-slate-700">Dowload PDF</button>
          </a>
        </div>

        {/* {isOpen ? (
          <div ref={pdf} className="flex justify-center px-1 py-2 pb-4 transition-all ease-linear duration-1000">
            <iframe src={src} className="w-[90%] aspect-3/4"></iframe>
          </div>
        ) : null} */}
        {kebutuhan ? (
          <>
            <h1 className="font-medium text-center p-2 text-xl">KEBUTUHAN HARI KE-3</h1>
          </>
        ) : null}
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
        {Kebutuhan2 || ATK2 ? (
          <>
            <hr className="my-2 border-[1px] " />
            <h1 className="font-medium text-center p-2 text-xl">KEBUTUHAN HARI KE-4</h1>
          </>
        ) : null}
        {Kebutuhan2 ? (
          <div ref={pdf} className=" px-4 py-2 pb-4 transition-all ease-linear duration-100">
            <h2 className="font-medium text-lg">PERLENGKAPAN/PAKAIAN UMUM:</h2>
            <hr className="my-2 border-[1px] " />
            {Kebutuhan2
              ? Kebutuhan2.map((item, index) => {
                  return <CheckItem key={index} item={item} />;
                })
              : null}
          </div>
        ) : null}
        {ATK2 ? (
          <div ref={pdf} className=" px-4 py-2 pb-4 transition-all ease-linear duration-100">
            <h2 className="font-medium text-lg">ATK dan perlengkapan pribadi :</h2>
            <hr className="my-2 border-[1px] " />
            {ATK2
              ? ATK2.map((item, index) => {
                  return <CheckItem key={index} item={item} />;
                })
              : null}
          </div>
        ) : null}
        {catatankhusus ? <BoxNote list={catatankhusus} /> : null}
      </div>
    </>
  );
}
