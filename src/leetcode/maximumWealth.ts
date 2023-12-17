function maximumWealth(accounts: number[][]): number {
  let account: any = [];
  for (let row of accounts) {
    account.push(row.reduce((p, c) => p + c));
  }
  return Math.max(...account);
}

