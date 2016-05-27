//config.js
var path = require('path');
var extend = require('extend');


var config = {}

// Enter the name of the Qlik Sense Server.  This must match the [Host name] when you installed
//  Qlik Sense.
config.HOSTNAME = "qlikserver";

// Enter the path to the directory where the iPortal application is installed.
config.SENSEINSTALLDIR = "c:/Program Files/Qlik/Sense/ServiceDispatcher/Node/iPortal";

// Enter the path to the Qlik Sense program data folder
config.SENSEDATADIR = "C:/ProgramData/Qlik/Sense";

// The iPortal application writes logs to the config.SENSEDATADIR\logs\iPortal.log file.
// Valid log levels include:
//      OFF - Nothing is logged
//      FATAL - Fatal errors are logged
//      ERROR - Errors are logged
//      WARN - Warnings are logged
//      INFO - Infos are logged
//      DEBUG - Debug info is logged
//      TRACE - Traces are logged
// Selecting a level will include logging events at the level and all lower levels. 
config.LOGLEVEL = "DEBUG";
config.LOGFILE = config.SENSEDATADIR+"/Log/iPortal.log";

// Enter the name of the Qlik Sense Virtual Proxy prefix.  This must match the [Prefix] used when
// you configured your Virtual Proxy within the Qlik Sense QMC.
config.VIRTUALPROXYPREFIX = "iportal";

// Port that Node.js will listen to for authentication requests from Qlik Sense 
// This port number must match your [Authentication module redirect URI] field value in your 
// Virtual Proxy's Authentication attributes within the Qlik Sense QMC.
config.PORT='3090';

// The path and filename for the Excel file containing the list of users and attributes.
// The Excel file should follow the guidelines for a Qlik Sense Excel User Directory Connector.
config.EXCELFILEPATH = config.SENSEINSTALLDIR+"/udc/excel/iportal_users.xlsx";

// Enter the path to the certificates to be used with iPortal.  By default, iPortal will
// use the Qlik Sense generated certificates.
config.CERTPATH = config.SENSEDATADIR+'/Repository/Exported Certificates/.Local Certificates';


// The path and filename for the server certificate generated by Qlik Sense.
config.SERVERCERT = path.resolve(config.CERTPATH, "server.pem");
config.SERVERKEY = path.resolve(config.CERTPATH, "server_key.pem");

// The path and filename for the client certificate generated by Qlik Sense.
config.CLIENTCERT = path.resolve(config.CERTPATH,"client.pem");
config.CLIENTKEY = path.resolve(config.CERTPATH, "client_key.pem");

// The path and filename for the root certificate generated by Qlik Sense.
config.ROOTCERT = path.resolve(config.CERTPATH, "root.pem");

// Enter the certificate password used when exporting the certificates from Qlik Sense QMC.
// This value must match the [Certificate password] field value used on the Certificates Export
// screen within the Qlik Sense QMC.  The default is a certificate with no password.
// By default, the certificates generated during Qlik Sense installation will be used, 
// therefore, the password needs to match the repository superuser password. 
config.CERTIFICATEPWD = 'secret';

// This value is used to compute a hash for session access.  Any value will work, but you should
// not need to change this value.
config.SESSIONSECRET='iportal-secret';

// AUTHURI is the authorization endpoint for the Qlik Sense Proxy service.
// The endpoint URI follows this template: https://<servername>:4243/qps/<virtualproxyprefix>
config.AUTHURI='https://'+config.HOSTNAME+':4243/qps/'+config.VIRTUALPROXYPREFIX;

// REDIRECTURI is the application endpoint to redirect after authentication.
// The application URI follows this template: https://<servername>/<virtualproxyprefix>/<app>
// Here are some specific examples with iPortal default configuration values:
//      https://qlikserver/iportal/hub
//      https://qlikserver/iportal/single?appid=cd29ef8d-7c02-48d3-8d90-b5a40395c316&sheet=LSgtJH&opt=currsel&select=clearall
config.REDIRECTURI='https://'+config.HOSTNAME+'/'+config.VIRTUALPROXYPREFIX+'/';

// THEME is used to alter the look & feel of the iPortal users.  Two themes are provided with 
// the default installation of iPortal (photos & clipart).  If you would like to use custom
// images for the users, simple create a new folder in public/images and set the value of
// config.THEME to be the name of this folder.
config.THEME = 'photos';
//config.THEME = 'clipart';

module.exports = config;