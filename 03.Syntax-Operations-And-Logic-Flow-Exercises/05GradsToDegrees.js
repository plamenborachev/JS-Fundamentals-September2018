function f(grads) {
    let degrees = (grads * 360 / 400) % 360;
    console.log(degrees >= 0 ? degrees : degrees + 360);
}

f(100);
f(400);
f(850);
f(-50);