-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "verified" BOOLEAN DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "photo" TEXT DEFAULT 'default.png',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeDocument" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "IdentityNumber" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "TypeDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pendiente',
    "reservationDate" TIMESTAMP(3) NOT NULL,
    "patientId" TEXT NOT NULL,
    "appointmentId" TEXT NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professional" (
    "id" TEXT NOT NULL,
    "photo" TEXT DEFAULT 'default.png',
    "speciality" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,

    CONSTRAINT "Professional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalAppointment" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "timeStart" TIMESTAMP(3) NOT NULL,
    "status" INTEGER NOT NULL,
    "professionalId" TEXT NOT NULL,

    CONSTRAINT "MedicalAppointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeAppointment" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "appointmentId" TEXT NOT NULL,

    CONSTRAINT "TypeAppointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppointmentObservations" (
    "id" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "pofessionalId" TEXT NOT NULL,
    "appointmenttId" TEXT NOT NULL,

    CONSTRAINT "AppointmentObservations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_id_key" ON "Patient"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_userId_key" ON "Patient"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "TypeDocument_id_key" ON "TypeDocument"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TypeDocument_IdentityNumber_key" ON "TypeDocument"("IdentityNumber");

-- CreateIndex
CREATE UNIQUE INDEX "TypeDocument_userId_key" ON "TypeDocument"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_id_key" ON "Reservation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_patientId_key" ON "Reservation"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_appointmentId_key" ON "Reservation"("appointmentId");

-- CreateIndex
CREATE UNIQUE INDEX "Professional_id_key" ON "Professional"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Professional_userId_key" ON "Professional"("userId");

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

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeDocument" ADD CONSTRAINT "TypeDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "MedicalAppointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalAppointment" ADD CONSTRAINT "MedicalAppointment_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "Professional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeAppointment" ADD CONSTRAINT "TypeAppointment_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "MedicalAppointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentObservations" ADD CONSTRAINT "AppointmentObservations_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentObservations" ADD CONSTRAINT "AppointmentObservations_pofessionalId_fkey" FOREIGN KEY ("pofessionalId") REFERENCES "Professional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentObservations" ADD CONSTRAINT "AppointmentObservations_appointmenttId_fkey" FOREIGN KEY ("appointmenttId") REFERENCES "MedicalAppointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
