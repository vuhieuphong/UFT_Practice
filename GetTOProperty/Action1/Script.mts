'b=wpfwindow("Micro Focus MyFlight Sample").WpfButton("OK").GetTOProperty("devname")
'msgbox b

'this will only be added during runtime. after it will go away
wpfwindow("Micro Focus MyFlight Sample").WpfButton("OK").SetTOProperty "height","35"
msgbox "Property-Value added to repo"


