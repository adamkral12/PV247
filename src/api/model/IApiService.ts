interface IApiService<T> {
    readonly getEntity: (id: string) => Promise<any>;
    readonly getAllEntities: (url: string) => Promise<any>;
    readonly editEntity: (t: T) => Promise<T>;
    readonly createEntity: (t: T) => Promise<T>;
    readonly deleteEntity: (id: string) => Promise<void>;
}
