import { NullstackEnvironment } from './Environment'
import { NullstackInstances } from './Instances'
import { NullstackFragment } from './JSX'
import { NullstackPage } from './Page'
import { NullstackParams } from './Params'
import { NullstackProject } from './Project'
import { NullstackRouter } from './Router'
import { NullstackSettings } from './Settings'
import { NullstackWorker } from './Worker'

/**
 * @see https://nullstack.app/context
 */
interface BaseNullstackClientContext {
  /**
   * Callback function that bootstrap the context for the application.
   */
  start?: () => Promise<void>

  /**
   * Information about the document `head` metatags.
   *
   * @see https://nullstack.app/context-page
   */
  page: NullstackPage

  /**
   * Information about the app manifest and some metatags.
   *
   * @see https://nullstack.app/context-project
   */
  project: NullstackProject

  /**
   * Gives you granular control of your PWA behavior.
   *
   * @see https://nullstack.app/service-worker
   */
  worker: NullstackWorker

  /**
   * It gives you information about the element dataset.
   * Any `data-*` attributes will receive a respective camelized key on this object.
   *
   * @scope client
   * @see https://nullstack.app/context-data
   */
  data?: Record<string, string>

  /**
   * It gives you all active instances of the application.
   * Adding a [key](https://nullstack.app/instance-self#instance-key) to a Component adds it here.
   *
   * @scope client
   * @see https://nullstack.app/context-instances
   */
  instances: NullstackInstances

  /**
   * It gives you information about the current environment.
   *
   * @see https://nullstack.app/context-environment
   */
  environment: NullstackEnvironment

  /**
   * Each query string param is mapped to this object.
   *
   * @see https://nullstack.app/routes-and-params#params
   * @example
   * ```
   * "/?expanded=true&page=2" ===
   *   {expanded: true, page: 2}
   * ```
   */
  params: NullstackParams

  /**
   * Nullstack router.
   *
   * @see https://nullstack.app/routes-and-params#router
   */
  router: NullstackRouter

  /**
   * You can assign any key with any type of public information.
   *
   * @example
   * ```
   * // .env NULLSTACK_SETTINGS_PUBLIC_KEY
   * settings.publicKey
   * ```
   * @see https://nullstack.app/context-settings
   */
  settings: NullstackSettings

  /**
   * Children elements of this component.
   *
   * @see https://nullstack.app/renderable-components#components-with-children
   */
  children: NullstackFragment

  /**
   * Bind object.
   *
   * @see https://nullstack.app/two-way-bindings#complex-bindable-components
   */
  bind?: { property?: string | number; object?: any }

  /**
   * Bind value.
   *
   * @see https://nullstack.app/two-way-bindings#complex-bindable-components
   */
  value?: any

  /**
   * Ref object.
   *
   * @see https://nullstack.app/refs#complex-refable-components
   */
  ref?: { property?: string | number; object?: any } | ((context: NullstackClientContext) => void)

  /**
   * Ref element.
   *
   * @see https://nullstack.app/refs#complex-refable-components
   */

  element?: HTMLElement
}

export type NullstackClientContext<TProps = unknown> = BaseNullstackClientContext & TProps