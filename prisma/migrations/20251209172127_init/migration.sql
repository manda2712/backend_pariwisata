/*
  Warnings:

  - You are about to drop the column `alamat` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `deskripsi` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `foto` on the `RumahMakan` table. All the data in the column will be lost.
  - You are about to drop the column `lokasi` on the `RumahMakan` table. All the data in the column will be lost.
  - You are about to drop the column `jalur_darat` on the `desaWisata` table. All the data in the column will be lost.
  - You are about to drop the column `jalur_laut` on the `desaWisata` table. All the data in the column will be lost.
  - You are about to drop the column `jalur_udara` on the `desaWisata` table. All the data in the column will be lost.
  - Added the required column `lokasi` to the `Kuliner` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Kota" AS ENUM ('PALU', 'LUWUK');

-- CreateEnum
CREATE TYPE "public"."Jalur" AS ENUM ('DARAT', 'UDARA', 'LAUT');

-- AlterTable
ALTER TABLE "public"."Hotel" DROP COLUMN "alamat",
DROP COLUMN "deskripsi";

-- AlterTable
ALTER TABLE "public"."Kuliner" ADD COLUMN     "lokasi" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."RumahMakan" DROP COLUMN "foto",
DROP COLUMN "lokasi";

-- AlterTable
ALTER TABLE "public"."desaWisata" DROP COLUMN "jalur_darat",
DROP COLUMN "jalur_laut",
DROP COLUMN "jalur_udara";

-- CreateTable
CREATE TABLE "public"."jarakDesa" (
    "id" SERIAL NOT NULL,
    "desaId" INTEGER NOT NULL,
    "titikKota" "public"."Kota" NOT NULL,
    "jalur" "public"."Jalur" NOT NULL,
    "jarakKm" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "jarakDesa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."jarakDesa" ADD CONSTRAINT "jarakDesa_desaId_fkey" FOREIGN KEY ("desaId") REFERENCES "public"."desaWisata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
