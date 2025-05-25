/*
  Warnings:

  - You are about to drop the column `actionTypeId` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `AvailableAction` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `AvailableAction` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `AvailableTrigger` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `AvailableTrigger` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Trigger` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Trigger` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Trigger` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Zap` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Zap` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Zap` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ZapRun` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ZapRun` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ZapRunOutbox` table. All the data in the column will be lost.
  - You are about to drop the column `metadata` on the `ZapRunOutbox` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ZapRunOutbox` table. All the data in the column will be lost.
  - Added the required column `actionId` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `AvailableAction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `AvailableTrigger` table without a default value. This is not possible if the table is not empty.
  - Added the required column `triggerId` to the `Trigger` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Zap` table without a default value. This is not possible if the table is not empty.
  - Made the column `metadata` on table `ZapRun` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_actionTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Trigger" DROP CONSTRAINT "Trigger_typeId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Action" DROP COLUMN "actionTypeId",
DROP COLUMN "createdAt",
DROP COLUMN "name",
DROP COLUMN "updatedAt",
ADD COLUMN     "actionId" TEXT NOT NULL,
ADD COLUMN     "metadata" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "sortingOrder" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "AvailableAction" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "AvailableTrigger" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Trigger" DROP COLUMN "createdAt",
DROP COLUMN "typeId",
DROP COLUMN "updatedAt",
ADD COLUMN     "metadata" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "triggerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Zap" DROP COLUMN "createdAt",
DROP COLUMN "name",
DROP COLUMN "updatedAt",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ZapRun" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ALTER COLUMN "metadata" SET NOT NULL,
ALTER COLUMN "metadata" DROP DEFAULT;

-- AlterTable
ALTER TABLE "ZapRunOutbox" DROP COLUMN "createdAt",
DROP COLUMN "metadata",
DROP COLUMN "updatedAt";

-- AddForeignKey
ALTER TABLE "Zap" ADD CONSTRAINT "Zap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "AvailableTrigger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "AvailableAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
