export function updateRandomColors(amount: number = 4): string[] {
    const colors: string[] = [];

    for (let i = 0; i < amount; i++) {
        const hex: string = Math.floor(Math.random() * 0xffffff)
            .toString(16)
        colors.push(`#${hex}`);
    }

    return colors;
}
