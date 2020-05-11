'Option explicit     'requires declaration
'to declare a variable (optional)
Dim var1
Dim var2
Dim a,b,c,d

a=10
b="Phong Vu"
'date
c=#8/5/2020#

'variables do not have to be declared
i=40
j="Hello"

'can assign different types of data but not recommended
var1=30
var1="Text"
var1=#7/5/2020#

'assign multiple variables using colon
a=10:b=30:c=40

'cannot declare and assign in same line
'Dim a=30 -> WRONG

'1D array
Dim arr(2)
arr(0)=1
arr(1)=2
arr(2)=3
'arr(3)=4  => out of range
'msgbox arr(0)
'msgbox arr(1)
'msgbox arr(2)

'2D array
Dim arrayM(1,1)  'row and col
arrayM(0,0)=1
arrayM(0,1)=2
arrayM(1,0)=3
arrayM(1,1)=4
'msgbox arrayM(0,0)
'msgbox arrayM(0,1)
'msgbox arrayM(1,0)
'msgbox arrayM(1,1)

'dynamic array: can redefine size using ReDim
Dim array_new()
ReDim preserve array_new(2)
array_new(0)=1
array_new(1)=5
array_new(2)=15
ReDim preserve array_new(3)
array_new(3)=3

'button styles
'For i = 0 To 5 Step 1
'	msgbox "Hello!",i
'Next

'msgbox "Hello!",vbYesNo
'msgbox "Hello!",vbYesNoCancel
'msgbox "Hello!",vbRetryCancel
'msgbox "Hello!",vbAbortRetryIgnore

'icon and sound styles
'msgbox "VBScript",16
'msgbox "VBScript",32
'msgbox "VBScript",48
'msgbox "VBScript",64

'msgbox "Hello!",vbCritical
'msgbox "Hello!",vbInformation
'msgbox "Hello!",vbQuestion
'msgbox "Hello!",vbExclamation

'heading
'msgbox "Hello!",vbYesNoCancel,"Tutorials"

'create new line in msgbox
'a="Hello"
'b="Phong"
'msgbox a & vbnewline & b

'inputbox text,heading,default_value,x_pos,y_pos
'inputbox "Enter Number","Tutorials",100,3000,3000

'store inputbox value in variable
'a=inputbox("Enter Number","Tutorials",100,3000,3000)
'msgbox a 'the value entered

'For Loop
'For i = 1 To 10 Step 2
'	msgbox i
'Next

'Do While Loop
Dim tsum,tcounter
tsum=0:tcounter=1
'Do while tcounter<=10
'	tsum=tsum+tcounter
'	tcounter=tcounter+1
'Loop
'msgbox "Result is: " &tsum

'use Watch to see variables in each loop iteration
'add ur variables u want to see in Watch
'Step Into your loop and see it in Watch

'Do loop While: check condition after execute first loop iteration
'Do
'tsum=tsum+tcounter
'tcounter=tcounter+1
'Loop While tcounter<=10
'msgbox "Result is: "&tsum

'Do Until Loop: run until condition
'Do until tcounter>5
'	tsum=tsum+tcounter
'	tcounter=tcounter+1
'loop
'msgbox "Result is: "&tsum

'Do Loop UntiL: difference is will run iteration once regardless of condition
'Do 
'	tsum=tsum+tcounter
'	tcounter=tcounter+1
'Loop until tcounter>5
'msgbox "Result is: "&tsum

'If-Then-Elseif-Else-EndIf
'Dim num1
'num1=inputbox("Enter the number")
'If num1>30 and num1<60 Then
'	msgbox "a"
'ElseIf num1<30 or num1>60 Then
'	msgbox "b"
'else
'	msgbox "c"
'End If

'Select Case:
'var1=inputbox("Enter today's day number in the week")
'Select Case var1
'	Case 1:msgbox "Sun"
'	Case 2:msgbox "Mon"
'	Case 3:msgbox "Tue"
'	Case 4:msgbox "Wed"
'	Case 5:msgbox "Thu"
'	Case 6:msgbox "Fri"
'	Case 7:msgbox "Sat"
'	Case else:msgbox "Not Valid"
'End Select


