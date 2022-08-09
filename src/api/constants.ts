import { isLocalMockEnabled } from '../common/constants/globalAppSettings';

export const API_BASE_URL = isLocalMockEnabled ? '' : `http://foot.local.back`;
