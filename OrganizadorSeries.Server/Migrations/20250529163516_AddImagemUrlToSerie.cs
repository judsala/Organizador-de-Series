using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OrganizadorSeries.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddImagemUrlToSerie : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImagemUrl",
                table: "Series",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImagemUrl",
                table: "Series");
        }
    }
}
