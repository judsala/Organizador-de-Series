IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
ALTER TABLE [Series] ADD [ImagemUrl] nvarchar(max) NOT NULL DEFAULT N'';

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20250529163516_AddImagemUrlToSerie', N'9.0.3');

ALTER TABLE [Series] DROP CONSTRAINT [FK_Series_User_UserId];

ALTER TABLE [User] DROP CONSTRAINT [PK_User];

EXEC sp_rename N'[User]', N'Users', 'OBJECT';

ALTER TABLE [Users] ADD CONSTRAINT [PK_Users] PRIMARY KEY ([Id]);

ALTER TABLE [Series] ADD CONSTRAINT [FK_Series_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [Users] ([Id]) ON DELETE CASCADE;

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20250529192610_RenameUserTable', N'9.0.3');

COMMIT;
GO

