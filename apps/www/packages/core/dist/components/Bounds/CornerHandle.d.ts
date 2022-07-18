import { TLBoundsCorner, TLBounds } from '../../types';
interface CornerHandleProps {
    size: number;
    targetSize: number;
    bounds: TLBounds;
    corner: TLBoundsCorner;
    isHidden?: boolean;
}
export declare const CornerHandle: (({ size, targetSize, isHidden, corner, bounds, }: CornerHandleProps) => JSX.Element) & {
    displayName: string;
};
export {};
//# sourceMappingURL=CornerHandle.d.ts.map