const isDev = process.env.NODE_ENV === 'development';

export const API_URL = isDev ? '//tools.wmflabs.org/edgars/npp2/api/index.php' : '//assessor.toolforge.org/api/index.php';
