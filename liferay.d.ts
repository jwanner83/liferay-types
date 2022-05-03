declare const Liferay: {
  Language: LiferayLanguage
  Util: LiferayUtil
  ThemeDisplay: LiferayThemeDisplay

  /**
   * Get the authentication token
   */
  authToken: string
}

interface LiferayLanguage {
  /**
   * Get language property value by a specified key and replace placeholders
   * with values
   *
   * @param key
   * @param params
   */
  get: (key: string, params?: Array<string> | string) => string

  /**
   * Get all available language keys
   */
  available: string[]
}

interface LiferayThemeDisplay {
  /**
   * Check if a user is currently impersonated
   */
  isImpersonated: () => boolean

  /**
   * Get the encoded do as user id
   */
  getDoAsUserIdEncoded: () => string

  /**
   * Check if the user is signed in
   */
  isSignedIn: () => string

  /**
   * Get the current language id
   */
  getLanguageId: () => 'en_US' | 'de_DE' | 'fr_FR' | 'it_IT'

  /**
   * Get the current plid
   */
  getPlid: () => string

  /**
   * Get the current group id
   */
  getScopeGroupId: () => string

  /**
   * Get the relative url of the current layout
   */
  getLayoutRelativeURL: () => string
}

interface LiferayUtil {
  /**
   * Open a liferay toast
   *
   * @param title the title of the toast
   * @param message the message of the toast
   * @param type the type of the toast
   */
  openToast: ({ title, message, type }: ToastParams) => void
}

interface ToastParams {
  /**
   * The title of the toast
   */
  title: string

  /**
   * The message of the toast
   */
  message: string

  /**
   * The type of the toast
   */
  type: 'info' | 'error' | 'danger' | 'success'
}
