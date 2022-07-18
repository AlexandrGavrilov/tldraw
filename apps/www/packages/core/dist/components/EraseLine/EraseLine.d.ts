export interface UiEraseLintProps {
    points: number[][];
    zoom: number;
}
export declare type UiEraseLineComponent = (props: UiEraseLintProps) => any | null;
export declare const EraseLine: (({ points, zoom }: UiEraseLintProps) => JSX.Element | null) & {
    displayName: string;
};
//# sourceMappingURL=EraseLine.d.ts.map