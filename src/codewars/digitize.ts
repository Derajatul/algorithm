export const digitize = (n: number): number[] => {
    return n.toString().split('').map(Number).reverse()
  };