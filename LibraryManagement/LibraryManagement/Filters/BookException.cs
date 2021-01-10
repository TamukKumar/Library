using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Filters;
using LibraryLog;

namespace LibraryManagement.Filters
{
    public class BookException : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            string exceptionMessage = "";

            if(actionExecutedContext.Exception.InnerException == null)
            {
                exceptionMessage = actionExecutedContext.Exception.Message;
            }
            else
            {
                exceptionMessage = actionExecutedContext.Exception.InnerException.Message;
            }

            LibraryLog.LibraryLog.Log(exceptionMessage);

            base.OnException(actionExecutedContext);
        }
    }
}