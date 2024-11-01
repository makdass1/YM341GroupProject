/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)\Screens\CreateEventPage\CreateEvent` | `/(tabs)\Screens\HomePage\Home` | `/(tabs)\Screens\LoginPage\Login` | `/(tabs)\Screens\RegisterPage\Register` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
