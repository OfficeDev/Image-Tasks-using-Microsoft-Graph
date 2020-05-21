﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

using System.Web;
using System.Web.Mvc;

namespace Focus
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
