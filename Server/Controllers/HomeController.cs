using Microsoft.AspNetCore.Mvc;

public class HomeController : ControllerBase
{
    public IActionResult Index()
    {
        return File("dist/index.html","text/html");
    }
}