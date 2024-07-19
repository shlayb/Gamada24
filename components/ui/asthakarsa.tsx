import CheckItem from './checkboxitem';

export default function Asthakarsa() {
  return (
    <>
      <div className="py-16 px-4">
        <h1 className="py-4 text-4xl font-bold">Asthakarsa</h1>
        <hr className="my-2 border-[1px] " />
        <div>
          <h2 className="text-lg font-medium pt-4 pb-2">Alat dan Bahan :</h2>
          <div className="p-2">
            <CheckItem item="Gunting atau Cutter" />
            <CheckItem item="Penggaris" />
            <CheckItem item="Pensil" />
            <CheckItem item="1 Lembar karton ukuran 77 x 66 cm dengan ketebalan 2 mm" />
            <CheckItem item="2 lembar kertas asturo berwarna “Hitam”" />
            <CheckItem item="1 lembar kertas asturo berwarna “Biru” dengan kode warna (28)" />
            <CheckItem item="1 lembar kertas asturo berwarna “Pink” dengan kode warna (43)" />
            <CheckItem item="4 buah ring buku metal berukuran 1 inch atau 2.4 cm" />
            <CheckItem item="8 batang stik kayu" />
            <CheckItem item="Lem PVA serbaguna" />
            <hr className="my-2 border-[1px] " />
            <h2 className="text-lg font-medium pt-4 pb-2">Youtube Tutorial</h2>
            <iframe
              className="w-full aspect-16/9 p-2 rounded-2xl"
              src="https://www.youtube.com/embed/1cOu7jMlaPI?si=1uoyleDDhN6CCO2D"
              title="YouTube video player"
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
