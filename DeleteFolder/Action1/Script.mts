Set fso=createobject("Scripting.FileSystemObject")
FolderDel="C:\Users\User\Desktop\UFT\Practice\Destination_copy"
If fso.FolderExists(FolderDel)=true Then
	fso.DeleteFolder(FolderDel)
End If
Set fso=nothing
