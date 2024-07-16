import FakDrop from './fak-drop';
import kluster from '../../app/_fak.json';

export default function Fakultas() {
  return (
    <div>
      <div className="py-16 px-4">
        <h1 className="py-4 text-center text-4xl font-bold">Fakultas</h1>
        <hr className="my-2 border-[1px] " />
        <div className="grid grid-cols-1 gap-2 ">
          {kluster.map((fak, index) => {
            return <FakDrop key={index} fakultas={fak.fakultas} src={fak.src} kebutuhan={fak.kebutuhan} ATK={fak.ATK} catatankhusus={fak.catatanKhusus} perlengkapankhusus={fak.perlengkapankhusus} />;
          })}
        </div>
      </div>
    </div>
  );
}
