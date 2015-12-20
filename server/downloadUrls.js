var path = Npm.require('path');

DOWNLOAD_URLS = {};

var electronSettings = Meteor.settings.electron || {};
var latestVersion = electronSettings.version;
if (electronSettings.downloadUrls) {
  if (electronSettings.downloadUrls.win32) {
    // 'AppSetup.exe' refers to the output of `grunt-electron-installer`.
    DOWNLOAD_URLS['win32'] = path.join(electronSettings.downloadUrls.win32, electronSettings.name + 'Setup.exe');
  }
  if (electronSettings.downloadUrls.darwin){
    DOWNLOAD_URLS['darwin'] = electronSettings.downloadUrls.darwin.replace('{{version}}', latestVersion);
  }
}
