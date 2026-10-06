<<<<<<< HEAD
﻿/*using AspNetCoreRateLimit;
=======
using AspNetCoreRateLimit;
>>>>>>> 38350f3f4fa3de6e20d81449488ab556d03a8352
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace WebApplicationsgls.API.RateLimiting;

public static class RateLimitExtensions
{
    public static IServiceCollection AddApiRateLimiting(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddOptions();
        services.AddMemoryCache();

        services.Configure<IpRateLimitOptions>(
            configuration.GetSection(RateLimitConfigurationSections.IpRateLimiting));

        services.Configure<IpRateLimitPolicies>(
            configuration.GetSection(RateLimitConfigurationSections.IpRateLimitPolicies));

        services.AddInMemoryRateLimiting();
        services.AddSingleton<IRateLimitConfiguration, AspNetCoreRateLimit.RateLimitConfiguration>();

        return services;
    }
<<<<<<< HEAD
}*/
=======
}
>>>>>>> 38350f3f4fa3de6e20d81449488ab556d03a8352
