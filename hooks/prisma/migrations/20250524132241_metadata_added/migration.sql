-- AlterTable
ALTER TABLE "ZapRun" ADD COLUMN     "metadata" JSONB NOT NULL DEFAULT '{}';

-- AlterTable
ALTER TABLE "ZapRunOutbox" ADD COLUMN     "metadata" JSONB NOT NULL DEFAULT '{}';
