'get realtime object property
a=wpfwindow("Micro Focus MyFlight Sample").WpfButton("OK").GetROProperty("enabled")
'msgbox a

If a=true Then
	msgbox "Button is enabled"
	reporter.ReportEvent micPass,"Button is enabled","passed because button is enabled"
else
	msgbox "Button is disabled"
	reporter.ReportEvent micFail, "Button is disabled","failed because button is disabled"
End If
