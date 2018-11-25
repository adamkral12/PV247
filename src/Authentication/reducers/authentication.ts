import {IAuthenticationApp} from '../model/IAuthenticationApp';
import {showRegistrationModal} from './showRegistrationlModal';
import {showLoginModal} from './showLoginModal';
import {isLoggedIn} from './isLoggedIn';

export const authentication = (prevState: IAuthenticationApp, action: Action): IAuthenticationApp => ({
    showLoginModal: showLoginModal(prevState.showLoginModal, action),
    showRegistrationModal: showRegistrationModal(prevState.showRegistrationModal, action),
    isLoggedIn: isLoggedIn(prevState.isLoggedIn, action),
});
