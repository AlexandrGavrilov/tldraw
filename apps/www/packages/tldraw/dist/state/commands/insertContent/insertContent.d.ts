import type { TldrawCommand, TDShape, TDBinding, TDAsset } from '../../../types';
import type { TldrawApp } from '../../internal';
export declare function insertContent(app: TldrawApp, content: {
    shapes: TDShape[];
    bindings?: TDBinding[];
    assets?: TDAsset[];
}, opts?: {
    point?: number[] | undefined;
    select?: boolean | undefined;
    overwrite?: boolean | undefined;
}): TldrawCommand;
//# sourceMappingURL=insertContent.d.ts.map