/*
  Warnings:

  - You are about to drop the `Accomodation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Destination` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rental` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."JenisDesa" AS ENUM ('DESA_UNGGULAN', 'DESA_WISATA');

-- DropForeignKey
ALTER TABLE "public"."Accomodation" DROP CONSTRAINT "Accomodation_destinationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Rental" DROP CONSTRAINT "Rental_destinationId_fkey";

-- DropTable
DROP TABLE "public"."Accomodation";

-- DropTable
DROP TABLE "public"."Destination";

-- DropTable
DROP TABLE "public"."Rental";

-- CreateTable
CREATE TABLE "public"."desaWisata" (
    "id" SERIAL NOT NULL,
    "lokasi" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "jenisDesa" "public"."JenisDesa" NOT NULL,
    "jalur_darat" TEXT NOT NULL,
    "jalaur_udara" TEXT NOT NULL,
    "jalur_laut" TEXT NOT NULL,

    CONSTRAINT "desaWisata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Kuliner" (
    "id" SERIAL NOT NULL,
    "nama_lengkap" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,

    CONSTRAINT "Kuliner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RumahMakan" (
    "id" SERIAL NOT NULL,
    "resto" TEXT NOT NULL,
    "kulinerId" INTEGER NOT NULL,
    "lokasi" TEXT NOT NULL,

    CONSTRAINT "RumahMakan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."RumahMakan" ADD CONSTRAINT "RumahMakan_kulinerId_fkey" FOREIGN KEY ("kulinerId") REFERENCES "public"."Kuliner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
