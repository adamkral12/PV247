export interface IAuthenticationApp {
    readonly isLoggedIn: boolean;
    readonly showLoginModal: boolean;
    readonly showRegistrationModal: boolean;
    readonly loginApiResponseErrorMessage?: string;
}
