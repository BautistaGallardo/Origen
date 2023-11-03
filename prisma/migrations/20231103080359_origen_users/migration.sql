/*
  Warnings:

  - You are about to drop the `PatientDocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfessionalDocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `birthday` on the `Professional` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Professional` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Professional` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Professional` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Professional` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Professional` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `Professional` table. All the data in the column will be lost.
  - You are about to drop the column `birthday` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Professional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "PatientDocument_patientId_key";

-- DropIndex
DROP INDEX "PatientDocument_IdentityNumber_key";

-- DropIndex
DROP INDEX "PatientDocument_id_key";

-- DropIndex
DROP INDEX "ProfessionalDocument_professionalId_key";

-- DropIndex
DROP INDEX "ProfessionalDocument_IdentityNumber_key";

-- DropIndex
DROP INDEX "ProfessionalDocument_id_key";

-- AlterTable
ALTER TABLE "AdminUser" ADD COLUMN "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "AdminUser" ADD COLUMN "updatedAt" DATETIME;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PatientDocument";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ProfessionalDocument";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birthday" DATETIME NOT NULL,
    "verified" BOOLEAN DEFAULT false
);

-- CreateTable
CREATE TABLE "TypeDocument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "IdentityNumber" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "TypeDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professional" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "photo" TEXT DEFAULT 'default.png',
    "speciality" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Professional_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Professional" ("createdAt", "id", "photo", "speciality", "updatedAt") SELECT "createdAt", "id", "photo", "speciality", "updatedAt" FROM "Professional";
DROP TABLE "Professional";
ALTER TABLE "new_Professional" RENAME TO "Professional";
CREATE UNIQUE INDEX "Professional_id_key" ON "Professional"("id");
CREATE UNIQUE INDEX "Professional_userId_key" ON "Professional"("userId");
CREATE TABLE "new_Patient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "photo" TEXT DEFAULT 'default.png',
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Patient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Patient" ("createdAt", "id", "photo", "updatedAt") SELECT "createdAt", "id", "photo", "updatedAt" FROM "Patient";
DROP TABLE "Patient";
ALTER TABLE "new_Patient" RENAME TO "Patient";
CREATE UNIQUE INDEX "Patient_id_key" ON "Patient"("id");
CREATE UNIQUE INDEX "Patient_userId_key" ON "Patient"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "TypeDocument_id_key" ON "TypeDocument"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TypeDocument_IdentityNumber_key" ON "TypeDocument"("IdentityNumber");

-- CreateIndex
CREATE UNIQUE INDEX "TypeDocument_userId_key" ON "TypeDocument"("userId");
