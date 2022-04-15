

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            font-size: 36px;
            font-weight: bolder;
            color: blue;
            text-align: center;
        }
        
        table {
            margin: auto;
        }
        
        #none {
            border-style: none;
        }
        
        #tableCaption {
            border-style: dashed;
            border-width: 1px;
        }
        
        td {
            border-style: dotted;
            border-width: 1px;
            padding: 10px;
            color: green;
        }
        
        th {
            border-style: dotted;
            border-width: 1px;
            padding: 10px;
            color: purple;
        }
        /* //答案 2D*/
        
        .content {
            color: green;
            font-family: Arial;
            font-size: 18px;
        }
        
        #tableTitle {
            font-weight: bolder;
            font-size: 18px;
            color: purple;
            text-align: center
        }
        
        a {
            color: black
        }
    </style>


</head>

<body>
    <script language="javascript">
        var j = 8
        document.write("<table  id=tableCaption>");
        document.write("<caption><h1>MIS快餐店的價格表</h1></caption>");
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
    </script>
</body>

</html>

