file1=("C:\Users\User\Desktop\UFT\Practice\DestFolder\FileDemo.txt")
Set fso=createobject("Scripting.filesystemobject")
If fso.FileExists(file1)=true Then
	fso.DeleteFile(file1)
End If
