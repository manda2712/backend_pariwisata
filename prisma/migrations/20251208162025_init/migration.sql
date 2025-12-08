/*
  Warnings:

  - Added the required column `link_gmaps` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link_gmaps` to the `RumahMakan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Hotel" ADD COLUMN     "link_gmaps" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."RumahMakan" ADD COLUMN     "link_gmaps" TEXT NOT NULL;
