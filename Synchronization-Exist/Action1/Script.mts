'wait for window 5 seconds. if not exist then false, else true
var1=Window("Micro Focus MyFlight Sample").Exist(5)
If var1=true Then
	msgbox "Window Exists"
else
	msgbox "Window Missing"
	
End If
