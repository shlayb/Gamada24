import Image from 'next/image';
import CheckItem from './checkboxitem';
Image;

export default function DayTwo() {
  return (
    <>
      <div className="py-16 px-4">
        <h1 className="py-4 text-4xl font-bold">Hari ke-2 dan ke-5</h1>
        <hr className="my-2 border-[1px] " />
        <div>
          <h2 className="text-lg">Perlengkapan/Pakaian Umum:</h2>
          <div className="p-2">
            <CheckItem item="Pakaian Atas" />
            <div className="flex items-center m-2 py-3 px-6 w-[95%] rounded-xl mx-auto bg-green-300 border-green-900 border-[1px] dark:text-green-950 dark:border-lime-100">
              <i className="mr-5 scale-150 fa-solid fa-lightbulb "></i>
              <i>
                Pakaian atas kemeja berlengan, berkerah, berwarna bebas, rapi, dan sopan. Pakaian tidak ketat, dan tidak menerawang serta harus sesuai dengan norma yang berlaku. Mohon tetap membawa dan mengenakan jas almamater dan name tag
                PIONIR Gadjah Mada 2024 <Image src="/outfit-day2.png" alt="" width={0} height={0} sizes="100vw" className="py-2" style={{ width: '100%', height: 'auto' }} />
              </i>
            </div>
            <CheckItem item="Pakaian Bawah " />
            <div className="flex items-center m-2 py-3 px-6 w-[95%] rounded-xl mx-auto bg-green-300 border-green-900 border-[1px] dark:text-green-950 dark:border-lime-100">
              <i className="mr-5 scale-150 fa-solid fa-lightbulb "></i>
              <i>
                a. Laki-laki: celana hitam panjang bahan formal (bukan jeans). <br /> b. Perempuan: rok bahan hitam polos, panjang semata kaki, rapi, dan sopan.
              </i>
            </div>
            <CheckItem item="Jilbab Segiempat Warna Bebas (jika pakai)" />
            <CheckItem item="Atribut Selebrasi Interaktif" />
            <div className="flex items-center m-2 py-3 px-6 w-[95%] rounded-xl mx-auto bg-green-300 border-green-900 border-[1px] dark:text-green-950 dark:border-lime-100">
              <i className="mr-5 scale-150 fa-solid fa-lightbulb "></i>
              <i>
                a. Ketentuan Umum : Pada hari kedua PIONIR Gadjah Mada 2024, Gamada diminta membawa atribut yang akan digunakan pada pembuatan selebrasi interaktif Cakra Sankhara. <br /> b. Ketentuan Selebrasi Interaktif: <br />
                Adapun atribut yang Gamada bawa pada hari kedua PIONIR Gadjah Mada 2024 (Selasa, 30 Juli 2024) adalah sebagai berikut: <br />
                <CheckItem item="Kertas asturo hitam sisa pembuatan Asthakarsa." />
                <CheckItem item="Crayon berwarna 12 warna." />
                <CheckItem item="Soft File foto diri formal menggunakan Almamater dengan kemeja berwarna putih ukuran 34.." />
                <CheckItem item="Satu set ATK standar berupa double tape kertas ukuran 12 mm, penggaris ukuran 30 cm, lem PVA serbaguna cair 7 mL, dan gunting." />
              </i>
            </div>
            <CheckItem item="Print out LP.K. 2.2_Yuk Kelola Keuanganmu" link="http://ugm.id/LPKKEUANGAN" />
            <div className="flex items-center m-8 py-3 px-6 w-full rounded-xl mx-auto bg-green-300 border-green-900 border-[1px] dark:text-green-950 dark:border-lime-100">
              <i className="mr-5 scale-150 fa-solid fa-lightbulb "></i>
              <div>
                <h3 className="font-medium text-xl py-1">Catatan Khusus</h3>
                <li>Mengikuti seluruh peraturan universitas.</li>
                <li>Bagi yang memiliki masalah kesehatan (jika perlu disertai surat dokter ber-SIP) wajib lapor pemandu/Co-fasilitator. Mohon disiapkan pita merah dan peniti yang disematkan di lengan kiri selama kegiatan.</li>
                <li>Bagi yang menjalani diet khusus, harap mempersiapkan keperluannya secara mandiri.</li>
                <li>Dilarang membawa dan memakai perhiasan secara berlebihan.</li>
                <li>Dilarang membawa senjata tajam dan obat-obatan terlarang.</li>
                <li>Dilarang merokok/vape dan minum beralkohol selama kegiatan.</li>
                <li>Dilarang melakukan tindakan asusila.</li>
                <li>Setiap peserta wajib menjaga kehormatan diri dan institusi.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
