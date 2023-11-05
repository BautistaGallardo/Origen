-- CreateTable
CREATE TABLE "Patient" (
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

-- CreateTable
CREATE TABLE "PatientDocument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "IdentityNumber" INTEGER NOT NULL,
    "patientId" TEXT NOT NULL,
    CONSTRAINT "PatientDocument_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL DEFAULT 'pendiente',
    "reservationDate" DATETIME NOT NULL,
    "patientId" TEXT NOT NULL,
    "appointmentId" TEXT NOT NULL,
    CONSTRAINT "Reservation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reservation_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "MedicalAppointment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Professional" (
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

-- CreateTable
CREATE TABLE "ProfessionalDocument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "IdentityNumber" INTEGER NOT NULL,
    "professionalId" TEXT NOT NULL,
    CONSTRAINT "ProfessionalDocument_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "Professional" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MedicalAppointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "timeStart" DATETIME NOT NULL,
    "status" INTEGER NOT NULL,
    "professionalId" TEXT NOT NULL,
    CONSTRAINT "MedicalAppointment_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "Professional" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TypeAppointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "appointmentId" TEXT NOT NULL,
    CONSTRAINT "TypeAppointment_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "MedicalAppointment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AppointmentObservations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "note" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "pofessionalId" TEXT NOT NULL,
    "appointmenttId" TEXT NOT NULL,
    CONSTRAINT "AppointmentObservations_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AppointmentObservations_pofessionalId_fkey" FOREIGN KEY ("pofessionalId") REFERENCES "Professional" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AppointmentObservations_appointmenttId_fkey" FOREIGN KEY ("appointmenttId") REFERENCES "MedicalAppointment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Patient_id_key" ON "Patient"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_password_key" ON "Patient"("password");

-- CreateIndex
CREATE UNIQUE INDEX "PatientDocument_id_key" ON "PatientDocument"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PatientDocument_IdentityNumber_key" ON "PatientDocument"("IdentityNumber");

-- CreateIndex
CREATE UNIQUE INDEX "PatientDocument_patientId_key" ON "PatientDocument"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_id_key" ON "Reservation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_patientId_key" ON "Reservation"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_appointmentId_key" ON "Reservation"("appointmentId");

-- CreateIndex
CREATE UNIQUE INDEX "Professional_id_key" ON "Professional"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Professional_email_key" ON "Professional"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ProfessionalDocument_id_key" ON "ProfessionalDocument"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProfessionalDocument_IdentityNumber_key" ON "ProfessionalDocument"("IdentityNumber");

-- CreateIndex
CREATE UNIQUE INDEX "ProfessionalDocument_professionalId_key" ON "ProfessionalDocument"("professionalId");

-- CreateIndex
CREATE UNIQUE INDEX "MedicalAppointment_id_key" ON "MedicalAppointment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TypeAppointment_id_key" ON "TypeAppointment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TypeAppointment_appointmentId_key" ON "TypeAppointment"("appointmentId");

-- CreateIndex
CREATE UNIQUE INDEX "AppointmentObservations_id_key" ON "AppointmentObservations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AppointmentObservations_patientId_key" ON "AppointmentObservations"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "AppointmentObservations_pofessionalId_key" ON "AppointmentObservations"("pofessionalId");

-- CreateIndex
CREATE UNIQUE INDEX "AppointmentObservations_appointmenttId_key" ON "AppointmentObservations"("appointmenttId");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_id_key" ON "AdminUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_name_key" ON "AdminUser"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_password_key" ON "AdminUser"("password");
