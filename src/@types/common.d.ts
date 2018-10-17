type Action = {
    type: string;
    payload?: any;
};

declare module "*.json" {
    const value: any;
    export default value;
}
