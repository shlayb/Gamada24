'use client';
import FakDrop from './fak-drop';
import kluster from '../../app/_fak.json';
import { useEffect, useState } from 'react';

export default function Fakultas() {
  const [isClient, setIsClient] = useState(false);
  const [fakul, setFakultas] = useState('');
  useEffect(() => {
    isClient ? setFakultas(document.cookie.replace(/(?:(?:^|.*;\s*)fakultas\s*\=\s*([^;]*).*$)|^.*$/, '$1')) : null;
    setIsClient(true);
  }, [isClient]);

  return (
    <div>
      <div className="py-16 px-4">
        <h1 className="py-4 text-center text-4xl font-bold">Fakultas {fakul} </h1>
        <hr className="my-2 border-[1px] " />
        <div className="grid grid-cols-1 gap-2 ">
          {isClient ? (
            kluster.map((fak, index) => {
              if (fak.fakultas === fakul) {
                return fak.public ? (
                  <FakDrop key={index} fakultas={fak.fakultas} src={fak.src} kebutuhan={fak.kebutuhan} ATK={fak.ATK} catatankhusus={fak.catatanKhusus} perlengkapankhusus={fak.perlengkapankhusus} />
                ) : (
                  <>
                    <h1 className="text-center font-medium text-3xl p-5">~Not Found~</h1>
                  </>
                );
              } else {
                return null;
              }
            })
          ) : (
            <>
              <h1>is client false</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
