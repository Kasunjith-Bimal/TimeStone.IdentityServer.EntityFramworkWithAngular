// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServer4.Models;
using System.Collections.Generic;

namespace TimeStone.IdentityServer
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new IdentityResource[]
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Email(),
                new IdentityResources.Profile(),
              
            };
        }

        public static IEnumerable<ApiResource> GetApis()
        {
            return new ApiResource[]
            {
                new ApiResource("API Resouces", "My Demo API")
                {
                    Scopes = {new Scope("API1") }
                }
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new[]
            {
                new Client
                {
                    ClientId ="mvc",
                    ClientName="Mvc Demo",
                    AllowedGrantTypes = GrantTypes.Hybrid,
                    RedirectUris ={ "http://localhost:3728/signin-oidc" },
                    AllowedScopes={ "openid","email","profile","API1"},
                    PostLogoutRedirectUris = { "http://localhost:3728/signout-callback-oidc" },
                    ClientSecrets ={new Secret("secret".Sha256()) }  
                },
                 new Client {
                    RequireConsent = false,
                    ClientId = "angular_spa",
                    ClientName = "Angular SPA",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowedScopes = { "openid", "profile", "email", "API1" },
                    RedirectUris = {"http://localhost:4200/callback.html"},
                    PostLogoutRedirectUris = {"http://localhost:4200/signout-callback.html"},
                    AllowedCorsOrigins = {"http://localhost:4200"},
                    AllowAccessTokensViaBrowser = true,
                    AccessTokenLifetime = 3600,
                   
                }

            };
        }
    }
}