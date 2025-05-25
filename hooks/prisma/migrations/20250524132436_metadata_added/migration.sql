-- AlterTable
ALTER TABLE "ZapRun" ALTER COLUMN "metadata" DROP DEFAULT;

-- AlterTable
ALTER TABLE "ZapRunOutbox" ALTER COLUMN "metadata" DROP DEFAULT;
