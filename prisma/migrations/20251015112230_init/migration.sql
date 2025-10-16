-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('Admin', 'user');

-- CreateTable
CREATE TABLE "public"."Admin" (
    "id" SERIAL NOT NULL,
    "nama_Lengkap" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Destination" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Destination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Accomodation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "destinationId" INTEGER NOT NULL,

    CONSTRAINT "Accomodation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Rental" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "carType" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "destinationId" INTEGER NOT NULL,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TourPackage" (
    "id" SERIAL NOT NULL,
    "nama_wisata" TEXT NOT NULL,
    "harga" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "kontak" TEXT NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "TourPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Ulasan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "komentar" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ulasan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Event" (
    "id" SERIAL NOT NULL,
    "nameEvent" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "startdate" TIMESTAMP(3) NOT NULL,
    "enddate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Accomodation" ADD CONSTRAINT "Accomodation_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "public"."Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rental" ADD CONSTRAINT "Rental_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "public"."Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
