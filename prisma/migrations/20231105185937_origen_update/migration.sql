-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TypeDocument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "IdentityNumber" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "TypeDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TypeDocument" ("IdentityNumber", "id", "type", "userId") SELECT "IdentityNumber", "id", "type", "userId" FROM "TypeDocument";
DROP TABLE "TypeDocument";
ALTER TABLE "new_TypeDocument" RENAME TO "TypeDocument";
CREATE UNIQUE INDEX "TypeDocument_id_key" ON "TypeDocument"("id");
CREATE UNIQUE INDEX "TypeDocument_IdentityNumber_key" ON "TypeDocument"("IdentityNumber");
CREATE UNIQUE INDEX "TypeDocument_userId_key" ON "TypeDocument"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
