-- AlterTable
ALTER TABLE "ZapRun" ALTER COLUMN "metadata" DROP NOT NULL,
ALTER COLUMN "metadata" SET DEFAULT '{}';

-- AlterTable
ALTER TABLE "ZapRunOutbox" ALTER COLUMN "metadata" DROP NOT NULL,
ALTER COLUMN "metadata" SET DEFAULT '{}';
