import {IAuthenticationApp} from '../model/IAuthenticationApp';
import {showRegistrationModal} from './showRegistrationlModal';
import {showLoginModal} from './showLoginModal';
import {isLoggedIn} from './isLoggedIn';
import {loginApiResponse} from './loginApiResponse';
import {isLoading} from './isRegistrationLoading';
import {registrationApiResponse} from './registrationApiResponse';

export const authentication = (prevState = {} as IAuthenticationApp, action: Action): IAuthenticationApp => ({
    showLoginModal: showLoginModal(prevState.showLoginModal, action),
    showRegistrationModal: showRegistrationModal(prevState.showRegistrationModal, action),
    isLoggedIn: isLoggedIn(prevState.isLoggedIn, action),
    loginApiResponseErrorMessage: loginApiResponse(prevState.loginApiResponseErrorMessage, action),
    isRegistrationModalLoading: isLoading(prevState.isRegistrationModalLoading, action),
    registrationApiResponse: registrationApiResponse(prevState.registrationApiResponse, action),
});
