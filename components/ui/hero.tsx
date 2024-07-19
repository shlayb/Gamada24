import { Poppins } from 'next/font/google';
import Image from 'next/image';
Image;
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
            <p className="">yang sedang bersiap menghadapi masa PIONIR 2024 </p>
          </div>
          <div className="flex justify-center py-5">
            <a href="/#Getid" className="p-2 px-5 rounded-full text-center border-slate-800 border-[1px]  bg-blue-500">
              <button className="text-md">Get Started!</button>
            </a>
          </div>

          <p className="py-5 text-center">
            Created by :{' '}
            <a href="https://www.instagram.com/shlayb">
              <i className="fa-brands fa-instagram"></i> shlayb
            </a>
            <br />
            Support me on :{' '}
            <a href="https://saweria.co/ayyubi" className="text-blue-700">
              Saweria.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
