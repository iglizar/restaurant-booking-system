/*
  Warnings:

  - You are about to drop the `Reservation` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[href]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `Restaurant` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_TableId_fkey";

-- DropIndex
DROP INDEX "Restaurant_name_key";

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "href" TEXT,
ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "Reservation";

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "date" TEXT,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "peopleQuantity" INTEGER NOT NULL,
    "TableId" INTEGER NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_href_key" ON "Restaurant"("href");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_TableId_fkey" FOREIGN KEY ("TableId") REFERENCES "Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
