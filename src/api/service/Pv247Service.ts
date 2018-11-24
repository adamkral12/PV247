import {GenericService} from './GenericService';
import {BASE_API_URL} from '../constants/api';

export abstract class Pv247Service extends GenericService {
    readonly basePath = BASE_API_URL;
}
