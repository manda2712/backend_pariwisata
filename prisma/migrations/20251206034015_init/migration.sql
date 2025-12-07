/*
  Warnings:

  - You are about to drop the column `nama_lengkap` on the `Kuliner` table. All the data in the column will be lost.
  - Added the required column `nama_makanan` to the `Kuliner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Kuliner" DROP COLUMN "nama_lengkap",
ADD COLUMN     "nama_makanan" TEXT NOT NULL;
