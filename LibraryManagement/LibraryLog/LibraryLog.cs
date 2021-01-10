using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace LibraryLog
{
    public class LibraryLog
    {
        private static string fileName = "LibraryLog.txt";
        private static string path = AppDomain.CurrentDomain.BaseDirectory;
        public static void Log(string exception)
        {
            using (StreamWriter writer = File.AppendText(path + fileName))
            {
                writer.WriteLine(exception);
            }
        }
    }
}
