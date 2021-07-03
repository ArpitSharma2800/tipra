CREATE TABLE `user`(
    `id` VARCHAR(255) PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `emailAdd` VARCHAR(255) NOT NULL UNIQUE KEY,
    `username` VARCHAR(255) NOT NULL UNIQUE KEY,
    `age` INT NOT NULL,
    `pwd` VARCHAR(255) NOT NULL,
    `lastLogin` VARCHAR(255) NOT NULL,
    `jwttoken` VARCHAR(255) NOT NULL,
    `profileImage` VARCHAR(255) NOT NULL,
    `joinDate` VARCHAR(255) NOT NULL,
    `lastActive` VARCHAR(255) NOT NULL,
    `gender` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL
);
CREATE TABLE `friends`(
    `relationId` VARCHAR(255) PRIMARY KEY,
    `RequesterId` VARCHAR(255) NOT NULL,
    `AddresseeId` VARCHAR(255) NOT NULL,
    `date` VARCHAR(255) NOT NULL,
    `status` ENUM('waiting', 'accepted') NOT NULL,
    `createDate` VARCHAR(255) NOT NULL
);
CREATE TABLE `address`(
    `addId` VARCHAR(255) PRIMARY KEY,
    `userId` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `state` VARCHAR(255) NOT NULL,
    `country` VARCHAR(255) NOT NULL
);
CREATE TABLE `connection`(
    `connectionId` VARCHAR(255) PRIMARY KEY,
    `isfriend` BOOLEAN   NOT NULL,
    `isclosefriend` BOOLEAN   NOT NULL,
    `isblocked` BOOLEAN   NOT NULL,
    `initiatorId` VARCHAR(255) NOT NULL,
    `facerId` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `friends` ADD CONSTRAINT `friends_addresseeid_foreign` FOREIGN KEY(`AddresseeId`) REFERENCES `user`(`id`);
ALTER TABLE
    `friends` ADD CONSTRAINT `friends_requesterid_foreign` FOREIGN KEY(`RequesterId`) REFERENCES `user`(`id`);
ALTER TABLE
    `connection` ADD CONSTRAINT `connection_initiatorid_foreign` FOREIGN KEY(`initiatorId`) REFERENCES `user`(`id`);
ALTER TABLE
    `connection` ADD CONSTRAINT `connection_facerid_foreign` FOREIGN KEY(`facerId`) REFERENCES `user`(`id`);
ALTER TABLE
    `address` ADD CONSTRAINT `address_userid_foreign` FOREIGN KEY(`userId`) REFERENCES `user`(`id`);




SELECT * FROM user WHERE id NOT IN (SELECT initiatorId from connection WHERE facerId='bf7c65dc-53cc-43e9-8aba-f4e9376c2805') AND id NOT IN ('bf7c65dc-53cc-43e9-8aba-f4e9376c2805')