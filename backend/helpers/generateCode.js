function generateCode(lenght) {
    let code = "";
    let schema = "0123456789";

    for (let i = 0; i < lenght; i++) {
        code += schema.charAt(Math.floor(Math.random() * schema.length));
    }
    return code;
}
module.exports = generateCode;
