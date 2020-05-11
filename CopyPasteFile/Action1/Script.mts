Dim fso
Set fso=createobject("Scripting.FileSystemObject")
Sourcefile="C:\Users\User\Desktop\UFT\Practice\FileDemo.txt"
Destination="C:\Users\User\Desktop\UFT\Practice\DestFolder\"

If fso.FolderExists(Destination)=false Then
	fso.CreateFolder(Destination)
End If

fso.CopyFile Sourcefile,destination,True

Set fso=nothing

