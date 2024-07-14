import { Poppins } from 'next/font/google';
Hero;

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-poppins',
});

export default function Hero() {
  return (
    <section className="container mx-auto h-auto max-w-screen-xl gap-0 bg-gray-100 font-Poppins dark:bg-dark ">
      <div className="py-20 flex justify-center align-middle max-lg:mb-5 max-lg:py-16 max-lg:mt-12 max-lg:grid max-lg:gap-0">
        <div>
          <h1 className="text-4xl w-full py-1 font-bold">Hai👋, Selamat Datang</h1>
          <h1 className="text-6xl font-black">GAMADA 2024</h1>
          <div className="py-7">
            <p className="">Webiste ini dibuat untuk memudahkan para gamada </p>
            <p className="">yang sedang bersiap menghadapi masa PPSMB 2024 </p>
          </div>
          <div className="flex justify-center">
            <a href="https://pionir.ugm.ac.id/2024/kegiatan/atribut/atribut-hari-ke-1-dan-ke-6/" target="_blank" className="p-2 px-5 rounded-full text-center border-slate-800 border-[1px]  bg-blue-500">
              <button className="text-md">Refernsi Data</button>
            </a>
          </div>

          <p className="py-5 text-center">
            Created by : <a href="https://www.instagram.com/shlayb">shlayb</a>
          </p>
        </div>
      </div>
    </section>
  );
}
