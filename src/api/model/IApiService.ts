interface IApiService {
    readonly get: (url: string) => Promise<any>;
    readonly post: (url: string) => Promise<any>;
    readonly put: (url: string) => Promise<any>;
    readonly delete: (url: string) => Promise<any>;
}
