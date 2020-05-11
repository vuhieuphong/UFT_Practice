msgbox environment("OS")
msgbox environment("ProductDir")
msgbox environment("ResultDir")
msgbox environment("OSVersion")

'user defined environment variable URL
'if u want external environment variable, load from an XML file
systemutil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",environment.Value("URL")
