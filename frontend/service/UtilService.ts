import { LangsCode } from '../model/SystemModel';

export default class UtilService {
  static formatDate(date: Date, type: 'yyyy/MM/dd' | 'yyyy-MM-dd'): string {
    if (type === 'yyyy-MM-dd') {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    } else if (type === 'yyyy/MM/dd') {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    } else {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }
  }

  /**
   * @param path example /path/path
   */
  static switchUrl(path: string): string {
    if (process.env.NODE_ENV === 'development') {
      return `http://localhost:1337${path}`;
    } else {
      return path;
    }
  }

  /**
   * get lang setting of user browser
   */
  static getBrowserLang(): LangsCode {
    if (navigator && navigator.language) {
      switch (navigator.language) {
        case 'ja':
          return 'ja-JP';
        case 'en':
          return 'en';
      }
    }
    return 'en';
  }
}
