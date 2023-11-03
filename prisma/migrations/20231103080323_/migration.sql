/*
  Warnings:

  - Added the required column `speciality` to the `Professional` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professional" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo" TEXT DEFAULT 'default.png',
    "phone" TEXT NOT NULL,
    "speciality" TEXT NOT NULL,
    "birthday" DATETIME NOT NULL,
    "verified" BOOLEAN DEFAULT false,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_Professional" ("birthday", "createdAt", "email", "id", "lastName", "name", "password", "phone", "photo", "updatedAt", "verified") SELECT "birthday", "createdAt", "email", "id", "lastName", "name", "password", "phone", "photo", "updatedAt", "verified" FROM "Professional";
DROP TABLE "Professional";
ALTER TABLE "new_Professional" RENAME TO "Professional";
CREATE UNIQUE INDEX "Professional_id_key" ON "Professional"("id");
CREATE UNIQUE INDEX "Professional_email_key" ON "Professional"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
