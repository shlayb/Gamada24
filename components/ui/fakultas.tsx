'use client';
import FakDrop from './fak-drop';
import kluster from '../../app/_fak.json';
import { use, useEffect, useState } from 'react';

export default function Fakultas() {
  const [found, setFound] = useState(false);

  return (
    <div>
      <div className="py-16 px-4">
        <h1 className="py-4 text-center text-4xl font-bold">Fakultas</h1>
        <hr className="my-2 border-[1px] " />
        <div className="grid grid-cols-1 gap-2 ">
          {kluster.map((fak, index) => {
            if (fak.fakultas === localStorage.getItem('fakultas')) {
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
          })}
        </div>
      </div>
    </div>
  );
}
