/*
  Warnings:

  - You are about to drop the column `jalur` on the `jarakDesa` table. All the data in the column will be lost.
  - You are about to drop the column `jarakKm` on the `jarakDesa` table. All the data in the column will be lost.
  - Added the required column `jalur_darat` to the `jarakDesa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jalur_laut` to the `jarakDesa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jalur_udara` to the `jarakDesa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."jarakDesa" DROP COLUMN "jalur",
DROP COLUMN "jarakKm",
ADD COLUMN     "jalur_darat" TEXT NOT NULL,
ADD COLUMN     "jalur_laut" TEXT NOT NULL,
ADD COLUMN     "jalur_udara" TEXT NOT NULL;

-- DropEnum
DROP TYPE "public"."Jalur";
