export type BaseOutput<T> = {
    success: boolean;
    data: T;
};

export type TextOutput = BaseOutput<string>;