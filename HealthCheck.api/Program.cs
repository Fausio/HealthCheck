
using ICMPHealthCheck.domain.models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
 
builder.Services.AddHealthChecks()
.AddCheck("ICMP_01",
new ICMPHealthCheck.domain.models.ICMPHealthCheck("www.ryadel.com", 100))
.AddCheck("ICMP_02",
new ICMPHealthCheck.domain.models.ICMPHealthCheck("www.google.com", 100))
.AddCheck("ICMP_03",
new ICMPHealthCheck.domain.models.ICMPHealthCheck("www.logicsystems.co.mz", 100))
.AddCheck("ICMP_04",
new ICMPHealthCheck.domain.models.ICMPHealthCheck($"www.{Guid.NewGuid():N}.com", 100));
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAnyOrigin",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAnyOrigin");
app.UseHttpsRedirection();
app.UseAuthorization();
app.UseHealthChecks(new PathString("/api/health"),
new CustomHealthCheckOptions());
app.MapControllers();
app.Run();
