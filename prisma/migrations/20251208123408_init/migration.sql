-- CreateTable
CREATE TABLE "public"."Hotel" (
    "id" SERIAL NOT NULL,
    "nama_hotel" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "telepon" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "jumlah_kamar" TEXT NOT NULL,
    "jumlah_tempatTidur" TEXT NOT NULL,
    "harga" TEXT,
    "website" TEXT,
    "lokasi" TEXT NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);
