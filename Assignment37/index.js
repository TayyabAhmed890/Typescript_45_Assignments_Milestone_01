function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I Love Typescript"; }
    console.log("you Order a ".concat(size, " Shirt that Says ").concat(text));
}
make_shirt();
make_shirt("Medium", '"Developer"');
make_shirt("Large", '"Just do This"');
make_shirt("", '"Adidas"');
