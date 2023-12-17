function interpret(command: string): string {
    return command.split('()').join('o').split("(al)").join("al")
};
const result = interpret("G()(al)")
result;