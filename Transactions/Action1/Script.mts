WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "John" @@ hightlight id_;_2054847848_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5eb4dcbffdbb642dd2b0" @@ hightlight id_;_2054850104_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2054847752_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("(15) HP UFT/QTP - Transactions").Page("(15) HP UFT/QTP - Transactions").WebElement("contentContainer").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Services.StartTransaction "OrderTickets"
 @@ script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_2054844776_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "Frankfurt" @@ hightlight id_;_2129066408_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2054844056_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,2 @@ hightlight id_;_2054845352_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2119726272_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "Phong" @@ hightlight id_;_2115012216_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click

Services.EndTransaction "OrderTickets"
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_3474966_;_script infofile_;_ZIP::ssf20.xml_;_
