import {BASE_URL} from "../../constants/urls";
import {getItem} from '../../helpers/storageHelper';
// import { isExpitedJWT } from '../../helpers/jwt-checker';
import Api from './api';
import { jsonldHeaders, jsonHeaders } from '../../helpers/requestHelper';
import { TOKEN_KEY } from '../../constants/storage';
// import UnauthorizedError from '../../helpers/errors/UnauthorizedError';

// export const refreshToken = () => {
//   const refrToken = Storage.getValue(REFRESH_TOKEN_KEY);
//   const token = Storage.getValue(TOKEN_KEY);
//
//   if (!refrToken && token) {
//     Storage.removeValue(TOKEN_KEY);
//     Storage.removeValue(REFRESH_TOKEN_KEY);
//     return;
//     // return new Promise.reject('There is no refresh tokens');
//   }
//
//   return new Api(BASE_URL).postApiTokenRefresh({refreshToken: refrToken})
//     .then(fetchRequestBody)
//     .then(({token, refresh_token}) => {
//       /** Set into storage */
//       Storage.setValue(TOKEN_KEY, token);
//       Storage.setValue(REFRESH_TOKEN_KEY, refresh_token);
//
//       return {token, refresh_token};
//     })
//     .catch(error => {
//       /** In case of refresh token expiration */
//       Storage.removeValue(TOKEN_KEY);
//       Storage.removeValue(REFRESH_TOKEN_KEY);
//
//       throw new UnauthorizedError('Session expired');
//     });
// };

// /**
//  * @throws Error on refresh fail
//  */
// export async function checkToken () {
//   if (isExpitedJWT()) {
//     let token;
//     try {
//       ({token} = await refreshToken());
//
//       /** Additional check */
//       if (isExpitedJWT(token)) {
//         throw new UnauthorizedError('Was not able to update token');
//       }
//     } catch (e) {
//       /** handle errors */
//       throw e;
//     }
//   }
// }

/**
 * Get public Api instance
 */
export const getPublicApi = async () => {
  return Promise.resolve(new Api(BASE_URL));
};

/**
 * Get Api instance with token check
 */
export const getApi = async () => {
  // await checkToken();
 
  return Promise.resolve(new Api(BASE_URL, Storage.getValue(TOKEN_KEY)));
};

/**
 * Get Api instance with token check
 */
export const getApiJSONLD = async () => {
  // await checkToken();

  return Promise.resolve(new Api(BASE_URL, Storage.getValue(TOKEN_KEY), jsonldHeaders));
};
/**
 * Get Api instance with token check
 */
export const getApiJSON = async () => {
  // await checkToken();

  return Promise.resolve(new Api(BASE_URL, getItem(TOKEN_KEY), jsonHeaders));
};
