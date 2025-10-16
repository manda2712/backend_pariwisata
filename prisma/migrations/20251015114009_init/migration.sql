/*
  Warnings:

  - You are about to drop the column `foto` on the `TourPackage` table. All the data in the column will be lost.
  - Added the required column `media` to the `TourPackage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."TourPackage" DROP COLUMN "foto",
ADD COLUMN     "media" TEXT NOT NULL;
