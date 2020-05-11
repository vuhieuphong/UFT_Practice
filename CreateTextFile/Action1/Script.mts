Set fso=createobject("Scripting.FileSystemObject")
FilePath="C:\Users\User\Desktop\UFT\Practice\FileDemo.txt"
If fso.FileExists(FilePath)=false Then
	Set stream=fso.CreateTextFile(FilePath,False)
	stream.Write("Hello World!")
	stream.Write(vbNewline & "My name is Phong!")
	stream.Close
End If

Set objfile=fso.OpenTextFile(FilePath)
Do Until objfile.AtEndOfStream
	strText=objfile.ReadLine
	print strtext
Loop
Set fso=nothing


