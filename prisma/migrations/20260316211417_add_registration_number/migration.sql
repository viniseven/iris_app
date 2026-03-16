/*
  Warnings:

  - You are about to drop the column `second_name` on the `collaborator` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[registrationNumber]` on the table `collaborator` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `registrationNumber` to the `collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondName` to the `collaborator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "collaborator" DROP COLUMN "second_name",
ADD COLUMN     "registrationNumber" INTEGER NOT NULL,
ADD COLUMN     "secondName" TEXT NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'COLABORADOR';

-- CreateIndex
CREATE UNIQUE INDEX "collaborator_registrationNumber_key" ON "collaborator"("registrationNumber");
