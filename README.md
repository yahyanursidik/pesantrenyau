# Landing page — Pesantren Gratis Abu Ubaidah bin Al Jarrah

Astro 7.4, halaman statis tunggal.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/, siap diunggah ke Netlify/Vercel/Cloudflare Pages/hosting biasa
```

- Semua data (tanggal, kontak, rekening, syarat, daftar video) ada di `src/data/site.ts`.
- Tambah video galeri: tambahkan baris ke `videos` di `src/data/site.ts` (ID diambil dari URL Instagram).
- Ganti domain di `astro.config.mjs` (`site`) sebelum deploy.
