import { DllBundlesPluginOptions } from './interfaces';
export declare class DllBundlesPlugin {
    private compiler;
    private bundles;
    private bundleControl;
    private options;
    constructor(options: DllBundlesPluginOptions);
    apply(compiler: any): void;
    run(next: (err?: Error) => any): void;
    private setOptions;
    static resolveFile(bundleName: string): string;
}