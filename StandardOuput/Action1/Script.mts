systemutil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set DataTable("AgentName", dtGlobalSheet) @@ hightlight id_;_2096412952_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure DataTable("Password", dtGlobalSheet) @@ hightlight id_;_2072091136_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Output CheckPoint("OK") @@ hightlight id_;_2096411464_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("Cancel").Click @@ hightlight id_;_2072196400_;_script infofile_;_ZIP::ssf5.xml_;_
