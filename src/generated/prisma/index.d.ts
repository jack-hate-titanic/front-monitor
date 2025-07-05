
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PageEvent
 * 
 */
export type PageEvent = $Result.DefaultSelection<Prisma.$PageEventPayload>
/**
 * Model Metric
 * 
 */
export type Metric = $Result.DefaultSelection<Prisma.$MetricPayload>
/**
 * Model Error
 * 
 */
export type Error = $Result.DefaultSelection<Prisma.$ErrorPayload>
/**
 * Model ClickEvent
 * 
 */
export type ClickEvent = $Result.DefaultSelection<Prisma.$ClickEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PageEvents
 * const pageEvents = await prisma.pageEvent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PageEvents
   * const pageEvents = await prisma.pageEvent.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pageEvent`: Exposes CRUD operations for the **PageEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageEvents
    * const pageEvents = await prisma.pageEvent.findMany()
    * ```
    */
  get pageEvent(): Prisma.PageEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metric`: Exposes CRUD operations for the **Metric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metric.findMany()
    * ```
    */
  get metric(): Prisma.MetricDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.error`: Exposes CRUD operations for the **Error** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Errors
    * const errors = await prisma.error.findMany()
    * ```
    */
  get error(): Prisma.ErrorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clickEvent`: Exposes CRUD operations for the **ClickEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClickEvents
    * const clickEvents = await prisma.clickEvent.findMany()
    * ```
    */
  get clickEvent(): Prisma.ClickEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PageEvent: 'PageEvent',
    Metric: 'Metric',
    Error: 'Error',
    ClickEvent: 'ClickEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pageEvent" | "metric" | "error" | "clickEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PageEvent: {
        payload: Prisma.$PageEventPayload<ExtArgs>
        fields: Prisma.PageEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageEventPayload>
          }
          findFirst: {
            args: Prisma.PageEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageEventPayload>
          }
          findMany: {
            args: Prisma.PageEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageEventPayload>[]
          }
          create: {
            args: Prisma.PageEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageEventPayload>
          }
          createMany: {
            args: Prisma.PageEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PageEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageEventPayload>
          }
          update: {
            args: Prisma.PageEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageEventPayload>
          }
          deleteMany: {
            args: Prisma.PageEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PageEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageEventPayload>
          }
          aggregate: {
            args: Prisma.PageEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageEvent>
          }
          groupBy: {
            args: Prisma.PageEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageEventCountArgs<ExtArgs>
            result: $Utils.Optional<PageEventCountAggregateOutputType> | number
          }
        }
      }
      Metric: {
        payload: Prisma.$MetricPayload<ExtArgs>
        fields: Prisma.MetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findFirst: {
            args: Prisma.MetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findMany: {
            args: Prisma.MetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          create: {
            args: Prisma.MetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          createMany: {
            args: Prisma.MetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          update: {
            args: Prisma.MetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          deleteMany: {
            args: Prisma.MetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          aggregate: {
            args: Prisma.MetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetric>
          }
          groupBy: {
            args: Prisma.MetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricCountArgs<ExtArgs>
            result: $Utils.Optional<MetricCountAggregateOutputType> | number
          }
        }
      }
      Error: {
        payload: Prisma.$ErrorPayload<ExtArgs>
        fields: Prisma.ErrorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ErrorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ErrorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>
          }
          findFirst: {
            args: Prisma.ErrorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ErrorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>
          }
          findMany: {
            args: Prisma.ErrorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>[]
          }
          create: {
            args: Prisma.ErrorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>
          }
          createMany: {
            args: Prisma.ErrorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ErrorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>
          }
          update: {
            args: Prisma.ErrorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>
          }
          deleteMany: {
            args: Prisma.ErrorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ErrorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ErrorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorPayload>
          }
          aggregate: {
            args: Prisma.ErrorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateError>
          }
          groupBy: {
            args: Prisma.ErrorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ErrorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ErrorCountArgs<ExtArgs>
            result: $Utils.Optional<ErrorCountAggregateOutputType> | number
          }
        }
      }
      ClickEvent: {
        payload: Prisma.$ClickEventPayload<ExtArgs>
        fields: Prisma.ClickEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClickEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClickEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickEventPayload>
          }
          findFirst: {
            args: Prisma.ClickEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClickEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickEventPayload>
          }
          findMany: {
            args: Prisma.ClickEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickEventPayload>[]
          }
          create: {
            args: Prisma.ClickEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickEventPayload>
          }
          createMany: {
            args: Prisma.ClickEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClickEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickEventPayload>
          }
          update: {
            args: Prisma.ClickEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickEventPayload>
          }
          deleteMany: {
            args: Prisma.ClickEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClickEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClickEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickEventPayload>
          }
          aggregate: {
            args: Prisma.ClickEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClickEvent>
          }
          groupBy: {
            args: Prisma.ClickEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClickEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClickEventCountArgs<ExtArgs>
            result: $Utils.Optional<ClickEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pageEvent?: PageEventOmit
    metric?: MetricOmit
    error?: ErrorOmit
    clickEvent?: ClickEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PageEventCountOutputType
   */

  export type PageEventCountOutputType = {
    performance: number
    errors: number
    clicks: number
  }

  export type PageEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performance?: boolean | PageEventCountOutputTypeCountPerformanceArgs
    errors?: boolean | PageEventCountOutputTypeCountErrorsArgs
    clicks?: boolean | PageEventCountOutputTypeCountClicksArgs
  }

  // Custom InputTypes
  /**
   * PageEventCountOutputType without action
   */
  export type PageEventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageEventCountOutputType
     */
    select?: PageEventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PageEventCountOutputType without action
   */
  export type PageEventCountOutputTypeCountPerformanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
  }

  /**
   * PageEventCountOutputType without action
   */
  export type PageEventCountOutputTypeCountErrorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorWhereInput
  }

  /**
   * PageEventCountOutputType without action
   */
  export type PageEventCountOutputTypeCountClicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClickEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PageEvent
   */

  export type AggregatePageEvent = {
    _count: PageEventCountAggregateOutputType | null
    _min: PageEventMinAggregateOutputType | null
    _max: PageEventMaxAggregateOutputType | null
  }

  export type PageEventMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    url: string | null
    referrer: string | null
    userAgent: string | null
    ip: string | null
    country: string | null
    region: string | null
    deviceType: string | null
    timestamp: Date | null
  }

  export type PageEventMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    url: string | null
    referrer: string | null
    userAgent: string | null
    ip: string | null
    country: string | null
    region: string | null
    deviceType: string | null
    timestamp: Date | null
  }

  export type PageEventCountAggregateOutputType = {
    id: number
    sessionId: number
    url: number
    referrer: number
    userAgent: number
    ip: number
    country: number
    region: number
    deviceType: number
    timestamp: number
    _all: number
  }


  export type PageEventMinAggregateInputType = {
    id?: true
    sessionId?: true
    url?: true
    referrer?: true
    userAgent?: true
    ip?: true
    country?: true
    region?: true
    deviceType?: true
    timestamp?: true
  }

  export type PageEventMaxAggregateInputType = {
    id?: true
    sessionId?: true
    url?: true
    referrer?: true
    userAgent?: true
    ip?: true
    country?: true
    region?: true
    deviceType?: true
    timestamp?: true
  }

  export type PageEventCountAggregateInputType = {
    id?: true
    sessionId?: true
    url?: true
    referrer?: true
    userAgent?: true
    ip?: true
    country?: true
    region?: true
    deviceType?: true
    timestamp?: true
    _all?: true
  }

  export type PageEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageEvent to aggregate.
     */
    where?: PageEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageEvents to fetch.
     */
    orderBy?: PageEventOrderByWithRelationInput | PageEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageEvents
    **/
    _count?: true | PageEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageEventMaxAggregateInputType
  }

  export type GetPageEventAggregateType<T extends PageEventAggregateArgs> = {
        [P in keyof T & keyof AggregatePageEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageEvent[P]>
      : GetScalarType<T[P], AggregatePageEvent[P]>
  }




  export type PageEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageEventWhereInput
    orderBy?: PageEventOrderByWithAggregationInput | PageEventOrderByWithAggregationInput[]
    by: PageEventScalarFieldEnum[] | PageEventScalarFieldEnum
    having?: PageEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageEventCountAggregateInputType | true
    _min?: PageEventMinAggregateInputType
    _max?: PageEventMaxAggregateInputType
  }

  export type PageEventGroupByOutputType = {
    id: string
    sessionId: string
    url: string
    referrer: string | null
    userAgent: string
    ip: string | null
    country: string | null
    region: string | null
    deviceType: string | null
    timestamp: Date
    _count: PageEventCountAggregateOutputType | null
    _min: PageEventMinAggregateOutputType | null
    _max: PageEventMaxAggregateOutputType | null
  }

  type GetPageEventGroupByPayload<T extends PageEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageEventGroupByOutputType[P]>
            : GetScalarType<T[P], PageEventGroupByOutputType[P]>
        }
      >
    >


  export type PageEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    url?: boolean
    referrer?: boolean
    userAgent?: boolean
    ip?: boolean
    country?: boolean
    region?: boolean
    deviceType?: boolean
    timestamp?: boolean
    performance?: boolean | PageEvent$performanceArgs<ExtArgs>
    errors?: boolean | PageEvent$errorsArgs<ExtArgs>
    clicks?: boolean | PageEvent$clicksArgs<ExtArgs>
    _count?: boolean | PageEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageEvent"]>



  export type PageEventSelectScalar = {
    id?: boolean
    sessionId?: boolean
    url?: boolean
    referrer?: boolean
    userAgent?: boolean
    ip?: boolean
    country?: boolean
    region?: boolean
    deviceType?: boolean
    timestamp?: boolean
  }

  export type PageEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "url" | "referrer" | "userAgent" | "ip" | "country" | "region" | "deviceType" | "timestamp", ExtArgs["result"]["pageEvent"]>
  export type PageEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performance?: boolean | PageEvent$performanceArgs<ExtArgs>
    errors?: boolean | PageEvent$errorsArgs<ExtArgs>
    clicks?: boolean | PageEvent$clicksArgs<ExtArgs>
    _count?: boolean | PageEventCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PageEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageEvent"
    objects: {
      performance: Prisma.$MetricPayload<ExtArgs>[]
      errors: Prisma.$ErrorPayload<ExtArgs>[]
      clicks: Prisma.$ClickEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      url: string
      referrer: string | null
      userAgent: string
      ip: string | null
      country: string | null
      region: string | null
      deviceType: string | null
      timestamp: Date
    }, ExtArgs["result"]["pageEvent"]>
    composites: {}
  }

  type PageEventGetPayload<S extends boolean | null | undefined | PageEventDefaultArgs> = $Result.GetResult<Prisma.$PageEventPayload, S>

  type PageEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageEventCountAggregateInputType | true
    }

  export interface PageEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageEvent'], meta: { name: 'PageEvent' } }
    /**
     * Find zero or one PageEvent that matches the filter.
     * @param {PageEventFindUniqueArgs} args - Arguments to find a PageEvent
     * @example
     * // Get one PageEvent
     * const pageEvent = await prisma.pageEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageEventFindUniqueArgs>(args: SelectSubset<T, PageEventFindUniqueArgs<ExtArgs>>): Prisma__PageEventClient<$Result.GetResult<Prisma.$PageEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageEventFindUniqueOrThrowArgs} args - Arguments to find a PageEvent
     * @example
     * // Get one PageEvent
     * const pageEvent = await prisma.pageEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageEventFindUniqueOrThrowArgs>(args: SelectSubset<T, PageEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageEventClient<$Result.GetResult<Prisma.$PageEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageEventFindFirstArgs} args - Arguments to find a PageEvent
     * @example
     * // Get one PageEvent
     * const pageEvent = await prisma.pageEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageEventFindFirstArgs>(args?: SelectSubset<T, PageEventFindFirstArgs<ExtArgs>>): Prisma__PageEventClient<$Result.GetResult<Prisma.$PageEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageEventFindFirstOrThrowArgs} args - Arguments to find a PageEvent
     * @example
     * // Get one PageEvent
     * const pageEvent = await prisma.pageEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageEventFindFirstOrThrowArgs>(args?: SelectSubset<T, PageEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageEventClient<$Result.GetResult<Prisma.$PageEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageEvents
     * const pageEvents = await prisma.pageEvent.findMany()
     * 
     * // Get first 10 PageEvents
     * const pageEvents = await prisma.pageEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageEventWithIdOnly = await prisma.pageEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageEventFindManyArgs>(args?: SelectSubset<T, PageEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageEvent.
     * @param {PageEventCreateArgs} args - Arguments to create a PageEvent.
     * @example
     * // Create one PageEvent
     * const PageEvent = await prisma.pageEvent.create({
     *   data: {
     *     // ... data to create a PageEvent
     *   }
     * })
     * 
     */
    create<T extends PageEventCreateArgs>(args: SelectSubset<T, PageEventCreateArgs<ExtArgs>>): Prisma__PageEventClient<$Result.GetResult<Prisma.$PageEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageEvents.
     * @param {PageEventCreateManyArgs} args - Arguments to create many PageEvents.
     * @example
     * // Create many PageEvents
     * const pageEvent = await prisma.pageEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageEventCreateManyArgs>(args?: SelectSubset<T, PageEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PageEvent.
     * @param {PageEventDeleteArgs} args - Arguments to delete one PageEvent.
     * @example
     * // Delete one PageEvent
     * const PageEvent = await prisma.pageEvent.delete({
     *   where: {
     *     // ... filter to delete one PageEvent
     *   }
     * })
     * 
     */
    delete<T extends PageEventDeleteArgs>(args: SelectSubset<T, PageEventDeleteArgs<ExtArgs>>): Prisma__PageEventClient<$Result.GetResult<Prisma.$PageEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageEvent.
     * @param {PageEventUpdateArgs} args - Arguments to update one PageEvent.
     * @example
     * // Update one PageEvent
     * const pageEvent = await prisma.pageEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageEventUpdateArgs>(args: SelectSubset<T, PageEventUpdateArgs<ExtArgs>>): Prisma__PageEventClient<$Result.GetResult<Prisma.$PageEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageEvents.
     * @param {PageEventDeleteManyArgs} args - Arguments to filter PageEvents to delete.
     * @example
     * // Delete a few PageEvents
     * const { count } = await prisma.pageEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageEventDeleteManyArgs>(args?: SelectSubset<T, PageEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageEvents
     * const pageEvent = await prisma.pageEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageEventUpdateManyArgs>(args: SelectSubset<T, PageEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PageEvent.
     * @param {PageEventUpsertArgs} args - Arguments to update or create a PageEvent.
     * @example
     * // Update or create a PageEvent
     * const pageEvent = await prisma.pageEvent.upsert({
     *   create: {
     *     // ... data to create a PageEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageEvent we want to update
     *   }
     * })
     */
    upsert<T extends PageEventUpsertArgs>(args: SelectSubset<T, PageEventUpsertArgs<ExtArgs>>): Prisma__PageEventClient<$Result.GetResult<Prisma.$PageEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageEventCountArgs} args - Arguments to filter PageEvents to count.
     * @example
     * // Count the number of PageEvents
     * const count = await prisma.pageEvent.count({
     *   where: {
     *     // ... the filter for the PageEvents we want to count
     *   }
     * })
    **/
    count<T extends PageEventCountArgs>(
      args?: Subset<T, PageEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageEventAggregateArgs>(args: Subset<T, PageEventAggregateArgs>): Prisma.PrismaPromise<GetPageEventAggregateType<T>>

    /**
     * Group by PageEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageEventGroupByArgs['orderBy'] }
        : { orderBy?: PageEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageEvent model
   */
  readonly fields: PageEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    performance<T extends PageEvent$performanceArgs<ExtArgs> = {}>(args?: Subset<T, PageEvent$performanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    errors<T extends PageEvent$errorsArgs<ExtArgs> = {}>(args?: Subset<T, PageEvent$errorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clicks<T extends PageEvent$clicksArgs<ExtArgs> = {}>(args?: Subset<T, PageEvent$clicksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PageEvent model
   */
  interface PageEventFieldRefs {
    readonly id: FieldRef<"PageEvent", 'String'>
    readonly sessionId: FieldRef<"PageEvent", 'String'>
    readonly url: FieldRef<"PageEvent", 'String'>
    readonly referrer: FieldRef<"PageEvent", 'String'>
    readonly userAgent: FieldRef<"PageEvent", 'String'>
    readonly ip: FieldRef<"PageEvent", 'String'>
    readonly country: FieldRef<"PageEvent", 'String'>
    readonly region: FieldRef<"PageEvent", 'String'>
    readonly deviceType: FieldRef<"PageEvent", 'String'>
    readonly timestamp: FieldRef<"PageEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PageEvent findUnique
   */
  export type PageEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageEvent
     */
    select?: PageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageEvent
     */
    omit?: PageEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageEventInclude<ExtArgs> | null
    /**
     * Filter, which PageEvent to fetch.
     */
    where: PageEventWhereUniqueInput
  }

  /**
   * PageEvent findUniqueOrThrow
   */
  export type PageEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageEvent
     */
    select?: PageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageEvent
     */
    omit?: PageEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageEventInclude<ExtArgs> | null
    /**
     * Filter, which PageEvent to fetch.
     */
    where: PageEventWhereUniqueInput
  }

  /**
   * PageEvent findFirst
   */
  export type PageEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageEvent
     */
    select?: PageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageEvent
     */
    omit?: PageEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageEventInclude<ExtArgs> | null
    /**
     * Filter, which PageEvent to fetch.
     */
    where?: PageEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageEvents to fetch.
     */
    orderBy?: PageEventOrderByWithRelationInput | PageEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageEvents.
     */
    cursor?: PageEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageEvents.
     */
    distinct?: PageEventScalarFieldEnum | PageEventScalarFieldEnum[]
  }

  /**
   * PageEvent findFirstOrThrow
   */
  export type PageEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageEvent
     */
    select?: PageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageEvent
     */
    omit?: PageEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageEventInclude<ExtArgs> | null
    /**
     * Filter, which PageEvent to fetch.
     */
    where?: PageEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageEvents to fetch.
     */
    orderBy?: PageEventOrderByWithRelationInput | PageEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageEvents.
     */
    cursor?: PageEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageEvents.
     */
    distinct?: PageEventScalarFieldEnum | PageEventScalarFieldEnum[]
  }

  /**
   * PageEvent findMany
   */
  export type PageEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageEvent
     */
    select?: PageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageEvent
     */
    omit?: PageEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageEventInclude<ExtArgs> | null
    /**
     * Filter, which PageEvents to fetch.
     */
    where?: PageEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageEvents to fetch.
     */
    orderBy?: PageEventOrderByWithRelationInput | PageEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageEvents.
     */
    cursor?: PageEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageEvents.
     */
    skip?: number
    distinct?: PageEventScalarFieldEnum | PageEventScalarFieldEnum[]
  }

  /**
   * PageEvent create
   */
  export type PageEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageEvent
     */
    select?: PageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageEvent
     */
    omit?: PageEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageEventInclude<ExtArgs> | null
    /**
     * The data needed to create a PageEvent.
     */
    data: XOR<PageEventCreateInput, PageEventUncheckedCreateInput>
  }

  /**
   * PageEvent createMany
   */
  export type PageEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageEvents.
     */
    data: PageEventCreateManyInput | PageEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageEvent update
   */
  export type PageEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageEvent
     */
    select?: PageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageEvent
     */
    omit?: PageEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageEventInclude<ExtArgs> | null
    /**
     * The data needed to update a PageEvent.
     */
    data: XOR<PageEventUpdateInput, PageEventUncheckedUpdateInput>
    /**
     * Choose, which PageEvent to update.
     */
    where: PageEventWhereUniqueInput
  }

  /**
   * PageEvent updateMany
   */
  export type PageEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageEvents.
     */
    data: XOR<PageEventUpdateManyMutationInput, PageEventUncheckedUpdateManyInput>
    /**
     * Filter which PageEvents to update
     */
    where?: PageEventWhereInput
    /**
     * Limit how many PageEvents to update.
     */
    limit?: number
  }

  /**
   * PageEvent upsert
   */
  export type PageEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageEvent
     */
    select?: PageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageEvent
     */
    omit?: PageEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageEventInclude<ExtArgs> | null
    /**
     * The filter to search for the PageEvent to update in case it exists.
     */
    where: PageEventWhereUniqueInput
    /**
     * In case the PageEvent found by the `where` argument doesn't exist, create a new PageEvent with this data.
     */
    create: XOR<PageEventCreateInput, PageEventUncheckedCreateInput>
    /**
     * In case the PageEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageEventUpdateInput, PageEventUncheckedUpdateInput>
  }

  /**
   * PageEvent delete
   */
  export type PageEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageEvent
     */
    select?: PageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageEvent
     */
    omit?: PageEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageEventInclude<ExtArgs> | null
    /**
     * Filter which PageEvent to delete.
     */
    where: PageEventWhereUniqueInput
  }

  /**
   * PageEvent deleteMany
   */
  export type PageEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageEvents to delete
     */
    where?: PageEventWhereInput
    /**
     * Limit how many PageEvents to delete.
     */
    limit?: number
  }

  /**
   * PageEvent.performance
   */
  export type PageEvent$performanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    cursor?: MetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * PageEvent.errors
   */
  export type PageEvent$errorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorInclude<ExtArgs> | null
    where?: ErrorWhereInput
    orderBy?: ErrorOrderByWithRelationInput | ErrorOrderByWithRelationInput[]
    cursor?: ErrorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ErrorScalarFieldEnum | ErrorScalarFieldEnum[]
  }

  /**
   * PageEvent.clicks
   */
  export type PageEvent$clicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickEvent
     */
    select?: ClickEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickEvent
     */
    omit?: ClickEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickEventInclude<ExtArgs> | null
    where?: ClickEventWhereInput
    orderBy?: ClickEventOrderByWithRelationInput | ClickEventOrderByWithRelationInput[]
    cursor?: ClickEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClickEventScalarFieldEnum | ClickEventScalarFieldEnum[]
  }

  /**
   * PageEvent without action
   */
  export type PageEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageEvent
     */
    select?: PageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageEvent
     */
    omit?: PageEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageEventInclude<ExtArgs> | null
  }


  /**
   * Model Metric
   */

  export type AggregateMetric = {
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  export type MetricAvgAggregateOutputType = {
    value: number | null
  }

  export type MetricSumAggregateOutputType = {
    value: number | null
  }

  export type MetricMinAggregateOutputType = {
    id: string | null
    name: string | null
    value: number | null
    eventId: string | null
  }

  export type MetricMaxAggregateOutputType = {
    id: string | null
    name: string | null
    value: number | null
    eventId: string | null
  }

  export type MetricCountAggregateOutputType = {
    id: number
    name: number
    value: number
    eventId: number
    _all: number
  }


  export type MetricAvgAggregateInputType = {
    value?: true
  }

  export type MetricSumAggregateInputType = {
    value?: true
  }

  export type MetricMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    eventId?: true
  }

  export type MetricMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    eventId?: true
  }

  export type MetricCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    eventId?: true
    _all?: true
  }

  export type MetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metric to aggregate.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrics
    **/
    _count?: true | MetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricMaxAggregateInputType
  }

  export type GetMetricAggregateType<T extends MetricAggregateArgs> = {
        [P in keyof T & keyof AggregateMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetric[P]>
      : GetScalarType<T[P], AggregateMetric[P]>
  }




  export type MetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithAggregationInput | MetricOrderByWithAggregationInput[]
    by: MetricScalarFieldEnum[] | MetricScalarFieldEnum
    having?: MetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricCountAggregateInputType | true
    _avg?: MetricAvgAggregateInputType
    _sum?: MetricSumAggregateInputType
    _min?: MetricMinAggregateInputType
    _max?: MetricMaxAggregateInputType
  }

  export type MetricGroupByOutputType = {
    id: string
    name: string
    value: number
    eventId: string
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  type GetMetricGroupByPayload<T extends MetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricGroupByOutputType[P]>
            : GetScalarType<T[P], MetricGroupByOutputType[P]>
        }
      >
    >


  export type MetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    eventId?: boolean
    event?: boolean | PageEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>



  export type MetricSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    eventId?: boolean
  }

  export type MetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "eventId", ExtArgs["result"]["metric"]>
  export type MetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | PageEventDefaultArgs<ExtArgs>
  }

  export type $MetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metric"
    objects: {
      event: Prisma.$PageEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      value: number
      eventId: string
    }, ExtArgs["result"]["metric"]>
    composites: {}
  }

  type MetricGetPayload<S extends boolean | null | undefined | MetricDefaultArgs> = $Result.GetResult<Prisma.$MetricPayload, S>

  type MetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricCountAggregateInputType | true
    }

  export interface MetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metric'], meta: { name: 'Metric' } }
    /**
     * Find zero or one Metric that matches the filter.
     * @param {MetricFindUniqueArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricFindUniqueArgs>(args: SelectSubset<T, MetricFindUniqueArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricFindUniqueOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricFindFirstArgs>(args?: SelectSubset<T, MetricFindFirstArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metric.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricWithIdOnly = await prisma.metric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricFindManyArgs>(args?: SelectSubset<T, MetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metric.
     * @param {MetricCreateArgs} args - Arguments to create a Metric.
     * @example
     * // Create one Metric
     * const Metric = await prisma.metric.create({
     *   data: {
     *     // ... data to create a Metric
     *   }
     * })
     * 
     */
    create<T extends MetricCreateArgs>(args: SelectSubset<T, MetricCreateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metrics.
     * @param {MetricCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricCreateManyArgs>(args?: SelectSubset<T, MetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Metric.
     * @param {MetricDeleteArgs} args - Arguments to delete one Metric.
     * @example
     * // Delete one Metric
     * const Metric = await prisma.metric.delete({
     *   where: {
     *     // ... filter to delete one Metric
     *   }
     * })
     * 
     */
    delete<T extends MetricDeleteArgs>(args: SelectSubset<T, MetricDeleteArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metric.
     * @param {MetricUpdateArgs} args - Arguments to update one Metric.
     * @example
     * // Update one Metric
     * const metric = await prisma.metric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricUpdateArgs>(args: SelectSubset<T, MetricUpdateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metrics.
     * @param {MetricDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricDeleteManyArgs>(args?: SelectSubset<T, MetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricUpdateManyArgs>(args: SelectSubset<T, MetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Metric.
     * @param {MetricUpsertArgs} args - Arguments to update or create a Metric.
     * @example
     * // Update or create a Metric
     * const metric = await prisma.metric.upsert({
     *   create: {
     *     // ... data to create a Metric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metric we want to update
     *   }
     * })
     */
    upsert<T extends MetricUpsertArgs>(args: SelectSubset<T, MetricUpsertArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metric.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends MetricCountArgs>(
      args?: Subset<T, MetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricAggregateArgs>(args: Subset<T, MetricAggregateArgs>): Prisma.PrismaPromise<GetMetricAggregateType<T>>

    /**
     * Group by Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricGroupByArgs['orderBy'] }
        : { orderBy?: MetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metric model
   */
  readonly fields: MetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends PageEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageEventDefaultArgs<ExtArgs>>): Prisma__PageEventClient<$Result.GetResult<Prisma.$PageEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Metric model
   */
  interface MetricFieldRefs {
    readonly id: FieldRef<"Metric", 'String'>
    readonly name: FieldRef<"Metric", 'String'>
    readonly value: FieldRef<"Metric", 'Float'>
    readonly eventId: FieldRef<"Metric", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Metric findUnique
   */
  export type MetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findUniqueOrThrow
   */
  export type MetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findFirst
   */
  export type MetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findFirstOrThrow
   */
  export type MetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findMany
   */
  export type MetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric create
   */
  export type MetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to create a Metric.
     */
    data: XOR<MetricCreateInput, MetricUncheckedCreateInput>
  }

  /**
   * Metric createMany
   */
  export type MetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metric update
   */
  export type MetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to update a Metric.
     */
    data: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
    /**
     * Choose, which Metric to update.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric updateMany
   */
  export type MetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
  }

  /**
   * Metric upsert
   */
  export type MetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The filter to search for the Metric to update in case it exists.
     */
    where: MetricWhereUniqueInput
    /**
     * In case the Metric found by the `where` argument doesn't exist, create a new Metric with this data.
     */
    create: XOR<MetricCreateInput, MetricUncheckedCreateInput>
    /**
     * In case the Metric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
  }

  /**
   * Metric delete
   */
  export type MetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter which Metric to delete.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric deleteMany
   */
  export type MetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to delete
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to delete.
     */
    limit?: number
  }

  /**
   * Metric without action
   */
  export type MetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
  }


  /**
   * Model Error
   */

  export type AggregateError = {
    _count: ErrorCountAggregateOutputType | null
    _avg: ErrorAvgAggregateOutputType | null
    _sum: ErrorSumAggregateOutputType | null
    _min: ErrorMinAggregateOutputType | null
    _max: ErrorMaxAggregateOutputType | null
  }

  export type ErrorAvgAggregateOutputType = {
    lineno: number | null
    colno: number | null
  }

  export type ErrorSumAggregateOutputType = {
    lineno: number | null
    colno: number | null
  }

  export type ErrorMinAggregateOutputType = {
    id: string | null
    message: string | null
    stack: string | null
    filename: string | null
    lineno: number | null
    colno: number | null
    eventId: string | null
  }

  export type ErrorMaxAggregateOutputType = {
    id: string | null
    message: string | null
    stack: string | null
    filename: string | null
    lineno: number | null
    colno: number | null
    eventId: string | null
  }

  export type ErrorCountAggregateOutputType = {
    id: number
    message: number
    stack: number
    filename: number
    lineno: number
    colno: number
    eventId: number
    _all: number
  }


  export type ErrorAvgAggregateInputType = {
    lineno?: true
    colno?: true
  }

  export type ErrorSumAggregateInputType = {
    lineno?: true
    colno?: true
  }

  export type ErrorMinAggregateInputType = {
    id?: true
    message?: true
    stack?: true
    filename?: true
    lineno?: true
    colno?: true
    eventId?: true
  }

  export type ErrorMaxAggregateInputType = {
    id?: true
    message?: true
    stack?: true
    filename?: true
    lineno?: true
    colno?: true
    eventId?: true
  }

  export type ErrorCountAggregateInputType = {
    id?: true
    message?: true
    stack?: true
    filename?: true
    lineno?: true
    colno?: true
    eventId?: true
    _all?: true
  }

  export type ErrorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Error to aggregate.
     */
    where?: ErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Errors to fetch.
     */
    orderBy?: ErrorOrderByWithRelationInput | ErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Errors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Errors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Errors
    **/
    _count?: true | ErrorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ErrorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ErrorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ErrorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ErrorMaxAggregateInputType
  }

  export type GetErrorAggregateType<T extends ErrorAggregateArgs> = {
        [P in keyof T & keyof AggregateError]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateError[P]>
      : GetScalarType<T[P], AggregateError[P]>
  }




  export type ErrorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorWhereInput
    orderBy?: ErrorOrderByWithAggregationInput | ErrorOrderByWithAggregationInput[]
    by: ErrorScalarFieldEnum[] | ErrorScalarFieldEnum
    having?: ErrorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ErrorCountAggregateInputType | true
    _avg?: ErrorAvgAggregateInputType
    _sum?: ErrorSumAggregateInputType
    _min?: ErrorMinAggregateInputType
    _max?: ErrorMaxAggregateInputType
  }

  export type ErrorGroupByOutputType = {
    id: string
    message: string
    stack: string | null
    filename: string | null
    lineno: number | null
    colno: number | null
    eventId: string
    _count: ErrorCountAggregateOutputType | null
    _avg: ErrorAvgAggregateOutputType | null
    _sum: ErrorSumAggregateOutputType | null
    _min: ErrorMinAggregateOutputType | null
    _max: ErrorMaxAggregateOutputType | null
  }

  type GetErrorGroupByPayload<T extends ErrorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ErrorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ErrorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ErrorGroupByOutputType[P]>
            : GetScalarType<T[P], ErrorGroupByOutputType[P]>
        }
      >
    >


  export type ErrorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    stack?: boolean
    filename?: boolean
    lineno?: boolean
    colno?: boolean
    eventId?: boolean
    event?: boolean | PageEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["error"]>



  export type ErrorSelectScalar = {
    id?: boolean
    message?: boolean
    stack?: boolean
    filename?: boolean
    lineno?: boolean
    colno?: boolean
    eventId?: boolean
  }

  export type ErrorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "stack" | "filename" | "lineno" | "colno" | "eventId", ExtArgs["result"]["error"]>
  export type ErrorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | PageEventDefaultArgs<ExtArgs>
  }

  export type $ErrorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Error"
    objects: {
      event: Prisma.$PageEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      stack: string | null
      filename: string | null
      lineno: number | null
      colno: number | null
      eventId: string
    }, ExtArgs["result"]["error"]>
    composites: {}
  }

  type ErrorGetPayload<S extends boolean | null | undefined | ErrorDefaultArgs> = $Result.GetResult<Prisma.$ErrorPayload, S>

  type ErrorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ErrorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ErrorCountAggregateInputType | true
    }

  export interface ErrorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Error'], meta: { name: 'Error' } }
    /**
     * Find zero or one Error that matches the filter.
     * @param {ErrorFindUniqueArgs} args - Arguments to find a Error
     * @example
     * // Get one Error
     * const error = await prisma.error.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ErrorFindUniqueArgs>(args: SelectSubset<T, ErrorFindUniqueArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Error that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ErrorFindUniqueOrThrowArgs} args - Arguments to find a Error
     * @example
     * // Get one Error
     * const error = await prisma.error.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ErrorFindUniqueOrThrowArgs>(args: SelectSubset<T, ErrorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Error that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorFindFirstArgs} args - Arguments to find a Error
     * @example
     * // Get one Error
     * const error = await prisma.error.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ErrorFindFirstArgs>(args?: SelectSubset<T, ErrorFindFirstArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Error that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorFindFirstOrThrowArgs} args - Arguments to find a Error
     * @example
     * // Get one Error
     * const error = await prisma.error.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ErrorFindFirstOrThrowArgs>(args?: SelectSubset<T, ErrorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Errors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Errors
     * const errors = await prisma.error.findMany()
     * 
     * // Get first 10 Errors
     * const errors = await prisma.error.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const errorWithIdOnly = await prisma.error.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ErrorFindManyArgs>(args?: SelectSubset<T, ErrorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Error.
     * @param {ErrorCreateArgs} args - Arguments to create a Error.
     * @example
     * // Create one Error
     * const Error = await prisma.error.create({
     *   data: {
     *     // ... data to create a Error
     *   }
     * })
     * 
     */
    create<T extends ErrorCreateArgs>(args: SelectSubset<T, ErrorCreateArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Errors.
     * @param {ErrorCreateManyArgs} args - Arguments to create many Errors.
     * @example
     * // Create many Errors
     * const error = await prisma.error.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ErrorCreateManyArgs>(args?: SelectSubset<T, ErrorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Error.
     * @param {ErrorDeleteArgs} args - Arguments to delete one Error.
     * @example
     * // Delete one Error
     * const Error = await prisma.error.delete({
     *   where: {
     *     // ... filter to delete one Error
     *   }
     * })
     * 
     */
    delete<T extends ErrorDeleteArgs>(args: SelectSubset<T, ErrorDeleteArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Error.
     * @param {ErrorUpdateArgs} args - Arguments to update one Error.
     * @example
     * // Update one Error
     * const error = await prisma.error.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ErrorUpdateArgs>(args: SelectSubset<T, ErrorUpdateArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Errors.
     * @param {ErrorDeleteManyArgs} args - Arguments to filter Errors to delete.
     * @example
     * // Delete a few Errors
     * const { count } = await prisma.error.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ErrorDeleteManyArgs>(args?: SelectSubset<T, ErrorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Errors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Errors
     * const error = await prisma.error.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ErrorUpdateManyArgs>(args: SelectSubset<T, ErrorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Error.
     * @param {ErrorUpsertArgs} args - Arguments to update or create a Error.
     * @example
     * // Update or create a Error
     * const error = await prisma.error.upsert({
     *   create: {
     *     // ... data to create a Error
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Error we want to update
     *   }
     * })
     */
    upsert<T extends ErrorUpsertArgs>(args: SelectSubset<T, ErrorUpsertArgs<ExtArgs>>): Prisma__ErrorClient<$Result.GetResult<Prisma.$ErrorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Errors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorCountArgs} args - Arguments to filter Errors to count.
     * @example
     * // Count the number of Errors
     * const count = await prisma.error.count({
     *   where: {
     *     // ... the filter for the Errors we want to count
     *   }
     * })
    **/
    count<T extends ErrorCountArgs>(
      args?: Subset<T, ErrorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ErrorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Error.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ErrorAggregateArgs>(args: Subset<T, ErrorAggregateArgs>): Prisma.PrismaPromise<GetErrorAggregateType<T>>

    /**
     * Group by Error.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ErrorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ErrorGroupByArgs['orderBy'] }
        : { orderBy?: ErrorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ErrorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetErrorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Error model
   */
  readonly fields: ErrorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Error.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ErrorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends PageEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageEventDefaultArgs<ExtArgs>>): Prisma__PageEventClient<$Result.GetResult<Prisma.$PageEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Error model
   */
  interface ErrorFieldRefs {
    readonly id: FieldRef<"Error", 'String'>
    readonly message: FieldRef<"Error", 'String'>
    readonly stack: FieldRef<"Error", 'String'>
    readonly filename: FieldRef<"Error", 'String'>
    readonly lineno: FieldRef<"Error", 'Int'>
    readonly colno: FieldRef<"Error", 'Int'>
    readonly eventId: FieldRef<"Error", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Error findUnique
   */
  export type ErrorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorInclude<ExtArgs> | null
    /**
     * Filter, which Error to fetch.
     */
    where: ErrorWhereUniqueInput
  }

  /**
   * Error findUniqueOrThrow
   */
  export type ErrorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorInclude<ExtArgs> | null
    /**
     * Filter, which Error to fetch.
     */
    where: ErrorWhereUniqueInput
  }

  /**
   * Error findFirst
   */
  export type ErrorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorInclude<ExtArgs> | null
    /**
     * Filter, which Error to fetch.
     */
    where?: ErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Errors to fetch.
     */
    orderBy?: ErrorOrderByWithRelationInput | ErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Errors.
     */
    cursor?: ErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Errors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Errors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Errors.
     */
    distinct?: ErrorScalarFieldEnum | ErrorScalarFieldEnum[]
  }

  /**
   * Error findFirstOrThrow
   */
  export type ErrorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorInclude<ExtArgs> | null
    /**
     * Filter, which Error to fetch.
     */
    where?: ErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Errors to fetch.
     */
    orderBy?: ErrorOrderByWithRelationInput | ErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Errors.
     */
    cursor?: ErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Errors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Errors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Errors.
     */
    distinct?: ErrorScalarFieldEnum | ErrorScalarFieldEnum[]
  }

  /**
   * Error findMany
   */
  export type ErrorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorInclude<ExtArgs> | null
    /**
     * Filter, which Errors to fetch.
     */
    where?: ErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Errors to fetch.
     */
    orderBy?: ErrorOrderByWithRelationInput | ErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Errors.
     */
    cursor?: ErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Errors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Errors.
     */
    skip?: number
    distinct?: ErrorScalarFieldEnum | ErrorScalarFieldEnum[]
  }

  /**
   * Error create
   */
  export type ErrorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorInclude<ExtArgs> | null
    /**
     * The data needed to create a Error.
     */
    data: XOR<ErrorCreateInput, ErrorUncheckedCreateInput>
  }

  /**
   * Error createMany
   */
  export type ErrorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Errors.
     */
    data: ErrorCreateManyInput | ErrorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Error update
   */
  export type ErrorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorInclude<ExtArgs> | null
    /**
     * The data needed to update a Error.
     */
    data: XOR<ErrorUpdateInput, ErrorUncheckedUpdateInput>
    /**
     * Choose, which Error to update.
     */
    where: ErrorWhereUniqueInput
  }

  /**
   * Error updateMany
   */
  export type ErrorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Errors.
     */
    data: XOR<ErrorUpdateManyMutationInput, ErrorUncheckedUpdateManyInput>
    /**
     * Filter which Errors to update
     */
    where?: ErrorWhereInput
    /**
     * Limit how many Errors to update.
     */
    limit?: number
  }

  /**
   * Error upsert
   */
  export type ErrorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorInclude<ExtArgs> | null
    /**
     * The filter to search for the Error to update in case it exists.
     */
    where: ErrorWhereUniqueInput
    /**
     * In case the Error found by the `where` argument doesn't exist, create a new Error with this data.
     */
    create: XOR<ErrorCreateInput, ErrorUncheckedCreateInput>
    /**
     * In case the Error was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ErrorUpdateInput, ErrorUncheckedUpdateInput>
  }

  /**
   * Error delete
   */
  export type ErrorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorInclude<ExtArgs> | null
    /**
     * Filter which Error to delete.
     */
    where: ErrorWhereUniqueInput
  }

  /**
   * Error deleteMany
   */
  export type ErrorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Errors to delete
     */
    where?: ErrorWhereInput
    /**
     * Limit how many Errors to delete.
     */
    limit?: number
  }

  /**
   * Error without action
   */
  export type ErrorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Error
     */
    select?: ErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Error
     */
    omit?: ErrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorInclude<ExtArgs> | null
  }


  /**
   * Model ClickEvent
   */

  export type AggregateClickEvent = {
    _count: ClickEventCountAggregateOutputType | null
    _avg: ClickEventAvgAggregateOutputType | null
    _sum: ClickEventSumAggregateOutputType | null
    _min: ClickEventMinAggregateOutputType | null
    _max: ClickEventMaxAggregateOutputType | null
  }

  export type ClickEventAvgAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type ClickEventSumAggregateOutputType = {
    x: number | null
    y: number | null
  }

  export type ClickEventMinAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    selector: string | null
    eventId: string | null
  }

  export type ClickEventMaxAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    selector: string | null
    eventId: string | null
  }

  export type ClickEventCountAggregateOutputType = {
    id: number
    x: number
    y: number
    selector: number
    eventId: number
    _all: number
  }


  export type ClickEventAvgAggregateInputType = {
    x?: true
    y?: true
  }

  export type ClickEventSumAggregateInputType = {
    x?: true
    y?: true
  }

  export type ClickEventMinAggregateInputType = {
    id?: true
    x?: true
    y?: true
    selector?: true
    eventId?: true
  }

  export type ClickEventMaxAggregateInputType = {
    id?: true
    x?: true
    y?: true
    selector?: true
    eventId?: true
  }

  export type ClickEventCountAggregateInputType = {
    id?: true
    x?: true
    y?: true
    selector?: true
    eventId?: true
    _all?: true
  }

  export type ClickEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClickEvent to aggregate.
     */
    where?: ClickEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickEvents to fetch.
     */
    orderBy?: ClickEventOrderByWithRelationInput | ClickEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClickEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClickEvents
    **/
    _count?: true | ClickEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClickEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClickEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClickEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClickEventMaxAggregateInputType
  }

  export type GetClickEventAggregateType<T extends ClickEventAggregateArgs> = {
        [P in keyof T & keyof AggregateClickEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClickEvent[P]>
      : GetScalarType<T[P], AggregateClickEvent[P]>
  }




  export type ClickEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClickEventWhereInput
    orderBy?: ClickEventOrderByWithAggregationInput | ClickEventOrderByWithAggregationInput[]
    by: ClickEventScalarFieldEnum[] | ClickEventScalarFieldEnum
    having?: ClickEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClickEventCountAggregateInputType | true
    _avg?: ClickEventAvgAggregateInputType
    _sum?: ClickEventSumAggregateInputType
    _min?: ClickEventMinAggregateInputType
    _max?: ClickEventMaxAggregateInputType
  }

  export type ClickEventGroupByOutputType = {
    id: string
    x: number
    y: number
    selector: string
    eventId: string
    _count: ClickEventCountAggregateOutputType | null
    _avg: ClickEventAvgAggregateOutputType | null
    _sum: ClickEventSumAggregateOutputType | null
    _min: ClickEventMinAggregateOutputType | null
    _max: ClickEventMaxAggregateOutputType | null
  }

  type GetClickEventGroupByPayload<T extends ClickEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClickEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClickEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClickEventGroupByOutputType[P]>
            : GetScalarType<T[P], ClickEventGroupByOutputType[P]>
        }
      >
    >


  export type ClickEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    selector?: boolean
    eventId?: boolean
    event?: boolean | PageEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clickEvent"]>



  export type ClickEventSelectScalar = {
    id?: boolean
    x?: boolean
    y?: boolean
    selector?: boolean
    eventId?: boolean
  }

  export type ClickEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "x" | "y" | "selector" | "eventId", ExtArgs["result"]["clickEvent"]>
  export type ClickEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | PageEventDefaultArgs<ExtArgs>
  }

  export type $ClickEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClickEvent"
    objects: {
      event: Prisma.$PageEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      x: number
      y: number
      selector: string
      eventId: string
    }, ExtArgs["result"]["clickEvent"]>
    composites: {}
  }

  type ClickEventGetPayload<S extends boolean | null | undefined | ClickEventDefaultArgs> = $Result.GetResult<Prisma.$ClickEventPayload, S>

  type ClickEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClickEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClickEventCountAggregateInputType | true
    }

  export interface ClickEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClickEvent'], meta: { name: 'ClickEvent' } }
    /**
     * Find zero or one ClickEvent that matches the filter.
     * @param {ClickEventFindUniqueArgs} args - Arguments to find a ClickEvent
     * @example
     * // Get one ClickEvent
     * const clickEvent = await prisma.clickEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClickEventFindUniqueArgs>(args: SelectSubset<T, ClickEventFindUniqueArgs<ExtArgs>>): Prisma__ClickEventClient<$Result.GetResult<Prisma.$ClickEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClickEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClickEventFindUniqueOrThrowArgs} args - Arguments to find a ClickEvent
     * @example
     * // Get one ClickEvent
     * const clickEvent = await prisma.clickEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClickEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ClickEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClickEventClient<$Result.GetResult<Prisma.$ClickEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClickEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickEventFindFirstArgs} args - Arguments to find a ClickEvent
     * @example
     * // Get one ClickEvent
     * const clickEvent = await prisma.clickEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClickEventFindFirstArgs>(args?: SelectSubset<T, ClickEventFindFirstArgs<ExtArgs>>): Prisma__ClickEventClient<$Result.GetResult<Prisma.$ClickEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClickEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickEventFindFirstOrThrowArgs} args - Arguments to find a ClickEvent
     * @example
     * // Get one ClickEvent
     * const clickEvent = await prisma.clickEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClickEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ClickEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClickEventClient<$Result.GetResult<Prisma.$ClickEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClickEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClickEvents
     * const clickEvents = await prisma.clickEvent.findMany()
     * 
     * // Get first 10 ClickEvents
     * const clickEvents = await prisma.clickEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clickEventWithIdOnly = await prisma.clickEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClickEventFindManyArgs>(args?: SelectSubset<T, ClickEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClickEvent.
     * @param {ClickEventCreateArgs} args - Arguments to create a ClickEvent.
     * @example
     * // Create one ClickEvent
     * const ClickEvent = await prisma.clickEvent.create({
     *   data: {
     *     // ... data to create a ClickEvent
     *   }
     * })
     * 
     */
    create<T extends ClickEventCreateArgs>(args: SelectSubset<T, ClickEventCreateArgs<ExtArgs>>): Prisma__ClickEventClient<$Result.GetResult<Prisma.$ClickEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClickEvents.
     * @param {ClickEventCreateManyArgs} args - Arguments to create many ClickEvents.
     * @example
     * // Create many ClickEvents
     * const clickEvent = await prisma.clickEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClickEventCreateManyArgs>(args?: SelectSubset<T, ClickEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClickEvent.
     * @param {ClickEventDeleteArgs} args - Arguments to delete one ClickEvent.
     * @example
     * // Delete one ClickEvent
     * const ClickEvent = await prisma.clickEvent.delete({
     *   where: {
     *     // ... filter to delete one ClickEvent
     *   }
     * })
     * 
     */
    delete<T extends ClickEventDeleteArgs>(args: SelectSubset<T, ClickEventDeleteArgs<ExtArgs>>): Prisma__ClickEventClient<$Result.GetResult<Prisma.$ClickEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClickEvent.
     * @param {ClickEventUpdateArgs} args - Arguments to update one ClickEvent.
     * @example
     * // Update one ClickEvent
     * const clickEvent = await prisma.clickEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClickEventUpdateArgs>(args: SelectSubset<T, ClickEventUpdateArgs<ExtArgs>>): Prisma__ClickEventClient<$Result.GetResult<Prisma.$ClickEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClickEvents.
     * @param {ClickEventDeleteManyArgs} args - Arguments to filter ClickEvents to delete.
     * @example
     * // Delete a few ClickEvents
     * const { count } = await prisma.clickEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClickEventDeleteManyArgs>(args?: SelectSubset<T, ClickEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClickEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClickEvents
     * const clickEvent = await prisma.clickEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClickEventUpdateManyArgs>(args: SelectSubset<T, ClickEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClickEvent.
     * @param {ClickEventUpsertArgs} args - Arguments to update or create a ClickEvent.
     * @example
     * // Update or create a ClickEvent
     * const clickEvent = await prisma.clickEvent.upsert({
     *   create: {
     *     // ... data to create a ClickEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClickEvent we want to update
     *   }
     * })
     */
    upsert<T extends ClickEventUpsertArgs>(args: SelectSubset<T, ClickEventUpsertArgs<ExtArgs>>): Prisma__ClickEventClient<$Result.GetResult<Prisma.$ClickEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClickEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickEventCountArgs} args - Arguments to filter ClickEvents to count.
     * @example
     * // Count the number of ClickEvents
     * const count = await prisma.clickEvent.count({
     *   where: {
     *     // ... the filter for the ClickEvents we want to count
     *   }
     * })
    **/
    count<T extends ClickEventCountArgs>(
      args?: Subset<T, ClickEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClickEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClickEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClickEventAggregateArgs>(args: Subset<T, ClickEventAggregateArgs>): Prisma.PrismaPromise<GetClickEventAggregateType<T>>

    /**
     * Group by ClickEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClickEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClickEventGroupByArgs['orderBy'] }
        : { orderBy?: ClickEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClickEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClickEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClickEvent model
   */
  readonly fields: ClickEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClickEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClickEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends PageEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageEventDefaultArgs<ExtArgs>>): Prisma__PageEventClient<$Result.GetResult<Prisma.$PageEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClickEvent model
   */
  interface ClickEventFieldRefs {
    readonly id: FieldRef<"ClickEvent", 'String'>
    readonly x: FieldRef<"ClickEvent", 'Int'>
    readonly y: FieldRef<"ClickEvent", 'Int'>
    readonly selector: FieldRef<"ClickEvent", 'String'>
    readonly eventId: FieldRef<"ClickEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClickEvent findUnique
   */
  export type ClickEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickEvent
     */
    select?: ClickEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickEvent
     */
    omit?: ClickEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickEventInclude<ExtArgs> | null
    /**
     * Filter, which ClickEvent to fetch.
     */
    where: ClickEventWhereUniqueInput
  }

  /**
   * ClickEvent findUniqueOrThrow
   */
  export type ClickEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickEvent
     */
    select?: ClickEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickEvent
     */
    omit?: ClickEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickEventInclude<ExtArgs> | null
    /**
     * Filter, which ClickEvent to fetch.
     */
    where: ClickEventWhereUniqueInput
  }

  /**
   * ClickEvent findFirst
   */
  export type ClickEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickEvent
     */
    select?: ClickEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickEvent
     */
    omit?: ClickEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickEventInclude<ExtArgs> | null
    /**
     * Filter, which ClickEvent to fetch.
     */
    where?: ClickEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickEvents to fetch.
     */
    orderBy?: ClickEventOrderByWithRelationInput | ClickEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClickEvents.
     */
    cursor?: ClickEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClickEvents.
     */
    distinct?: ClickEventScalarFieldEnum | ClickEventScalarFieldEnum[]
  }

  /**
   * ClickEvent findFirstOrThrow
   */
  export type ClickEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickEvent
     */
    select?: ClickEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickEvent
     */
    omit?: ClickEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickEventInclude<ExtArgs> | null
    /**
     * Filter, which ClickEvent to fetch.
     */
    where?: ClickEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickEvents to fetch.
     */
    orderBy?: ClickEventOrderByWithRelationInput | ClickEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClickEvents.
     */
    cursor?: ClickEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClickEvents.
     */
    distinct?: ClickEventScalarFieldEnum | ClickEventScalarFieldEnum[]
  }

  /**
   * ClickEvent findMany
   */
  export type ClickEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickEvent
     */
    select?: ClickEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickEvent
     */
    omit?: ClickEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickEventInclude<ExtArgs> | null
    /**
     * Filter, which ClickEvents to fetch.
     */
    where?: ClickEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickEvents to fetch.
     */
    orderBy?: ClickEventOrderByWithRelationInput | ClickEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClickEvents.
     */
    cursor?: ClickEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickEvents.
     */
    skip?: number
    distinct?: ClickEventScalarFieldEnum | ClickEventScalarFieldEnum[]
  }

  /**
   * ClickEvent create
   */
  export type ClickEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickEvent
     */
    select?: ClickEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickEvent
     */
    omit?: ClickEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ClickEvent.
     */
    data: XOR<ClickEventCreateInput, ClickEventUncheckedCreateInput>
  }

  /**
   * ClickEvent createMany
   */
  export type ClickEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClickEvents.
     */
    data: ClickEventCreateManyInput | ClickEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClickEvent update
   */
  export type ClickEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickEvent
     */
    select?: ClickEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickEvent
     */
    omit?: ClickEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ClickEvent.
     */
    data: XOR<ClickEventUpdateInput, ClickEventUncheckedUpdateInput>
    /**
     * Choose, which ClickEvent to update.
     */
    where: ClickEventWhereUniqueInput
  }

  /**
   * ClickEvent updateMany
   */
  export type ClickEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClickEvents.
     */
    data: XOR<ClickEventUpdateManyMutationInput, ClickEventUncheckedUpdateManyInput>
    /**
     * Filter which ClickEvents to update
     */
    where?: ClickEventWhereInput
    /**
     * Limit how many ClickEvents to update.
     */
    limit?: number
  }

  /**
   * ClickEvent upsert
   */
  export type ClickEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickEvent
     */
    select?: ClickEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickEvent
     */
    omit?: ClickEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ClickEvent to update in case it exists.
     */
    where: ClickEventWhereUniqueInput
    /**
     * In case the ClickEvent found by the `where` argument doesn't exist, create a new ClickEvent with this data.
     */
    create: XOR<ClickEventCreateInput, ClickEventUncheckedCreateInput>
    /**
     * In case the ClickEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClickEventUpdateInput, ClickEventUncheckedUpdateInput>
  }

  /**
   * ClickEvent delete
   */
  export type ClickEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickEvent
     */
    select?: ClickEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickEvent
     */
    omit?: ClickEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickEventInclude<ExtArgs> | null
    /**
     * Filter which ClickEvent to delete.
     */
    where: ClickEventWhereUniqueInput
  }

  /**
   * ClickEvent deleteMany
   */
  export type ClickEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClickEvents to delete
     */
    where?: ClickEventWhereInput
    /**
     * Limit how many ClickEvents to delete.
     */
    limit?: number
  }

  /**
   * ClickEvent without action
   */
  export type ClickEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickEvent
     */
    select?: ClickEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClickEvent
     */
    omit?: ClickEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PageEventScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    url: 'url',
    referrer: 'referrer',
    userAgent: 'userAgent',
    ip: 'ip',
    country: 'country',
    region: 'region',
    deviceType: 'deviceType',
    timestamp: 'timestamp'
  };

  export type PageEventScalarFieldEnum = (typeof PageEventScalarFieldEnum)[keyof typeof PageEventScalarFieldEnum]


  export const MetricScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    eventId: 'eventId'
  };

  export type MetricScalarFieldEnum = (typeof MetricScalarFieldEnum)[keyof typeof MetricScalarFieldEnum]


  export const ErrorScalarFieldEnum: {
    id: 'id',
    message: 'message',
    stack: 'stack',
    filename: 'filename',
    lineno: 'lineno',
    colno: 'colno',
    eventId: 'eventId'
  };

  export type ErrorScalarFieldEnum = (typeof ErrorScalarFieldEnum)[keyof typeof ErrorScalarFieldEnum]


  export const ClickEventScalarFieldEnum: {
    id: 'id',
    x: 'x',
    y: 'y',
    selector: 'selector',
    eventId: 'eventId'
  };

  export type ClickEventScalarFieldEnum = (typeof ClickEventScalarFieldEnum)[keyof typeof ClickEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PageEventOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    url: 'url',
    referrer: 'referrer',
    userAgent: 'userAgent',
    ip: 'ip',
    country: 'country',
    region: 'region',
    deviceType: 'deviceType'
  };

  export type PageEventOrderByRelevanceFieldEnum = (typeof PageEventOrderByRelevanceFieldEnum)[keyof typeof PageEventOrderByRelevanceFieldEnum]


  export const MetricOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    eventId: 'eventId'
  };

  export type MetricOrderByRelevanceFieldEnum = (typeof MetricOrderByRelevanceFieldEnum)[keyof typeof MetricOrderByRelevanceFieldEnum]


  export const ErrorOrderByRelevanceFieldEnum: {
    id: 'id',
    message: 'message',
    stack: 'stack',
    filename: 'filename',
    eventId: 'eventId'
  };

  export type ErrorOrderByRelevanceFieldEnum = (typeof ErrorOrderByRelevanceFieldEnum)[keyof typeof ErrorOrderByRelevanceFieldEnum]


  export const ClickEventOrderByRelevanceFieldEnum: {
    id: 'id',
    selector: 'selector',
    eventId: 'eventId'
  };

  export type ClickEventOrderByRelevanceFieldEnum = (typeof ClickEventOrderByRelevanceFieldEnum)[keyof typeof ClickEventOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type PageEventWhereInput = {
    AND?: PageEventWhereInput | PageEventWhereInput[]
    OR?: PageEventWhereInput[]
    NOT?: PageEventWhereInput | PageEventWhereInput[]
    id?: StringFilter<"PageEvent"> | string
    sessionId?: StringFilter<"PageEvent"> | string
    url?: StringFilter<"PageEvent"> | string
    referrer?: StringNullableFilter<"PageEvent"> | string | null
    userAgent?: StringFilter<"PageEvent"> | string
    ip?: StringNullableFilter<"PageEvent"> | string | null
    country?: StringNullableFilter<"PageEvent"> | string | null
    region?: StringNullableFilter<"PageEvent"> | string | null
    deviceType?: StringNullableFilter<"PageEvent"> | string | null
    timestamp?: DateTimeFilter<"PageEvent"> | Date | string
    performance?: MetricListRelationFilter
    errors?: ErrorListRelationFilter
    clicks?: ClickEventListRelationFilter
  }

  export type PageEventOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    url?: SortOrder
    referrer?: SortOrderInput | SortOrder
    userAgent?: SortOrder
    ip?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    performance?: MetricOrderByRelationAggregateInput
    errors?: ErrorOrderByRelationAggregateInput
    clicks?: ClickEventOrderByRelationAggregateInput
    _relevance?: PageEventOrderByRelevanceInput
  }

  export type PageEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PageEventWhereInput | PageEventWhereInput[]
    OR?: PageEventWhereInput[]
    NOT?: PageEventWhereInput | PageEventWhereInput[]
    sessionId?: StringFilter<"PageEvent"> | string
    url?: StringFilter<"PageEvent"> | string
    referrer?: StringNullableFilter<"PageEvent"> | string | null
    userAgent?: StringFilter<"PageEvent"> | string
    ip?: StringNullableFilter<"PageEvent"> | string | null
    country?: StringNullableFilter<"PageEvent"> | string | null
    region?: StringNullableFilter<"PageEvent"> | string | null
    deviceType?: StringNullableFilter<"PageEvent"> | string | null
    timestamp?: DateTimeFilter<"PageEvent"> | Date | string
    performance?: MetricListRelationFilter
    errors?: ErrorListRelationFilter
    clicks?: ClickEventListRelationFilter
  }, "id">

  export type PageEventOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    url?: SortOrder
    referrer?: SortOrderInput | SortOrder
    userAgent?: SortOrder
    ip?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: PageEventCountOrderByAggregateInput
    _max?: PageEventMaxOrderByAggregateInput
    _min?: PageEventMinOrderByAggregateInput
  }

  export type PageEventScalarWhereWithAggregatesInput = {
    AND?: PageEventScalarWhereWithAggregatesInput | PageEventScalarWhereWithAggregatesInput[]
    OR?: PageEventScalarWhereWithAggregatesInput[]
    NOT?: PageEventScalarWhereWithAggregatesInput | PageEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PageEvent"> | string
    sessionId?: StringWithAggregatesFilter<"PageEvent"> | string
    url?: StringWithAggregatesFilter<"PageEvent"> | string
    referrer?: StringNullableWithAggregatesFilter<"PageEvent"> | string | null
    userAgent?: StringWithAggregatesFilter<"PageEvent"> | string
    ip?: StringNullableWithAggregatesFilter<"PageEvent"> | string | null
    country?: StringNullableWithAggregatesFilter<"PageEvent"> | string | null
    region?: StringNullableWithAggregatesFilter<"PageEvent"> | string | null
    deviceType?: StringNullableWithAggregatesFilter<"PageEvent"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"PageEvent"> | Date | string
  }

  export type MetricWhereInput = {
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    id?: StringFilter<"Metric"> | string
    name?: StringFilter<"Metric"> | string
    value?: FloatFilter<"Metric"> | number
    eventId?: StringFilter<"Metric"> | string
    event?: XOR<PageEventScalarRelationFilter, PageEventWhereInput>
  }

  export type MetricOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    eventId?: SortOrder
    event?: PageEventOrderByWithRelationInput
    _relevance?: MetricOrderByRelevanceInput
  }

  export type MetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    name?: StringFilter<"Metric"> | string
    value?: FloatFilter<"Metric"> | number
    eventId?: StringFilter<"Metric"> | string
    event?: XOR<PageEventScalarRelationFilter, PageEventWhereInput>
  }, "id">

  export type MetricOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    eventId?: SortOrder
    _count?: MetricCountOrderByAggregateInput
    _avg?: MetricAvgOrderByAggregateInput
    _max?: MetricMaxOrderByAggregateInput
    _min?: MetricMinOrderByAggregateInput
    _sum?: MetricSumOrderByAggregateInput
  }

  export type MetricScalarWhereWithAggregatesInput = {
    AND?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    OR?: MetricScalarWhereWithAggregatesInput[]
    NOT?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Metric"> | string
    name?: StringWithAggregatesFilter<"Metric"> | string
    value?: FloatWithAggregatesFilter<"Metric"> | number
    eventId?: StringWithAggregatesFilter<"Metric"> | string
  }

  export type ErrorWhereInput = {
    AND?: ErrorWhereInput | ErrorWhereInput[]
    OR?: ErrorWhereInput[]
    NOT?: ErrorWhereInput | ErrorWhereInput[]
    id?: StringFilter<"Error"> | string
    message?: StringFilter<"Error"> | string
    stack?: StringNullableFilter<"Error"> | string | null
    filename?: StringNullableFilter<"Error"> | string | null
    lineno?: IntNullableFilter<"Error"> | number | null
    colno?: IntNullableFilter<"Error"> | number | null
    eventId?: StringFilter<"Error"> | string
    event?: XOR<PageEventScalarRelationFilter, PageEventWhereInput>
  }

  export type ErrorOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    stack?: SortOrderInput | SortOrder
    filename?: SortOrderInput | SortOrder
    lineno?: SortOrderInput | SortOrder
    colno?: SortOrderInput | SortOrder
    eventId?: SortOrder
    event?: PageEventOrderByWithRelationInput
    _relevance?: ErrorOrderByRelevanceInput
  }

  export type ErrorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ErrorWhereInput | ErrorWhereInput[]
    OR?: ErrorWhereInput[]
    NOT?: ErrorWhereInput | ErrorWhereInput[]
    message?: StringFilter<"Error"> | string
    stack?: StringNullableFilter<"Error"> | string | null
    filename?: StringNullableFilter<"Error"> | string | null
    lineno?: IntNullableFilter<"Error"> | number | null
    colno?: IntNullableFilter<"Error"> | number | null
    eventId?: StringFilter<"Error"> | string
    event?: XOR<PageEventScalarRelationFilter, PageEventWhereInput>
  }, "id">

  export type ErrorOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    stack?: SortOrderInput | SortOrder
    filename?: SortOrderInput | SortOrder
    lineno?: SortOrderInput | SortOrder
    colno?: SortOrderInput | SortOrder
    eventId?: SortOrder
    _count?: ErrorCountOrderByAggregateInput
    _avg?: ErrorAvgOrderByAggregateInput
    _max?: ErrorMaxOrderByAggregateInput
    _min?: ErrorMinOrderByAggregateInput
    _sum?: ErrorSumOrderByAggregateInput
  }

  export type ErrorScalarWhereWithAggregatesInput = {
    AND?: ErrorScalarWhereWithAggregatesInput | ErrorScalarWhereWithAggregatesInput[]
    OR?: ErrorScalarWhereWithAggregatesInput[]
    NOT?: ErrorScalarWhereWithAggregatesInput | ErrorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Error"> | string
    message?: StringWithAggregatesFilter<"Error"> | string
    stack?: StringNullableWithAggregatesFilter<"Error"> | string | null
    filename?: StringNullableWithAggregatesFilter<"Error"> | string | null
    lineno?: IntNullableWithAggregatesFilter<"Error"> | number | null
    colno?: IntNullableWithAggregatesFilter<"Error"> | number | null
    eventId?: StringWithAggregatesFilter<"Error"> | string
  }

  export type ClickEventWhereInput = {
    AND?: ClickEventWhereInput | ClickEventWhereInput[]
    OR?: ClickEventWhereInput[]
    NOT?: ClickEventWhereInput | ClickEventWhereInput[]
    id?: StringFilter<"ClickEvent"> | string
    x?: IntFilter<"ClickEvent"> | number
    y?: IntFilter<"ClickEvent"> | number
    selector?: StringFilter<"ClickEvent"> | string
    eventId?: StringFilter<"ClickEvent"> | string
    event?: XOR<PageEventScalarRelationFilter, PageEventWhereInput>
  }

  export type ClickEventOrderByWithRelationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    selector?: SortOrder
    eventId?: SortOrder
    event?: PageEventOrderByWithRelationInput
    _relevance?: ClickEventOrderByRelevanceInput
  }

  export type ClickEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClickEventWhereInput | ClickEventWhereInput[]
    OR?: ClickEventWhereInput[]
    NOT?: ClickEventWhereInput | ClickEventWhereInput[]
    x?: IntFilter<"ClickEvent"> | number
    y?: IntFilter<"ClickEvent"> | number
    selector?: StringFilter<"ClickEvent"> | string
    eventId?: StringFilter<"ClickEvent"> | string
    event?: XOR<PageEventScalarRelationFilter, PageEventWhereInput>
  }, "id">

  export type ClickEventOrderByWithAggregationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    selector?: SortOrder
    eventId?: SortOrder
    _count?: ClickEventCountOrderByAggregateInput
    _avg?: ClickEventAvgOrderByAggregateInput
    _max?: ClickEventMaxOrderByAggregateInput
    _min?: ClickEventMinOrderByAggregateInput
    _sum?: ClickEventSumOrderByAggregateInput
  }

  export type ClickEventScalarWhereWithAggregatesInput = {
    AND?: ClickEventScalarWhereWithAggregatesInput | ClickEventScalarWhereWithAggregatesInput[]
    OR?: ClickEventScalarWhereWithAggregatesInput[]
    NOT?: ClickEventScalarWhereWithAggregatesInput | ClickEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClickEvent"> | string
    x?: IntWithAggregatesFilter<"ClickEvent"> | number
    y?: IntWithAggregatesFilter<"ClickEvent"> | number
    selector?: StringWithAggregatesFilter<"ClickEvent"> | string
    eventId?: StringWithAggregatesFilter<"ClickEvent"> | string
  }

  export type PageEventCreateInput = {
    id?: string
    sessionId: string
    url: string
    referrer?: string | null
    userAgent: string
    ip?: string | null
    country?: string | null
    region?: string | null
    deviceType?: string | null
    timestamp?: Date | string
    performance?: MetricCreateNestedManyWithoutEventInput
    errors?: ErrorCreateNestedManyWithoutEventInput
    clicks?: ClickEventCreateNestedManyWithoutEventInput
  }

  export type PageEventUncheckedCreateInput = {
    id?: string
    sessionId: string
    url: string
    referrer?: string | null
    userAgent: string
    ip?: string | null
    country?: string | null
    region?: string | null
    deviceType?: string | null
    timestamp?: Date | string
    performance?: MetricUncheckedCreateNestedManyWithoutEventInput
    errors?: ErrorUncheckedCreateNestedManyWithoutEventInput
    clicks?: ClickEventUncheckedCreateNestedManyWithoutEventInput
  }

  export type PageEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: MetricUpdateManyWithoutEventNestedInput
    errors?: ErrorUpdateManyWithoutEventNestedInput
    clicks?: ClickEventUpdateManyWithoutEventNestedInput
  }

  export type PageEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: MetricUncheckedUpdateManyWithoutEventNestedInput
    errors?: ErrorUncheckedUpdateManyWithoutEventNestedInput
    clicks?: ClickEventUncheckedUpdateManyWithoutEventNestedInput
  }

  export type PageEventCreateManyInput = {
    id?: string
    sessionId: string
    url: string
    referrer?: string | null
    userAgent: string
    ip?: string | null
    country?: string | null
    region?: string | null
    deviceType?: string | null
    timestamp?: Date | string
  }

  export type PageEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricCreateInput = {
    id?: string
    name: string
    value: number
    event: PageEventCreateNestedOneWithoutPerformanceInput
  }

  export type MetricUncheckedCreateInput = {
    id?: string
    name: string
    value: number
    eventId: string
  }

  export type MetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    event?: PageEventUpdateOneRequiredWithoutPerformanceNestedInput
  }

  export type MetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type MetricCreateManyInput = {
    id?: string
    name: string
    value: number
    eventId: string
  }

  export type MetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type ErrorCreateInput = {
    id?: string
    message: string
    stack?: string | null
    filename?: string | null
    lineno?: number | null
    colno?: number | null
    event: PageEventCreateNestedOneWithoutErrorsInput
  }

  export type ErrorUncheckedCreateInput = {
    id?: string
    message: string
    stack?: string | null
    filename?: string | null
    lineno?: number | null
    colno?: number | null
    eventId: string
  }

  export type ErrorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    lineno?: NullableIntFieldUpdateOperationsInput | number | null
    colno?: NullableIntFieldUpdateOperationsInput | number | null
    event?: PageEventUpdateOneRequiredWithoutErrorsNestedInput
  }

  export type ErrorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    lineno?: NullableIntFieldUpdateOperationsInput | number | null
    colno?: NullableIntFieldUpdateOperationsInput | number | null
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type ErrorCreateManyInput = {
    id?: string
    message: string
    stack?: string | null
    filename?: string | null
    lineno?: number | null
    colno?: number | null
    eventId: string
  }

  export type ErrorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    lineno?: NullableIntFieldUpdateOperationsInput | number | null
    colno?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ErrorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    lineno?: NullableIntFieldUpdateOperationsInput | number | null
    colno?: NullableIntFieldUpdateOperationsInput | number | null
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type ClickEventCreateInput = {
    id?: string
    x: number
    y: number
    selector: string
    event: PageEventCreateNestedOneWithoutClicksInput
  }

  export type ClickEventUncheckedCreateInput = {
    id?: string
    x: number
    y: number
    selector: string
    eventId: string
  }

  export type ClickEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    selector?: StringFieldUpdateOperationsInput | string
    event?: PageEventUpdateOneRequiredWithoutClicksNestedInput
  }

  export type ClickEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    selector?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type ClickEventCreateManyInput = {
    id?: string
    x: number
    y: number
    selector: string
    eventId: string
  }

  export type ClickEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    selector?: StringFieldUpdateOperationsInput | string
  }

  export type ClickEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    selector?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MetricListRelationFilter = {
    every?: MetricWhereInput
    some?: MetricWhereInput
    none?: MetricWhereInput
  }

  export type ErrorListRelationFilter = {
    every?: ErrorWhereInput
    some?: ErrorWhereInput
    none?: ErrorWhereInput
  }

  export type ClickEventListRelationFilter = {
    every?: ClickEventWhereInput
    some?: ClickEventWhereInput
    none?: ClickEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ErrorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClickEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageEventOrderByRelevanceInput = {
    fields: PageEventOrderByRelevanceFieldEnum | PageEventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PageEventCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    url?: SortOrder
    referrer?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    region?: SortOrder
    deviceType?: SortOrder
    timestamp?: SortOrder
  }

  export type PageEventMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    url?: SortOrder
    referrer?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    region?: SortOrder
    deviceType?: SortOrder
    timestamp?: SortOrder
  }

  export type PageEventMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    url?: SortOrder
    referrer?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    country?: SortOrder
    region?: SortOrder
    deviceType?: SortOrder
    timestamp?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PageEventScalarRelationFilter = {
    is?: PageEventWhereInput
    isNot?: PageEventWhereInput
  }

  export type MetricOrderByRelevanceInput = {
    fields: MetricOrderByRelevanceFieldEnum | MetricOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MetricCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    eventId?: SortOrder
  }

  export type MetricAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type MetricMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    eventId?: SortOrder
  }

  export type MetricMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    eventId?: SortOrder
  }

  export type MetricSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ErrorOrderByRelevanceInput = {
    fields: ErrorOrderByRelevanceFieldEnum | ErrorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ErrorCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    stack?: SortOrder
    filename?: SortOrder
    lineno?: SortOrder
    colno?: SortOrder
    eventId?: SortOrder
  }

  export type ErrorAvgOrderByAggregateInput = {
    lineno?: SortOrder
    colno?: SortOrder
  }

  export type ErrorMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    stack?: SortOrder
    filename?: SortOrder
    lineno?: SortOrder
    colno?: SortOrder
    eventId?: SortOrder
  }

  export type ErrorMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    stack?: SortOrder
    filename?: SortOrder
    lineno?: SortOrder
    colno?: SortOrder
    eventId?: SortOrder
  }

  export type ErrorSumOrderByAggregateInput = {
    lineno?: SortOrder
    colno?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ClickEventOrderByRelevanceInput = {
    fields: ClickEventOrderByRelevanceFieldEnum | ClickEventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClickEventCountOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    selector?: SortOrder
    eventId?: SortOrder
  }

  export type ClickEventAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type ClickEventMaxOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    selector?: SortOrder
    eventId?: SortOrder
  }

  export type ClickEventMinOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    selector?: SortOrder
    eventId?: SortOrder
  }

  export type ClickEventSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MetricCreateNestedManyWithoutEventInput = {
    create?: XOR<MetricCreateWithoutEventInput, MetricUncheckedCreateWithoutEventInput> | MetricCreateWithoutEventInput[] | MetricUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutEventInput | MetricCreateOrConnectWithoutEventInput[]
    createMany?: MetricCreateManyEventInputEnvelope
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
  }

  export type ErrorCreateNestedManyWithoutEventInput = {
    create?: XOR<ErrorCreateWithoutEventInput, ErrorUncheckedCreateWithoutEventInput> | ErrorCreateWithoutEventInput[] | ErrorUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ErrorCreateOrConnectWithoutEventInput | ErrorCreateOrConnectWithoutEventInput[]
    createMany?: ErrorCreateManyEventInputEnvelope
    connect?: ErrorWhereUniqueInput | ErrorWhereUniqueInput[]
  }

  export type ClickEventCreateNestedManyWithoutEventInput = {
    create?: XOR<ClickEventCreateWithoutEventInput, ClickEventUncheckedCreateWithoutEventInput> | ClickEventCreateWithoutEventInput[] | ClickEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ClickEventCreateOrConnectWithoutEventInput | ClickEventCreateOrConnectWithoutEventInput[]
    createMany?: ClickEventCreateManyEventInputEnvelope
    connect?: ClickEventWhereUniqueInput | ClickEventWhereUniqueInput[]
  }

  export type MetricUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<MetricCreateWithoutEventInput, MetricUncheckedCreateWithoutEventInput> | MetricCreateWithoutEventInput[] | MetricUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutEventInput | MetricCreateOrConnectWithoutEventInput[]
    createMany?: MetricCreateManyEventInputEnvelope
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
  }

  export type ErrorUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ErrorCreateWithoutEventInput, ErrorUncheckedCreateWithoutEventInput> | ErrorCreateWithoutEventInput[] | ErrorUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ErrorCreateOrConnectWithoutEventInput | ErrorCreateOrConnectWithoutEventInput[]
    createMany?: ErrorCreateManyEventInputEnvelope
    connect?: ErrorWhereUniqueInput | ErrorWhereUniqueInput[]
  }

  export type ClickEventUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ClickEventCreateWithoutEventInput, ClickEventUncheckedCreateWithoutEventInput> | ClickEventCreateWithoutEventInput[] | ClickEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ClickEventCreateOrConnectWithoutEventInput | ClickEventCreateOrConnectWithoutEventInput[]
    createMany?: ClickEventCreateManyEventInputEnvelope
    connect?: ClickEventWhereUniqueInput | ClickEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MetricUpdateManyWithoutEventNestedInput = {
    create?: XOR<MetricCreateWithoutEventInput, MetricUncheckedCreateWithoutEventInput> | MetricCreateWithoutEventInput[] | MetricUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutEventInput | MetricCreateOrConnectWithoutEventInput[]
    upsert?: MetricUpsertWithWhereUniqueWithoutEventInput | MetricUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MetricCreateManyEventInputEnvelope
    set?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    disconnect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    delete?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    update?: MetricUpdateWithWhereUniqueWithoutEventInput | MetricUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MetricUpdateManyWithWhereWithoutEventInput | MetricUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MetricScalarWhereInput | MetricScalarWhereInput[]
  }

  export type ErrorUpdateManyWithoutEventNestedInput = {
    create?: XOR<ErrorCreateWithoutEventInput, ErrorUncheckedCreateWithoutEventInput> | ErrorCreateWithoutEventInput[] | ErrorUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ErrorCreateOrConnectWithoutEventInput | ErrorCreateOrConnectWithoutEventInput[]
    upsert?: ErrorUpsertWithWhereUniqueWithoutEventInput | ErrorUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ErrorCreateManyEventInputEnvelope
    set?: ErrorWhereUniqueInput | ErrorWhereUniqueInput[]
    disconnect?: ErrorWhereUniqueInput | ErrorWhereUniqueInput[]
    delete?: ErrorWhereUniqueInput | ErrorWhereUniqueInput[]
    connect?: ErrorWhereUniqueInput | ErrorWhereUniqueInput[]
    update?: ErrorUpdateWithWhereUniqueWithoutEventInput | ErrorUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ErrorUpdateManyWithWhereWithoutEventInput | ErrorUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ErrorScalarWhereInput | ErrorScalarWhereInput[]
  }

  export type ClickEventUpdateManyWithoutEventNestedInput = {
    create?: XOR<ClickEventCreateWithoutEventInput, ClickEventUncheckedCreateWithoutEventInput> | ClickEventCreateWithoutEventInput[] | ClickEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ClickEventCreateOrConnectWithoutEventInput | ClickEventCreateOrConnectWithoutEventInput[]
    upsert?: ClickEventUpsertWithWhereUniqueWithoutEventInput | ClickEventUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ClickEventCreateManyEventInputEnvelope
    set?: ClickEventWhereUniqueInput | ClickEventWhereUniqueInput[]
    disconnect?: ClickEventWhereUniqueInput | ClickEventWhereUniqueInput[]
    delete?: ClickEventWhereUniqueInput | ClickEventWhereUniqueInput[]
    connect?: ClickEventWhereUniqueInput | ClickEventWhereUniqueInput[]
    update?: ClickEventUpdateWithWhereUniqueWithoutEventInput | ClickEventUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ClickEventUpdateManyWithWhereWithoutEventInput | ClickEventUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ClickEventScalarWhereInput | ClickEventScalarWhereInput[]
  }

  export type MetricUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<MetricCreateWithoutEventInput, MetricUncheckedCreateWithoutEventInput> | MetricCreateWithoutEventInput[] | MetricUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutEventInput | MetricCreateOrConnectWithoutEventInput[]
    upsert?: MetricUpsertWithWhereUniqueWithoutEventInput | MetricUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MetricCreateManyEventInputEnvelope
    set?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    disconnect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    delete?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    update?: MetricUpdateWithWhereUniqueWithoutEventInput | MetricUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MetricUpdateManyWithWhereWithoutEventInput | MetricUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MetricScalarWhereInput | MetricScalarWhereInput[]
  }

  export type ErrorUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ErrorCreateWithoutEventInput, ErrorUncheckedCreateWithoutEventInput> | ErrorCreateWithoutEventInput[] | ErrorUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ErrorCreateOrConnectWithoutEventInput | ErrorCreateOrConnectWithoutEventInput[]
    upsert?: ErrorUpsertWithWhereUniqueWithoutEventInput | ErrorUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ErrorCreateManyEventInputEnvelope
    set?: ErrorWhereUniqueInput | ErrorWhereUniqueInput[]
    disconnect?: ErrorWhereUniqueInput | ErrorWhereUniqueInput[]
    delete?: ErrorWhereUniqueInput | ErrorWhereUniqueInput[]
    connect?: ErrorWhereUniqueInput | ErrorWhereUniqueInput[]
    update?: ErrorUpdateWithWhereUniqueWithoutEventInput | ErrorUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ErrorUpdateManyWithWhereWithoutEventInput | ErrorUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ErrorScalarWhereInput | ErrorScalarWhereInput[]
  }

  export type ClickEventUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ClickEventCreateWithoutEventInput, ClickEventUncheckedCreateWithoutEventInput> | ClickEventCreateWithoutEventInput[] | ClickEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ClickEventCreateOrConnectWithoutEventInput | ClickEventCreateOrConnectWithoutEventInput[]
    upsert?: ClickEventUpsertWithWhereUniqueWithoutEventInput | ClickEventUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ClickEventCreateManyEventInputEnvelope
    set?: ClickEventWhereUniqueInput | ClickEventWhereUniqueInput[]
    disconnect?: ClickEventWhereUniqueInput | ClickEventWhereUniqueInput[]
    delete?: ClickEventWhereUniqueInput | ClickEventWhereUniqueInput[]
    connect?: ClickEventWhereUniqueInput | ClickEventWhereUniqueInput[]
    update?: ClickEventUpdateWithWhereUniqueWithoutEventInput | ClickEventUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ClickEventUpdateManyWithWhereWithoutEventInput | ClickEventUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ClickEventScalarWhereInput | ClickEventScalarWhereInput[]
  }

  export type PageEventCreateNestedOneWithoutPerformanceInput = {
    create?: XOR<PageEventCreateWithoutPerformanceInput, PageEventUncheckedCreateWithoutPerformanceInput>
    connectOrCreate?: PageEventCreateOrConnectWithoutPerformanceInput
    connect?: PageEventWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PageEventUpdateOneRequiredWithoutPerformanceNestedInput = {
    create?: XOR<PageEventCreateWithoutPerformanceInput, PageEventUncheckedCreateWithoutPerformanceInput>
    connectOrCreate?: PageEventCreateOrConnectWithoutPerformanceInput
    upsert?: PageEventUpsertWithoutPerformanceInput
    connect?: PageEventWhereUniqueInput
    update?: XOR<XOR<PageEventUpdateToOneWithWhereWithoutPerformanceInput, PageEventUpdateWithoutPerformanceInput>, PageEventUncheckedUpdateWithoutPerformanceInput>
  }

  export type PageEventCreateNestedOneWithoutErrorsInput = {
    create?: XOR<PageEventCreateWithoutErrorsInput, PageEventUncheckedCreateWithoutErrorsInput>
    connectOrCreate?: PageEventCreateOrConnectWithoutErrorsInput
    connect?: PageEventWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PageEventUpdateOneRequiredWithoutErrorsNestedInput = {
    create?: XOR<PageEventCreateWithoutErrorsInput, PageEventUncheckedCreateWithoutErrorsInput>
    connectOrCreate?: PageEventCreateOrConnectWithoutErrorsInput
    upsert?: PageEventUpsertWithoutErrorsInput
    connect?: PageEventWhereUniqueInput
    update?: XOR<XOR<PageEventUpdateToOneWithWhereWithoutErrorsInput, PageEventUpdateWithoutErrorsInput>, PageEventUncheckedUpdateWithoutErrorsInput>
  }

  export type PageEventCreateNestedOneWithoutClicksInput = {
    create?: XOR<PageEventCreateWithoutClicksInput, PageEventUncheckedCreateWithoutClicksInput>
    connectOrCreate?: PageEventCreateOrConnectWithoutClicksInput
    connect?: PageEventWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PageEventUpdateOneRequiredWithoutClicksNestedInput = {
    create?: XOR<PageEventCreateWithoutClicksInput, PageEventUncheckedCreateWithoutClicksInput>
    connectOrCreate?: PageEventCreateOrConnectWithoutClicksInput
    upsert?: PageEventUpsertWithoutClicksInput
    connect?: PageEventWhereUniqueInput
    update?: XOR<XOR<PageEventUpdateToOneWithWhereWithoutClicksInput, PageEventUpdateWithoutClicksInput>, PageEventUncheckedUpdateWithoutClicksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MetricCreateWithoutEventInput = {
    id?: string
    name: string
    value: number
  }

  export type MetricUncheckedCreateWithoutEventInput = {
    id?: string
    name: string
    value: number
  }

  export type MetricCreateOrConnectWithoutEventInput = {
    where: MetricWhereUniqueInput
    create: XOR<MetricCreateWithoutEventInput, MetricUncheckedCreateWithoutEventInput>
  }

  export type MetricCreateManyEventInputEnvelope = {
    data: MetricCreateManyEventInput | MetricCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ErrorCreateWithoutEventInput = {
    id?: string
    message: string
    stack?: string | null
    filename?: string | null
    lineno?: number | null
    colno?: number | null
  }

  export type ErrorUncheckedCreateWithoutEventInput = {
    id?: string
    message: string
    stack?: string | null
    filename?: string | null
    lineno?: number | null
    colno?: number | null
  }

  export type ErrorCreateOrConnectWithoutEventInput = {
    where: ErrorWhereUniqueInput
    create: XOR<ErrorCreateWithoutEventInput, ErrorUncheckedCreateWithoutEventInput>
  }

  export type ErrorCreateManyEventInputEnvelope = {
    data: ErrorCreateManyEventInput | ErrorCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ClickEventCreateWithoutEventInput = {
    id?: string
    x: number
    y: number
    selector: string
  }

  export type ClickEventUncheckedCreateWithoutEventInput = {
    id?: string
    x: number
    y: number
    selector: string
  }

  export type ClickEventCreateOrConnectWithoutEventInput = {
    where: ClickEventWhereUniqueInput
    create: XOR<ClickEventCreateWithoutEventInput, ClickEventUncheckedCreateWithoutEventInput>
  }

  export type ClickEventCreateManyEventInputEnvelope = {
    data: ClickEventCreateManyEventInput | ClickEventCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type MetricUpsertWithWhereUniqueWithoutEventInput = {
    where: MetricWhereUniqueInput
    update: XOR<MetricUpdateWithoutEventInput, MetricUncheckedUpdateWithoutEventInput>
    create: XOR<MetricCreateWithoutEventInput, MetricUncheckedCreateWithoutEventInput>
  }

  export type MetricUpdateWithWhereUniqueWithoutEventInput = {
    where: MetricWhereUniqueInput
    data: XOR<MetricUpdateWithoutEventInput, MetricUncheckedUpdateWithoutEventInput>
  }

  export type MetricUpdateManyWithWhereWithoutEventInput = {
    where: MetricScalarWhereInput
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyWithoutEventInput>
  }

  export type MetricScalarWhereInput = {
    AND?: MetricScalarWhereInput | MetricScalarWhereInput[]
    OR?: MetricScalarWhereInput[]
    NOT?: MetricScalarWhereInput | MetricScalarWhereInput[]
    id?: StringFilter<"Metric"> | string
    name?: StringFilter<"Metric"> | string
    value?: FloatFilter<"Metric"> | number
    eventId?: StringFilter<"Metric"> | string
  }

  export type ErrorUpsertWithWhereUniqueWithoutEventInput = {
    where: ErrorWhereUniqueInput
    update: XOR<ErrorUpdateWithoutEventInput, ErrorUncheckedUpdateWithoutEventInput>
    create: XOR<ErrorCreateWithoutEventInput, ErrorUncheckedCreateWithoutEventInput>
  }

  export type ErrorUpdateWithWhereUniqueWithoutEventInput = {
    where: ErrorWhereUniqueInput
    data: XOR<ErrorUpdateWithoutEventInput, ErrorUncheckedUpdateWithoutEventInput>
  }

  export type ErrorUpdateManyWithWhereWithoutEventInput = {
    where: ErrorScalarWhereInput
    data: XOR<ErrorUpdateManyMutationInput, ErrorUncheckedUpdateManyWithoutEventInput>
  }

  export type ErrorScalarWhereInput = {
    AND?: ErrorScalarWhereInput | ErrorScalarWhereInput[]
    OR?: ErrorScalarWhereInput[]
    NOT?: ErrorScalarWhereInput | ErrorScalarWhereInput[]
    id?: StringFilter<"Error"> | string
    message?: StringFilter<"Error"> | string
    stack?: StringNullableFilter<"Error"> | string | null
    filename?: StringNullableFilter<"Error"> | string | null
    lineno?: IntNullableFilter<"Error"> | number | null
    colno?: IntNullableFilter<"Error"> | number | null
    eventId?: StringFilter<"Error"> | string
  }

  export type ClickEventUpsertWithWhereUniqueWithoutEventInput = {
    where: ClickEventWhereUniqueInput
    update: XOR<ClickEventUpdateWithoutEventInput, ClickEventUncheckedUpdateWithoutEventInput>
    create: XOR<ClickEventCreateWithoutEventInput, ClickEventUncheckedCreateWithoutEventInput>
  }

  export type ClickEventUpdateWithWhereUniqueWithoutEventInput = {
    where: ClickEventWhereUniqueInput
    data: XOR<ClickEventUpdateWithoutEventInput, ClickEventUncheckedUpdateWithoutEventInput>
  }

  export type ClickEventUpdateManyWithWhereWithoutEventInput = {
    where: ClickEventScalarWhereInput
    data: XOR<ClickEventUpdateManyMutationInput, ClickEventUncheckedUpdateManyWithoutEventInput>
  }

  export type ClickEventScalarWhereInput = {
    AND?: ClickEventScalarWhereInput | ClickEventScalarWhereInput[]
    OR?: ClickEventScalarWhereInput[]
    NOT?: ClickEventScalarWhereInput | ClickEventScalarWhereInput[]
    id?: StringFilter<"ClickEvent"> | string
    x?: IntFilter<"ClickEvent"> | number
    y?: IntFilter<"ClickEvent"> | number
    selector?: StringFilter<"ClickEvent"> | string
    eventId?: StringFilter<"ClickEvent"> | string
  }

  export type PageEventCreateWithoutPerformanceInput = {
    id?: string
    sessionId: string
    url: string
    referrer?: string | null
    userAgent: string
    ip?: string | null
    country?: string | null
    region?: string | null
    deviceType?: string | null
    timestamp?: Date | string
    errors?: ErrorCreateNestedManyWithoutEventInput
    clicks?: ClickEventCreateNestedManyWithoutEventInput
  }

  export type PageEventUncheckedCreateWithoutPerformanceInput = {
    id?: string
    sessionId: string
    url: string
    referrer?: string | null
    userAgent: string
    ip?: string | null
    country?: string | null
    region?: string | null
    deviceType?: string | null
    timestamp?: Date | string
    errors?: ErrorUncheckedCreateNestedManyWithoutEventInput
    clicks?: ClickEventUncheckedCreateNestedManyWithoutEventInput
  }

  export type PageEventCreateOrConnectWithoutPerformanceInput = {
    where: PageEventWhereUniqueInput
    create: XOR<PageEventCreateWithoutPerformanceInput, PageEventUncheckedCreateWithoutPerformanceInput>
  }

  export type PageEventUpsertWithoutPerformanceInput = {
    update: XOR<PageEventUpdateWithoutPerformanceInput, PageEventUncheckedUpdateWithoutPerformanceInput>
    create: XOR<PageEventCreateWithoutPerformanceInput, PageEventUncheckedCreateWithoutPerformanceInput>
    where?: PageEventWhereInput
  }

  export type PageEventUpdateToOneWithWhereWithoutPerformanceInput = {
    where?: PageEventWhereInput
    data: XOR<PageEventUpdateWithoutPerformanceInput, PageEventUncheckedUpdateWithoutPerformanceInput>
  }

  export type PageEventUpdateWithoutPerformanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    errors?: ErrorUpdateManyWithoutEventNestedInput
    clicks?: ClickEventUpdateManyWithoutEventNestedInput
  }

  export type PageEventUncheckedUpdateWithoutPerformanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    errors?: ErrorUncheckedUpdateManyWithoutEventNestedInput
    clicks?: ClickEventUncheckedUpdateManyWithoutEventNestedInput
  }

  export type PageEventCreateWithoutErrorsInput = {
    id?: string
    sessionId: string
    url: string
    referrer?: string | null
    userAgent: string
    ip?: string | null
    country?: string | null
    region?: string | null
    deviceType?: string | null
    timestamp?: Date | string
    performance?: MetricCreateNestedManyWithoutEventInput
    clicks?: ClickEventCreateNestedManyWithoutEventInput
  }

  export type PageEventUncheckedCreateWithoutErrorsInput = {
    id?: string
    sessionId: string
    url: string
    referrer?: string | null
    userAgent: string
    ip?: string | null
    country?: string | null
    region?: string | null
    deviceType?: string | null
    timestamp?: Date | string
    performance?: MetricUncheckedCreateNestedManyWithoutEventInput
    clicks?: ClickEventUncheckedCreateNestedManyWithoutEventInput
  }

  export type PageEventCreateOrConnectWithoutErrorsInput = {
    where: PageEventWhereUniqueInput
    create: XOR<PageEventCreateWithoutErrorsInput, PageEventUncheckedCreateWithoutErrorsInput>
  }

  export type PageEventUpsertWithoutErrorsInput = {
    update: XOR<PageEventUpdateWithoutErrorsInput, PageEventUncheckedUpdateWithoutErrorsInput>
    create: XOR<PageEventCreateWithoutErrorsInput, PageEventUncheckedCreateWithoutErrorsInput>
    where?: PageEventWhereInput
  }

  export type PageEventUpdateToOneWithWhereWithoutErrorsInput = {
    where?: PageEventWhereInput
    data: XOR<PageEventUpdateWithoutErrorsInput, PageEventUncheckedUpdateWithoutErrorsInput>
  }

  export type PageEventUpdateWithoutErrorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: MetricUpdateManyWithoutEventNestedInput
    clicks?: ClickEventUpdateManyWithoutEventNestedInput
  }

  export type PageEventUncheckedUpdateWithoutErrorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: MetricUncheckedUpdateManyWithoutEventNestedInput
    clicks?: ClickEventUncheckedUpdateManyWithoutEventNestedInput
  }

  export type PageEventCreateWithoutClicksInput = {
    id?: string
    sessionId: string
    url: string
    referrer?: string | null
    userAgent: string
    ip?: string | null
    country?: string | null
    region?: string | null
    deviceType?: string | null
    timestamp?: Date | string
    performance?: MetricCreateNestedManyWithoutEventInput
    errors?: ErrorCreateNestedManyWithoutEventInput
  }

  export type PageEventUncheckedCreateWithoutClicksInput = {
    id?: string
    sessionId: string
    url: string
    referrer?: string | null
    userAgent: string
    ip?: string | null
    country?: string | null
    region?: string | null
    deviceType?: string | null
    timestamp?: Date | string
    performance?: MetricUncheckedCreateNestedManyWithoutEventInput
    errors?: ErrorUncheckedCreateNestedManyWithoutEventInput
  }

  export type PageEventCreateOrConnectWithoutClicksInput = {
    where: PageEventWhereUniqueInput
    create: XOR<PageEventCreateWithoutClicksInput, PageEventUncheckedCreateWithoutClicksInput>
  }

  export type PageEventUpsertWithoutClicksInput = {
    update: XOR<PageEventUpdateWithoutClicksInput, PageEventUncheckedUpdateWithoutClicksInput>
    create: XOR<PageEventCreateWithoutClicksInput, PageEventUncheckedCreateWithoutClicksInput>
    where?: PageEventWhereInput
  }

  export type PageEventUpdateToOneWithWhereWithoutClicksInput = {
    where?: PageEventWhereInput
    data: XOR<PageEventUpdateWithoutClicksInput, PageEventUncheckedUpdateWithoutClicksInput>
  }

  export type PageEventUpdateWithoutClicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: MetricUpdateManyWithoutEventNestedInput
    errors?: ErrorUpdateManyWithoutEventNestedInput
  }

  export type PageEventUncheckedUpdateWithoutClicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    performance?: MetricUncheckedUpdateManyWithoutEventNestedInput
    errors?: ErrorUncheckedUpdateManyWithoutEventNestedInput
  }

  export type MetricCreateManyEventInput = {
    id?: string
    name: string
    value: number
  }

  export type ErrorCreateManyEventInput = {
    id?: string
    message: string
    stack?: string | null
    filename?: string | null
    lineno?: number | null
    colno?: number | null
  }

  export type ClickEventCreateManyEventInput = {
    id?: string
    x: number
    y: number
    selector: string
  }

  export type MetricUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type ErrorUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    lineno?: NullableIntFieldUpdateOperationsInput | number | null
    colno?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ErrorUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    lineno?: NullableIntFieldUpdateOperationsInput | number | null
    colno?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ErrorUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    lineno?: NullableIntFieldUpdateOperationsInput | number | null
    colno?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClickEventUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    selector?: StringFieldUpdateOperationsInput | string
  }

  export type ClickEventUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    selector?: StringFieldUpdateOperationsInput | string
  }

  export type ClickEventUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    selector?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}