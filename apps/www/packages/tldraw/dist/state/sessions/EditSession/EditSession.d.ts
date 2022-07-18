import { TDShape, SessionType, TldrawPatch, TldrawCommand } from '../../../types';
import { BaseSession } from '../BaseSession';
import type { TldrawApp } from '../../internal';
export declare class EditSession extends BaseSession {
    type: SessionType;
    performanceMode: undefined;
    initialShape: TDShape;
    initialSelectedIds: string[];
    currentPageId: string;
    isCreating: boolean;
    constructor(app: TldrawApp, id: string, isCreating: boolean);
    start: () => TldrawPatch | undefined;
    update: () => TldrawPatch | undefined;
    cancel: () => TldrawPatch | undefined;
    complete: () => TldrawPatch | TldrawCommand | undefined;
}
//# sourceMappingURL=EditSession.d.ts.map