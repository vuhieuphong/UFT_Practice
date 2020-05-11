systemutil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set DataTable("AgentName", dtGlobalSheet) @@ hightlight id_;_2096682168_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure DataTable("Password", dtGlobalSheet) @@ hightlight id_;_2106715648_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2106658720_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").Activate @@ hightlight id_;_920144_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").Static("Username must be at least").Output CheckPoint("Username must be at least 4 characters long") @@ hightlight id_;_920586_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").WinButton("OK").Click @@ hightlight id_;_1771574_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_1116530_;_script infofile_;_ZIP::ssf8.xml_;_
