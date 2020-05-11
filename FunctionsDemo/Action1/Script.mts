'functions defined in one action can be reused in other functions
Function login()
	Systemutil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john"
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5eb5e0404bb2efbc46d8"
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_592158_;_script infofile_;_ZIP::ssf5.xml_;_
End Function

Function logout()
	WpfWindow("Micro Focus MyFlight Sample").Close
End Function

Call login()

Call logout()
