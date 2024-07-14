import DayOne from '@/components/ui/dayone';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import Hero from '@/components/ui/hero';
Hero;

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-poppins',
});

export default function Home() {
  return (
    <>
      <div className={poppins.className}>
        <div className="px-[12.5%] mx-auto max-lg:px-[5%] ">
          <div>
            <Hero />
          </div>
          <div id="Day1">
            <DayOne />
          </div>
        </div>
      </div>
    </>
  );
}
