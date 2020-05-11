Set tExcel=CreateObject("Excel.Application")

tExcel.Visible=True
tExcel.Workbooks.Add
tExcel.Sheets.Add

tExcel.Cells(1,1).Value="a"
tExcel.Cells(2,1).Value="b"
tExcel.Cells(3,1).Value="c"
tExcel.Cells(4,1).Value="d"

tExcel.ActiveWorkbook.SaveAs "C:\Users\User\Desktop\UFT\Practice\WriteExcel.xlsx"
tExcel.Workbooks.Close
tExcel.Application.Quit
