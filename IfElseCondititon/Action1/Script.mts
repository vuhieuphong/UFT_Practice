Dim value
value=inputbox("Enter Positive Number")

If value>0 Then
	msgbox "valid number"
'	pass event
	reporter.ReportEvent micPass, "Valid Data", "Valid due to valid number"
else
	msgbox "Invalid number"
'	fail event
	reporter.ReportEvent micFail,"Invalid Data","Invalid due to invalid data"
End If
