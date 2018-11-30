export interface IApiService<T> {
    readonly getEntity: (id: string) => Promise<T>;
    readonly getAllEntities: () => Promise<T[]>;
    readonly editEntity: (t: T) => Promise<T>;
    readonly createEntity: (t: T) => Promise<T>;
    readonly deleteEntity: (id: string) => Promise<void>;
}
