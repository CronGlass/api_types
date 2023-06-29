import { BaseOutput } from "../base";


/* Login */
export interface loginObj {
    token: string;
    totp: boolean;
}
export interface loginRet extends BaseOutput<loginObj> {}

/* Login 2FA */
export interface login2FAObj {
    token: string;
}
export interface login2FARet extends BaseOutput<login2FAObj> {}