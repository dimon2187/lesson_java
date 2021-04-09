var current = 1;
var kolvo = 3;

photo = new Array();
photo[0] = new Image();
photo[1] = new Image();
photo[2] = new Image();


photo[0].src = "img/1.jpg"
photo[1].src = "img/2.jpg"
photo[2].src = "img/3.jpg"



function frw() {
    if (current < kolvo) {
        current++;
        document.images['photo'].src = photo[current - 1].src;

    } else {
        document.images['photo'].src = photo[0].src;
        current = 1;
    }
}
function bck() {
    if (current > 1) {
        current--;
        document.images['photo'].src = photo[current - 1].src;
    } else {
        document.images['photo'].src = photo[2].src;
        current = 3;
    }
}

function f(e) {
    switch (e.target) {
        case mas[0]:
            document.images['photo'].src = photo[0].src;
            break;
        case mas[1]:
            document.images['photo'].src = photo[1].src;
            break;
        case mas[2]:
            document.images['photo'].src = photo[2].src;
            break;
    }
}


var mas = document.querySelectorAll("button");
for (var item of mas) {
    item.onclick = f;
}
