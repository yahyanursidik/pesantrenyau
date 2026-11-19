// Semua data pesantren di satu tempat — ubah di sini, seluruh halaman ikut berubah.

export const site = {
  name: "Pesantren Gratis Tahfidz Qur'an Yatim & Dhuafa Abu Ubaidah bin Al Jarrah",
  shortName: 'Pesantren Gratis Abu Ubaidah',
  arabic: 'أبو عبيدة بن الجراح',
  // Jadwal pendaftaran — ubah di sini saat tanggal resmi diumumkan.
  tahunAjaran: '2027/2028',
  tahunLulusSD: '2027',
  batasUsia: 'akhir Juli 2027',
  status: 'Segera dibuka',
  jadwal: 'Jadwal pendaftaran segera diumumkan',
  ctaLabel: 'Lihat syarat & formulir',
  daftarUrl: 'https://bagi.to/daftarpesantrengratis',
  lokasiUrl: 'https://bagi.to/LokasiPondok',
  wa: { display: '0812-9351-209', number: '628129351209' },
  instagram: {
    handle: 'pesantrengratisabuubaidah',
    url: 'https://www.instagram.com/pesantrengratisabuubaidah',
  },
  alamat: {
    jalan: 'Kampung Jeplek, RT 03 RW 01',
    desa: 'Desa Cipada 2',
    kecamatan: 'Kecamatan Cisarua',
    kabupaten: 'Kabupaten Bandung Barat',
    provinsi: 'Jawa Barat',
  },
  bank: { nama: 'BSI', atasNama: 'Operasional Pesantren Gratis', rekening: '1444-1444-98' },
  qrisNmid: 'ID1025384363285',
  pembina: 'Ust. Yusuf Abu Ubaidah As-Sidawi',
  mudir: 'Ust. Mochamad Samsul Arif, B.Sh.',
  yauUrl: 'https://abiubaidah.com',
} as const;

export const waLink = (text: string) =>
  `https://wa.me/${site.wa.number}?text=${encodeURIComponent(text)}`;

export const WA_TANYA = waLink(
  `Assalamu'alaikum, saya ingin bertanya tentang pendaftaran santri baru Pesantren Gratis Abu Ubaidah ${site.tahunAjaran}.`
);
export const WA_DONASI = waLink(
  "Assalamu'alaikum, saya ingin konfirmasi infak untuk operasional Pesantren Gratis Abu Ubaidah."
);

export const syarat = [
  { title: 'Ikhwan (laki-laki)', note: 'Pesantren ini khusus santri putra.' },
  { title: 'Usia maksimal 13 tahun', note: `Dihitung pada ${site.batasUsia}.` },
  { title: 'Yatim piatu, yatim, atau dhuafa', note: 'Diprioritaskan bagi yang paling membutuhkan.' },
  {
    title: `Lulus SD tahun ${site.tahunLulusSD}`,
    note: `Akan masuk kelas 1 SMP pada tahun ajaran ${site.tahunAjaran}.`,
  },
];

export type Video = {
  id: string;
  kind: 'p' | 'reel';
  tag: string;
  title: string;
  desc: string;
};

// Tambah video MMA / futsal cukup dengan menambah baris di sini (ambil ID dari URL Instagram).
export const videos: Video[] = [
  {
    id: 'DdMH-1TTIpt',
    kind: 'reel',
    tag: 'Profil',
    title: 'Sekilas tentang pesantren',
    desc: 'Kenalan singkat dengan Pesantren Gratis Abu Ubaidah bin Al Jarrah.',
  },
  {
    id: 'DdvMtyNTBxV',
    kind: 'p',
    tag: 'Keseharian',
    title: 'Sehari di pondok',
    desc: 'A day in Abu Ubaidah bin Jarrah Islamic Boarding School.',
  },
  {
    id: 'DdkPwQYzgWZ',
    kind: 'p',
    tag: 'Belajar',
    title: 'Hafalan matan',
    desc: "Selain Al-Qur'an, santri juga menghafal matan ilmu.",
  },
  {
    id: 'DeuC7pUTRaU',
    kind: 'p',
    tag: 'Kabar pekan ini',
    title: 'Arbain & Al-Ajurumiyyah',
    desc: 'Kelas 7 sampai hadis ke-21; kelas 8 mulai belajar nahwu.',
  },
];

export const igUrl = (v: Video) => `https://www.instagram.com/${v.kind}/${v.id}/`;
export const igEmbed = (v: Video) => `https://www.instagram.com/${v.kind}/${v.id}/embed/captioned/`;

export const nav = [
  { href: '#biaya', label: 'Biaya' },
  { href: '#kurikulum', label: 'Kurikulum' },
  { href: '#kegiatan', label: 'Kegiatan' },
  { href: '#pendaftaran', label: 'Syarat' },
  { href: '#donasi', label: 'Donasi' },
  { href: '#kontak', label: 'Kontak' },
];
