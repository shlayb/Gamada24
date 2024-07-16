import DayOne from '@/components/ui/dayone';
import { Poppins } from 'next/font/google';
import Hero from '@/components/ui/hero';
import DayTwo from '@/components/ui/daytwo';
import Fakultas from '@/components/ui/fakultas';
import GetId from '@/components/ui/getid';
DayTwo;

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
          <div id="Getid">
            <GetId />
          </div>
          <div id="Day1">
            <DayOne />
          </div>
          <div id="Day2">
            <DayTwo />
          </div>
          <div id="Fakultas">
            <Fakultas />
          </div>
        </div>
      </div>
    </>
  );
}
