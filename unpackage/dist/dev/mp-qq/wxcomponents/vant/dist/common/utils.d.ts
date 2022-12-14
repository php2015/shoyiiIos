/// <reference types="miniprogram-api-typings" />
export declare function range(num: number, min: number, max: number): number;
export declare function nextTick(cb: (...args: any[]) => void): void;
export declare function getSystemInfoSync(): WechatMiniprogram.GetSystemInfoSyncResult;
export declare function addUnit(value?: string | number): string | undefined;
export declare function requestAnimationFrame(
  cb: () => void
): number | WechatMiniprogram.NodesRef;
export declare function pickExclude(obj: unknown, keys: string[]): {};
export declare function getRect(
  context: WechatMiniprogram.Component.TrivialInstance,
  selector: string
): Promise<WechatMiniprogram.BoundingClientRectCallbackResult>;
export declare function getAllRect(
  context: WechatMiniprogram.Component.TrivialInstance,
  selector: string
): Promise<WechatMiniprogram.BoundingClientRectCallbackResult[]>;
export declare function groupSetData(
  context: WechatMiniprogram.Component.TrivialInstance,
  cb: () => void
): void;
export declare function toPromise(
  promiseLike: Promise<unknown> | unknown
): Promise<unknown>;
