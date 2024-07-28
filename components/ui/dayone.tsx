'use client';
import CheckItem from './checkboxitem';
import { useState } from 'react';

export default function DayOne() {
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="py-16 px-4">
        <h1 className="py-4 text-4xl font-bold text-center">Hari ke-1 dan ke-6</h1>
        <hr className="my-2 border-[1px] " />
        <div>
          <h2 className="text-lg">Perlengkapan/Pakaian Umum:</h2>
          <div className="p-2">
            <CheckItem item="Co-Card" link="http://ugm.id/COCARDGAMADA" />
            <CheckItem item="Pakaian Atas (Kemeja putih panjang + Dasi + Almamater)" />
            <div className="flex items-center m-2 py-3 px-6 w-[95%] rounded-xl mx-auto bg-green-300 border-green-900 border-[1px] dark:text-green-950 dark:border-lime-100">
              <i className="mr-5 scale-150 fa-solid fa-lightbulb "></i>
              <p>Kemeja lengan panjang berwarna putih polos menggunakan dasi berwarna hitam dan jas almamater</p>
            </div>
            <CheckItem item="Pakaian Bawah " />
            <div className="flex items-center m-2 py-3 px-6 w-[95%] rounded-xl mx-auto bg-green-300 border-green-900 border-[1px] dark:text-green-950 dark:border-lime-100">
              <i className="mr-5 scale-150 fa-solid fa-lightbulb "></i>
              <p>
                a. Laki-laki: celana hitam panjang bahan formal (bukan jeans). <br /> b. Perempuan: rok bahan hitam polos, panjang semata kaki, rapi, dan sopan.
              </p>
            </div>
            <CheckItem item="Rambut Rapi dan Natural" />
            <CheckItem item="Jilbab Segiempat Polos (jika pakai)" />
            <CheckItem item="Sepatu Tertutup, disarankan berwarna gelap" />
            <CheckItem item="Kaos kaki Berwarna bebas, menutup mata kaki" />
            <hr className="my-2 border-[1px] " />
            <h2 className="text-lg font-medium pt-4 pb-2">ATK Dan Perlengkapan Pribadi:</h2>
            <div className="px-0">
              <CheckItem item="Bolpoin" />
              <CheckItem item="Sticky notes" />
              <CheckItem item="Kertas lipat (origami)" />
              <CheckItem item="Topi" />
              <CheckItem item="Buku catatan/buku tulis minimal berukuran B5." />
              <CheckItem item="Kertas HVS 3 lembar/per hari" />
              <CheckItem item="Correction pen/penghapus" />
              <CheckItem item="Penggaris" />
              <CheckItem item="Clipboard/papan jalan" />
              <CheckItem item="Tas ransel" />
              <CheckItem item="Botol air minum/tumbler kapasitas minimal 750 mL" />
              <CheckItem item="Alat makan pribadi" />
              <CheckItem item="Spidol berwarna " />
              <CheckItem item="Lem kertas dan selotip kertas/masking tape" />
              <CheckItem item="hand sanitizer" />
              <CheckItem item="Alat ibadah" />
              <CheckItem item="Obat pribadi" />
              <hr className="my-2 border-[1px] " />
              <h2 className="text-lg font-medium pt-4 pb-2">Perlengkapan Khusus :</h2>
              <CheckItem item="Atribut Caping" />
              <CheckItem item="Atribut Asthakarsa" />
              <CheckItem item="Atribut Kertas koran/Kardus(sebagai alas duduk)" />
              <audio id="lagu" className="w-full" src="/lagu-selebrasi.mp3"></audio>
              <button
                onClick={() => {
                  setIsReady(!isReady);
                  isPlaying ? (document.getElementById('lagu') as HTMLAudioElement)?.pause() : (document.getElementById('lagu') as HTMLAudioElement)?.play();
                }}
                className={`text-2xl w-full my-4 rounded-2xl p-4 border-2 border-slate-800 dark:border-slate-100 ${isReady ? 'bg-blue-500' : 'bg-light dark:bg-dark'}`}
              >
                {isReady ? (
                  <span>
                    <i className="fa-solid fa-check scale-110"></i>
                    {'  '}
                    {'  '}
                  </span>
                ) : null}
                <span className="text-center ">i&apos;m Ready For Pionir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
