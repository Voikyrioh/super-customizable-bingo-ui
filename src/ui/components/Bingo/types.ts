export interface BingoCase {
    value: string;
    checked: boolean;
}

export type BingoPosition = {row: number, col: number};
export type BingoTable = BingoCase[][];
