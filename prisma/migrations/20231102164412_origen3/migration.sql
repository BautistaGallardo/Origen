/*
  Warnings:

  - You are about to alter the column `birthday` on the `Patient` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Patient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo" TEXT DEFAULT 'default.png',
    "phone" TEXT NOT NULL,
    "birthday" DATETIME NOT NULL,
    "verified" BOOLEAN DEFAULT false,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_Patient" ("birthday", "createdAt", "email", "id", "lastName", "name", "password", "phone", "photo", "updatedAt", "verified") SELECT "birthday", "createdAt", "email", "id", "lastName", "name", "password", "phone", "photo", "updatedAt", "verified" FROM "Patient";
DROP TABLE "Patient";
ALTER TABLE "new_Patient" RENAME TO "Patient";
CREATE UNIQUE INDEX "Patient_id_key" ON "Patient"("id");
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");
CREATE UNIQUE INDEX "Patient_password_key" ON "Patient"("password");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
