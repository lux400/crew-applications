import routes from '../constants/routes';
import { get } from './client';

export function loadCrew() {
  return get(routes.crew);
}
