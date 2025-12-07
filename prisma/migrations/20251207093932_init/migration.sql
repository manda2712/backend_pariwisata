/*
  Warnings:

  - You are about to drop the column `jalaur_udara` on the `desaWisata` table. All the data in the column will be lost.
  - Added the required column `jalur_udara` to the `desaWisata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."desaWisata" DROP COLUMN "jalaur_udara",
ADD COLUMN     "jalur_udara" TEXT NOT NULL;
