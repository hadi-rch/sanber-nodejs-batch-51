# Sanbercode Bootcamp - NodeJS Batch 51

Repositori ini berisi kumpulan materi, tugas, kuis, dan proyek akhir dari Bootcamp NodeJS Batch 51 di Sanbercode.

## Daftar Isi

- [Tentang Bootcamp](#tentang-bootcamp)
- [Materi yang Dipelajari](#materi-yang-dipelajari)
- [Struktur Repositori](#struktur-repositori)
- [Proyek Akhir](#proyek-akhir)
- [Cara Menjalankan Contoh Kode](#cara-menjalankan-contoh-kode)

## Tentang Bootcamp

Bootcamp NodeJS Batch 51 Sanbercode adalah program pelatihan intensif yang mencakup berbagai aspek pengembangan backend menggunakan Node.js dan teknologi terkait.

## Materi yang Dipelajari

Berikut adalah topik-topik utama yang telah dipelajari selama bootcamp:

1.  **Dasar-dasar JavaScript & ES6:**
    *   Variabel, tipe data, operator
    *   Conditional (if/else, switch)
    *   Looping (for, while, do-while)
    *   Function (deklarasi, ekspresi, arrow function)
    *   Array dan manipulasi array
    *   Object dan manipulasi object
    *   Fitur ES6 (let, const, template literals, destructuring, spread/rest operator, module)
    *   Class dan Object-Oriented Programming (OOP) dasar
    *   Asynchronous JavaScript (Callback, Promise, Async/Await)

2.  **Node.js:**
    *   Pengenalan Node.js dan arsitekturnya
    *   NPM (Node Package Manager)
    *   Module system (CommonJS)
    *   File System (fs module)
    *   HTTP module

3.  **SQL & Database:**
    *   Dasar-dasar SQL (SELECT, INSERT, UPDATE, DELETE, JOIN)
    *   Desain database dan ERD (Entity Relationship Diagram)

4.  **REST API dengan Express.js:**
    *   Pengenalan Express.js framework
    *   Routing
    *   Middleware
    *   Request dan Response handling
    *   CRUD operations
    *   Integrasi dengan database menggunakan Sequelize ORM
    *   Konsep Model, View (opsional), Controller (MVC)

5.  **REST API dengan AdonisJS:**
    *   Pengenalan AdonisJS v5 framework
    *   Struktur proyek AdonisJS
    *   Routing dan Controllers
    *   Middleware
    *   Validasi request (Validators)
    *   Lucid ORM (Models, Migrations, Factories)
    *   Authentication (dasar)
    *   Error Handling

## Struktur Repositori

Repositori ini diorganisir sebagai berikut:

*   `Materi-X/`: Berisi kode atau catatan terkait materi yang disampaikan pada pertemuan ke-X.
    *   Contoh: `Materi-7/` (Class), `Materi-13/` (AdonisJS).
*   `Tugas-X/`: Berisi solusi untuk tugas-tugas yang diberikan.
    *   Contoh: `Tugas-2/` (Conditional, String), `Tugas-6 - ES6/`, `Tugas-11 - REST API Express/`, `Tugas-14 - Adonis Migration/`.
*   `Quiz-X/`: Berisi solusi untuk kuis yang diadakan.
    *   Contoh: `Quiz-3/` (kemungkinan besar AdonisJS).
*   `Final Project/`: Berisi kode sumber untuk proyek akhir bootcamp.
    *   Proyek ini tampaknya dibangun menggunakan AdonisJS.

## Proyek Akhir

Proyek akhir merupakan aplikasi full-stack atau backend komprehensif yang mengimplementasikan sebagian besar konsep yang telah dipelajari selama bootcamp, terutama menggunakan AdonisJS. Detail lebih lanjut mengenai proyek akhir dapat ditemukan di dalam direktori `Final Project/final-project/README.md` (jika ada) atau dengan menjelajahi kode sumbernya.

## Cara Menjalankan Contoh Kode

Instruksi untuk menjalankan kode dapat bervariasi tergantung pada proyek atau tugas tertentu.

**Untuk Proyek Express.js (misalnya, `Tugas-11 - REST API Express/`, `Tugas-12 - CRUD Express Sequelize/`):**

1.  Masuk ke direktori proyek: `cd "Tugas-11 - REST API Express/"` (gunakan tanda kutip jika ada spasi)
2.  Install dependencies: `npm install`
3.  Jalankan aplikasi: `npm start` atau `node app.js` (atau sesuai dengan skrip di `package.json`)

**Untuk Proyek AdonisJS (misalnya, `Materi-13/test-13/`, `Quiz-3/quiz-3/`, `Tugas-13 - REST API Adonis/api-perpustakaan/`, `Final Project/final-project/`):**

1.  Masuk ke direktori proyek: `cd "Final Project/final-project/"` (gunakan tanda kutip jika ada spasi)
2.  Install dependencies: `npm install`
3.  Salin file environment: `cp .env.example .env`
4.  Generate key aplikasi (jika belum ada di `.env`): `node ace generate:key`
5.  Konfigurasi database Anda di file `.env`.
6.  Jalankan migrasi (jika ada): `node ace migration:run`
7.  Jalankan server development: `node ace serve --watch`

Selalu periksa file `package.json` di setiap direktori proyek untuk skrip spesifik dan dependensi yang dibutuhkan. Beberapa tugas mungkin hanya berupa file JavaScript tunggal yang bisa dijalankan langsung dengan `node nama_file.js`.

---

Selamat menjelajahi dan semoga bermanfaat!
