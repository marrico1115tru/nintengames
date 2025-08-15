/*
  Warnings:

  - Changed the type of `year` on the `games` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `games` MODIFY `version` VARCHAR(32) NULL,
    DROP COLUMN `year`,
    ADD COLUMN `year` DATETIME(3) NOT NULL;
