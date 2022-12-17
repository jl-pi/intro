import { AuthenticationService } from '../services/authentication.service';

export function appInitializer(authenticationService: AuthenticationService) {

    // uncomment this section to refresh token
    return () => new Promise(resolve => {
        // attempt to refresh token on app start up to auto authenticate
        authenticationService.refreshToken()
            .subscribe()
            .add(resolve as any);
    });


}