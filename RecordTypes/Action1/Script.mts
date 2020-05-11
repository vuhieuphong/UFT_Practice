'default recording
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2017446224_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5eb47c73d91c2952693a" @@ hightlight id_;_2132831320_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2132831128_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_986626_;_script infofile_;_ZIP::ssf5.xml_;_

'low level recording: gives coordinates. limitations with finding some objects
Window("Micro Focus MyFlight Sample").Click 348,267 @@ hightlight id_;_4656544_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Micro Focus MyFlight Sample").Type "John" @@ hightlight id_;_4656544_;_script infofile_;_ZIP::ssf7.xml_;_
Window("Micro Focus MyFlight Sample").Click 377,348 @@ hightlight id_;_4656544_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Micro Focus MyFlight Sample").Type "HP" @@ hightlight id_;_4656544_;_script infofile_;_ZIP::ssf9.xml_;_
Window("Micro Focus MyFlight Sample").Click 186,427 @@ hightlight id_;_4656544_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Micro Focus MyFlight Sample_2").Close

'analog recording in untitled paint: recognize mouse movements
'run from this step to see
Window("Paint").RunAnalog "Track3"

'insight recording: gives screenshots of each object
Window("Calculator").InsightObject("InsightObject").Click @@ hightlight id_;_8_;_script infofile_;_ZIP::ssf16.xml_;_
Window("Calculator").InsightObject("InsightObject_2").Click @@ hightlight id_;_12_;_script infofile_;_ZIP::ssf17.xml_;_
Window("Calculator").InsightObject("InsightObject_3").Click @@ hightlight id_;_34_;_script infofile_;_ZIP::ssf20.xml_;_

