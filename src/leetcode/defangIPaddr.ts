function defangIPaddr(address: string): string {
    return address.split('').map(i => i.replace('.','[.]')).join('')
};

