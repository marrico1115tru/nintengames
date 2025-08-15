/*
  Warnings:

  - You are about to drop the column `year` on the `games` table. All the data in the column will be lost.
  - Made the column `version` on table `games` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `games` DROP COLUMN `year`,
    MODIFY `version` INTEGER NOT NULL;
