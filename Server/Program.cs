using System.Net;
using Microsoft.AspNetCore.Mvc;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Disclaimer: I should have probably put the different paths directly in appsettings and appsettings.development but whatever, I learned a lot
        // Setting up WebHost to use my own HTTPS certificate specified at the path indicated by the environment variable ---------------------------------
        string? certFolderPath = Environment.GetEnvironmentVariable("Dr3EmUr_Server_SSLCertificate_Path");

        if (certFolderPath == null)
            throw new Exception("ERROR: Environment variable with SSL cert not found");

        string certPath = Path.Combine(certFolderPath, "cert.pem");
        string keyPath = Path.Combine(certFolderPath, "key.pem");

        builder.Configuration["Kestrel:Certificates:Default:Path"] = certPath;
        builder.Configuration["Kestrel:Certificates:Default:KeyPath"] = keyPath;

        builder.WebHost.UseKestrel((options) =>
        {
            options.Listen(IPAddress.Any, 443, listenerOptions =>
            {
                listenerOptions.UseHttps();
            });
            options.Listen(IPAddress.Any, 80, listenerOptions =>
            {

            });
        });

        // End of HTTPS setup --------------------------------------------------------------------------------------------------------------------------------

        builder.Services.AddControllers();
        builder.Services.AddHttpsRedirection((options)=>{
            options.HttpsPort = 443;
        });

        builder.Services.AddSingleton<WebSocketService>();

        var app = builder.Build();
        

        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.MapDefaultControllerRoute();

        app.UseWebSockets();

        

        app.MapFallback((ctx) =>
        {
            return Task.Run(async () =>
            {
                await ctx.Response.SendFileAsync("wwwroot/dist/index.html");
            });
        });

        

        app.Run();
    }
}