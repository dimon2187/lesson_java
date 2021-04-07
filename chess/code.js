function myChess() {
    var mainBox = document.querySelector(".main-box");
    var box;
    var mark = true;
    var figure = {
        0: ['Л', 'К', 'С', 'Ф', 'К', 'С', 'К', 'Л',],
        1: ['П', 'П', 'П', 'П', 'П', 'П', 'П', 'П',],
        6: ['Л', 'К', 'С', 'К', 'Ф', 'С', 'К', 'Л',],
        7: ['П', 'П', 'П', 'П', 'П', 'П', 'П', 'П',],
    }

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if (j == 0) mark = !mark;
            box = document.createElement("div");

            if (mark) box.className = "box black";
            else box.className = "box white";

            if (i = 0)

                mainBox.appendChild(box);
            mark = !mark;
        }
    }
}
myChess();