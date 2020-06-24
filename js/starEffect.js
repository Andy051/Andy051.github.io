frameCount = 0;
starArray = [];
colorArray = ["#68545b", "#657ba8", "#6400E4", "#b9a1c6", "#E1F4FF"];

function onFrame(event) {
    frameCount++;
    if (!(frameCount % 10)) {
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var center = maxPoint * randomPoint;

        var points = 5;
        var radius1 = 3;
        var radius2 = 5;
        var path = new Path.Star(center, points, radius1, radius2);
        path.fillColor = colorArray[Math.floor(Math.random() * 5)];
        starArray.push(path);
    }
    for (var i = 0; i < starArray.length; i++) {
        starArray[i].fillColor.hue += 1;
        starArray[i].scale(.985);


        if (starArray[i].area == 0) {
            starArray[i].remove();
            starArray.splice(i, 1);
        }
    }

}

}