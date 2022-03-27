var j = 8
document.write("<table  id=tableCaption>");
document.write("<caption><h1>MIS快餐店價格表</h1></caption>");
document.write("<tr id=tableTitle><th id=none></th>");
for (var i = 5; i >= 1; i--) {
    document.write("<th id=tableTitle>" + i + "號餐" + j + "元")
    j = j + 3
}
for (var a = 3; a <= 7; a++) {
    document.write("<tr id=tableTitle><th>" + a + "</th>");
    for (var b = 8; b <= 20; b = b + 3) {
        document.write("<td class=content>" + a + "*" + b + "=" + a * b);
    }
}
document.write("</table>")