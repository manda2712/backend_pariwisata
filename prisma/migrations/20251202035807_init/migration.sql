/*
  Warnings:

  - Added the required column `foto` to the `Kuliner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foto` to the `RumahMakan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foto` to the `desaWisata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Kuliner" ADD COLUMN     "foto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."RumahMakan" ADD COLUMN     "foto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."desaWisata" ADD COLUMN     "foto" TEXT NOT NULL;
