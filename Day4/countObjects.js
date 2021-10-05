/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    var result = 0;
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].x == objects[i].y) {
            result++;
        }
    }
    return result;
}

function main() {
    //const n = +(readLine());
    let objects = [
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 3 },
        { x: 4, y: 5 },
    ];
    console.log(getCount(objects));
}

main();