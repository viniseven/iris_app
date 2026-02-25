-- CreateEnum
CREATE TYPE "afiliationType" AS ENUM ('ASELC', 'TERCEIRIZADA', 'EXTERNO');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('FACILITADOR', 'FORMANDO', 'COLABORADOR', 'CONVIDADO');

-- CreateTable
CREATE TABLE "department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collaborator" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "second_name" TEXT NOT NULL,
    "afiliationType" "afiliationType" NOT NULL DEFAULT 'ASELC',
    "departmentId" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'FACILITADOR',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collaborator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "department_name_key" ON "department"("name");

-- AddForeignKey
ALTER TABLE "collaborator" ADD CONSTRAINT "collaborator_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
