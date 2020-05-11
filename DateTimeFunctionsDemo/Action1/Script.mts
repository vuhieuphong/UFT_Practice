msgbox date
'give date and time
msgbox now()

'add 1 month to the date
msgbox dateadd("m",1,"1/13/2017")
'add 1 day to the date
msgbox dateadd("d",1,"1/13/2017")
'add 1 week to the date
msgbox dateadd("ww",1,"1/13/2017")
'add 1 year to the date
msgbox dateadd("yyyy",1,"1/13/2017")

'hour
msgbox dateadd("h",1,"1/13/2017 9:00:00")
'minute
msgbox dateadd("n",1,"1/13/2017 9:00:00")
'second
msgbox dateadd("s",1,"1/13/2017 9:00:00")

msgbox datediff("yyyy","1/1/2016","4/15/2017")
msgbox datediff("m","1/1/2016","4/15/2017")
msgbox datediff("d","1/1/2016","4/15/2017")
