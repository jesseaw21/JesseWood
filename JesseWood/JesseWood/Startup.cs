using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JesseWood.Startup))]
namespace JesseWood
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
