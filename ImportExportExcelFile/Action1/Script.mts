'1 means first sheet
datatable.ImportSheet "C:\Users\User\Desktop\UFT\Practice\TempData.xlsx",1,"Global"
n=datatable.GetSheet("Global").GetRowCount

'go to file->settings->change data table iteration to 1 (because we r already looping)
For i = 1 To n 
	Datatable.SetCurrentRow(i)
	systemutil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_1967907200_;_script infofile_;_ZIP::ssf2.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5eb5c9c471e8600aeef9" @@ hightlight id_;_2066080664_;_script infofile_;_ZIP::ssf3.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1967909552_;_script infofile_;_ZIP::ssf4.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select datatable("From") @@ hightlight id_;_1967925584_;_script infofile_;_ZIP::ssf9.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "London" @@ hightlight id_;_1967923328_;_script infofile_;_ZIP::ssf11.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2073279736_;_script infofile_;_ZIP::ssf12.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,2 @@ hightlight id_;_2066081720_;_script infofile_;_ZIP::ssf13.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2066083064_;_script infofile_;_ZIP::ssf14.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "Phong" @@ hightlight id_;_2066082056_;_script infofile_;_ZIP::ssf15.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2066083352_;_script infofile_;_ZIP::ssf16.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_1836938_;_script infofile_;_ZIP::ssf17.xml_;_
Next
