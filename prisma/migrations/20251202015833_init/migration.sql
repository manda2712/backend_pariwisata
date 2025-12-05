/*
  Warnings:

  - Added the required column `namaDesa` to the `desaWisata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."desaWisata" ADD COLUMN     "namaDesa" TEXT NOT NULL;
