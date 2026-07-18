-- CreateEnum
CREATE TYPE "ContentKind" AS ENUM ('GRAMMAR', 'READING', 'LISTENING', 'TRANSLATE_FROM_ES', 'TRANSLATE_TO_ES', 'THEORY', 'VOCABULARY', 'CONJUGATION', 'PLACEMENT');

-- CreateEnum
CREATE TYPE "AttemptKind" AS ENUM ('GRAMMAR', 'VOCABULARY', 'CONJUGATION');

-- CreateEnum
CREATE TYPE "LevelSelectionMethod" AS ENUM ('PLACEMENT', 'MANUAL');

-- CreateTable
CREATE TABLE "ContentItem" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "kind" "ContentKind" NOT NULL,
    "level" "CefrLevel",
    "topic" TEXT,
    "position" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContentItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyPlan" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "localDate" DATE NOT NULL,
    "levelSnapshot" "CefrLevel" NOT NULL,
    "timezoneSnapshot" TEXT NOT NULL,
    "plan" JSONB NOT NULL,
    "progress" JSONB NOT NULL DEFAULT '{}',
    "score" INTEGER,
    "rating" TEXT,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailyPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyAttempt" (
    "id" TEXT NOT NULL,
    "dailyPlanId" TEXT NOT NULL,
    "contentSourceId" TEXT NOT NULL,
    "kind" "AttemptKind" NOT NULL,
    "answer" JSONB NOT NULL,
    "result" JSONB NOT NULL,
    "correctCount" INTEGER NOT NULL,
    "totalCount" INTEGER NOT NULL,
    "correctFirstTry" BOOLEAN NOT NULL,
    "attemptedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlacementAttempt" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "method" "LevelSelectionMethod" NOT NULL,
    "answers" JSONB NOT NULL,
    "score" INTEGER,
    "assignedLevel" "CefrLevel" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlacementAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileLevelEvent" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "fromLevel" "CefrLevel",
    "toLevel" "CefrLevel" NOT NULL,
    "method" "LevelSelectionMethod" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProfileLevelEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContentItem_sourceId_key" ON "ContentItem"("sourceId");

-- CreateIndex
CREATE INDEX "ContentItem_kind_level_active_idx" ON "ContentItem"("kind", "level", "active");

-- CreateIndex
CREATE INDEX "ContentItem_topic_idx" ON "ContentItem"("topic");

-- CreateIndex
CREATE INDEX "DailyPlan_profileId_completedAt_idx" ON "DailyPlan"("profileId", "completedAt");

-- CreateIndex
CREATE UNIQUE INDEX "DailyPlan_profileId_localDate_key" ON "DailyPlan"("profileId", "localDate");

-- CreateIndex
CREATE INDEX "DailyAttempt_dailyPlanId_kind_idx" ON "DailyAttempt"("dailyPlanId", "kind");

-- CreateIndex
CREATE INDEX "DailyAttempt_contentSourceId_attemptedAt_idx" ON "DailyAttempt"("contentSourceId", "attemptedAt");

-- CreateIndex
CREATE UNIQUE INDEX "DailyAttempt_dailyPlanId_contentSourceId_key" ON "DailyAttempt"("dailyPlanId", "contentSourceId");

-- CreateIndex
CREATE INDEX "PlacementAttempt_profileId_createdAt_idx" ON "PlacementAttempt"("profileId", "createdAt");

-- CreateIndex
CREATE INDEX "ProfileLevelEvent_profileId_createdAt_idx" ON "ProfileLevelEvent"("profileId", "createdAt");

-- AddForeignKey
ALTER TABLE "DailyPlan" ADD CONSTRAINT "DailyPlan_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyAttempt" ADD CONSTRAINT "DailyAttempt_dailyPlanId_fkey" FOREIGN KEY ("dailyPlanId") REFERENCES "DailyPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyAttempt" ADD CONSTRAINT "DailyAttempt_contentSourceId_fkey" FOREIGN KEY ("contentSourceId") REFERENCES "ContentItem"("sourceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlacementAttempt" ADD CONSTRAINT "PlacementAttempt_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileLevelEvent" ADD CONSTRAINT "ProfileLevelEvent_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
