
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Bookmark
 * 
 */
export type Bookmark = {
  id: string
  name: string
  url: string
  description: string
  category_id: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Category
 * 
 */
export type Category = {
  id: string
  name: string
  section_id: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Section
 * 
 */
export type Section = {
  id: string
  name: string
  workspace_id: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Workspace
 * 
 */
export type Workspace = {
  id: string
  name: string
  user_id: string
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bookmarks
 * const bookmarks = await prisma.bookmark.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bookmarks
   * const bookmarks = await prisma.bookmark.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.bookmark`: Exposes CRUD operations for the **Bookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmark.findMany()
    * ```
    */
  get bookmark(): Prisma.BookmarkDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<GlobalReject>;

  /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Bookmark: 'Bookmark',
    Category: 'Category',
    Section: 'Section',
    Workspace: 'Workspace'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    Bookmark: number
  }

  export type CategoryCountOutputTypeSelect = {
    Bookmark?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | CategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CategoryCountOutputTypeArgs)
    ? CategoryCountOutputType 
    : S extends { select: any } & (CategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CategoryCountOutputType ? CategoryCountOutputType[P] : never
  } 
      : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type SectionCountOutputType
   */


  export type SectionCountOutputType = {
    Category: number
  }

  export type SectionCountOutputTypeSelect = {
    Category?: boolean
  }

  export type SectionCountOutputTypeGetPayload<S extends boolean | null | undefined | SectionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SectionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (SectionCountOutputTypeArgs)
    ? SectionCountOutputType 
    : S extends { select: any } & (SectionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof SectionCountOutputType ? SectionCountOutputType[P] : never
  } 
      : SectionCountOutputType




  // Custom InputTypes

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect | null
  }



  /**
   * Count Type WorkspaceCountOutputType
   */


  export type WorkspaceCountOutputType = {
    Section: number
  }

  export type WorkspaceCountOutputTypeSelect = {
    Section?: boolean
  }

  export type WorkspaceCountOutputTypeGetPayload<S extends boolean | null | undefined | WorkspaceCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkspaceCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (WorkspaceCountOutputTypeArgs)
    ? WorkspaceCountOutputType 
    : S extends { select: any } & (WorkspaceCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof WorkspaceCountOutputType ? WorkspaceCountOutputType[P] : never
  } 
      : WorkspaceCountOutputType




  // Custom InputTypes

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Bookmark
   */


  export type AggregateBookmark = {
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  export type BookmarkMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    description: string | null
    category_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookmarkMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    description: string | null
    category_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookmarkCountAggregateOutputType = {
    id: number
    name: number
    url: number
    description: number
    category_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookmarkMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    description?: true
    category_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookmarkMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    description?: true
    category_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookmarkCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    description?: true
    category_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookmarkAggregateArgs = {
    /**
     * Filter which Bookmark to aggregate.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: Enumerable<BookmarkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookmarks
    **/
    _count?: true | BookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkMaxAggregateInputType
  }

  export type GetBookmarkAggregateType<T extends BookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmark[P]>
      : GetScalarType<T[P], AggregateBookmark[P]>
  }




  export type BookmarkGroupByArgs = {
    where?: BookmarkWhereInput
    orderBy?: Enumerable<BookmarkOrderByWithAggregationInput>
    by: BookmarkScalarFieldEnum[]
    having?: BookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkCountAggregateInputType | true
    _min?: BookmarkMinAggregateInputType
    _max?: BookmarkMaxAggregateInputType
  }


  export type BookmarkGroupByOutputType = {
    id: string
    name: string
    url: string
    description: string
    category_id: string
    createdAt: Date
    updatedAt: Date
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  type GetBookmarkGroupByPayload<T extends BookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkSelect = {
    id?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    category_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Category?: boolean | CategoryArgs
  }


  export type BookmarkInclude = {
    Category?: boolean | CategoryArgs
  }

  export type BookmarkGetPayload<S extends boolean | null | undefined | BookmarkArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Bookmark :
    S extends undefined ? never :
    S extends { include: any } & (BookmarkArgs | BookmarkFindManyArgs)
    ? Bookmark  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Category' ? CategoryGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BookmarkArgs | BookmarkFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Category' ? CategoryGetPayload<S['select'][P]> :  P extends keyof Bookmark ? Bookmark[P] : never
  } 
      : Bookmark


  type BookmarkCountArgs = 
    Omit<BookmarkFindManyArgs, 'select' | 'include'> & {
      select?: BookmarkCountAggregateInputType | true
    }

  export interface BookmarkDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Bookmark that matches the filter.
     * @param {BookmarkFindUniqueArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookmarkFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BookmarkFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Bookmark'> extends True ? Prisma__BookmarkClient<BookmarkGetPayload<T>> : Prisma__BookmarkClient<BookmarkGetPayload<T> | null, null>

    /**
     * Find one Bookmark that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookmarkFindUniqueOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookmarkFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BookmarkFindUniqueOrThrowArgs>
    ): Prisma__BookmarkClient<BookmarkGetPayload<T>>

    /**
     * Find the first Bookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookmarkFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BookmarkFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Bookmark'> extends True ? Prisma__BookmarkClient<BookmarkGetPayload<T>> : Prisma__BookmarkClient<BookmarkGetPayload<T> | null, null>

    /**
     * Find the first Bookmark that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookmarkFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookmarkFindFirstOrThrowArgs>
    ): Prisma__BookmarkClient<BookmarkGetPayload<T>>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmark.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookmarkFindManyArgs>(
      args?: SelectSubset<T, BookmarkFindManyArgs>
    ): Prisma.PrismaPromise<Array<BookmarkGetPayload<T>>>

    /**
     * Create a Bookmark.
     * @param {BookmarkCreateArgs} args - Arguments to create a Bookmark.
     * @example
     * // Create one Bookmark
     * const Bookmark = await prisma.bookmark.create({
     *   data: {
     *     // ... data to create a Bookmark
     *   }
     * })
     * 
    **/
    create<T extends BookmarkCreateArgs>(
      args: SelectSubset<T, BookmarkCreateArgs>
    ): Prisma__BookmarkClient<BookmarkGetPayload<T>>

    /**
     * Create many Bookmarks.
     *     @param {BookmarkCreateManyArgs} args - Arguments to create many Bookmarks.
     *     @example
     *     // Create many Bookmarks
     *     const bookmark = await prisma.bookmark.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookmarkCreateManyArgs>(
      args?: SelectSubset<T, BookmarkCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bookmark.
     * @param {BookmarkDeleteArgs} args - Arguments to delete one Bookmark.
     * @example
     * // Delete one Bookmark
     * const Bookmark = await prisma.bookmark.delete({
     *   where: {
     *     // ... filter to delete one Bookmark
     *   }
     * })
     * 
    **/
    delete<T extends BookmarkDeleteArgs>(
      args: SelectSubset<T, BookmarkDeleteArgs>
    ): Prisma__BookmarkClient<BookmarkGetPayload<T>>

    /**
     * Update one Bookmark.
     * @param {BookmarkUpdateArgs} args - Arguments to update one Bookmark.
     * @example
     * // Update one Bookmark
     * const bookmark = await prisma.bookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookmarkUpdateArgs>(
      args: SelectSubset<T, BookmarkUpdateArgs>
    ): Prisma__BookmarkClient<BookmarkGetPayload<T>>

    /**
     * Delete zero or more Bookmarks.
     * @param {BookmarkDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookmarkDeleteManyArgs>(
      args?: SelectSubset<T, BookmarkDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookmarkUpdateManyArgs>(
      args: SelectSubset<T, BookmarkUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookmark.
     * @param {BookmarkUpsertArgs} args - Arguments to update or create a Bookmark.
     * @example
     * // Update or create a Bookmark
     * const bookmark = await prisma.bookmark.upsert({
     *   create: {
     *     // ... data to create a Bookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmark we want to update
     *   }
     * })
    **/
    upsert<T extends BookmarkUpsertArgs>(
      args: SelectSubset<T, BookmarkUpsertArgs>
    ): Prisma__BookmarkClient<BookmarkGetPayload<T>>

    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmark.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends BookmarkCountArgs>(
      args?: Subset<T, BookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookmarkAggregateArgs>(args: Subset<T, BookmarkAggregateArgs>): Prisma.PrismaPromise<GetBookmarkAggregateType<T>>

    /**
     * Group by Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkGroupByArgs} args - Group by arguments.
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
      T extends BookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BookmarkClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Category<T extends CategoryArgs= {}>(args?: Subset<T, CategoryArgs>): Prisma__CategoryClient<CategoryGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Bookmark base type for findUnique actions
   */
  export type BookmarkFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findUnique
   */
  export interface BookmarkFindUniqueArgs extends BookmarkFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Bookmark findUniqueOrThrow
   */
  export type BookmarkFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }


  /**
   * Bookmark base type for findFirst actions
   */
  export type BookmarkFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: Enumerable<BookmarkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: Enumerable<BookmarkScalarFieldEnum>
  }

  /**
   * Bookmark findFirst
   */
  export interface BookmarkFindFirstArgs extends BookmarkFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Bookmark findFirstOrThrow
   */
  export type BookmarkFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: Enumerable<BookmarkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: Enumerable<BookmarkScalarFieldEnum>
  }


  /**
   * Bookmark findMany
   */
  export type BookmarkFindManyArgs = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: Enumerable<BookmarkOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    distinct?: Enumerable<BookmarkScalarFieldEnum>
  }


  /**
   * Bookmark create
   */
  export type BookmarkCreateArgs = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude | null
    /**
     * The data needed to create a Bookmark.
     */
    data: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
  }


  /**
   * Bookmark createMany
   */
  export type BookmarkCreateManyArgs = {
    /**
     * The data used to create many Bookmarks.
     */
    data: Enumerable<BookmarkCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Bookmark update
   */
  export type BookmarkUpdateArgs = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude | null
    /**
     * The data needed to update a Bookmark.
     */
    data: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
    /**
     * Choose, which Bookmark to update.
     */
    where: BookmarkWhereUniqueInput
  }


  /**
   * Bookmark updateMany
   */
  export type BookmarkUpdateManyArgs = {
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
  }


  /**
   * Bookmark upsert
   */
  export type BookmarkUpsertArgs = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude | null
    /**
     * The filter to search for the Bookmark to update in case it exists.
     */
    where: BookmarkWhereUniqueInput
    /**
     * In case the Bookmark found by the `where` argument doesn't exist, create a new Bookmark with this data.
     */
    create: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
    /**
     * In case the Bookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
  }


  /**
   * Bookmark delete
   */
  export type BookmarkDeleteArgs = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude | null
    /**
     * Filter which Bookmark to delete.
     */
    where: BookmarkWhereUniqueInput
  }


  /**
   * Bookmark deleteMany
   */
  export type BookmarkDeleteManyArgs = {
    /**
     * Filter which Bookmarks to delete
     */
    where?: BookmarkWhereInput
  }


  /**
   * Bookmark without action
   */
  export type BookmarkArgs = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    section_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    section_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    section_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    section_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    section_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    section_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: CategoryScalarFieldEnum[]
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: string
    name: string
    section_id: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect = {
    id?: boolean
    name?: boolean
    section_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Bookmark?: boolean | Category$BookmarkArgs
    Section?: boolean | SectionArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }


  export type CategoryInclude = {
    Bookmark?: boolean | Category$BookmarkArgs
    Section?: boolean | SectionArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Category :
    S extends undefined ? never :
    S extends { include: any } & (CategoryArgs | CategoryFindManyArgs)
    ? Category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Bookmark' ? Array < BookmarkGetPayload<S['include'][P]>>  :
        P extends 'Section' ? SectionGetPayload<S['include'][P]> :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CategoryArgs | CategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Bookmark' ? Array < BookmarkGetPayload<S['select'][P]>>  :
        P extends 'Section' ? SectionGetPayload<S['select'][P]> :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Category ? Category[P] : never
  } 
      : Category


  type CategoryCountArgs = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<CategoryGetPayload<T>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Bookmark<T extends Category$BookmarkArgs= {}>(args?: Subset<T, Category$BookmarkArgs>): Prisma.PrismaPromise<Array<BookmarkGetPayload<T>>| Null>;

    Section<T extends SectionArgs= {}>(args?: Subset<T, SectionArgs>): Prisma__SectionClient<SectionGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUnique
   */
  export interface CategoryFindUniqueArgs extends CategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category findFirst
   */
  export interface CategoryFindFirstArgs extends CategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    /**
     * The data used to create many Categories.
     */
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.Bookmark
   */
  export type Category$BookmarkArgs = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookmarkInclude | null
    where?: BookmarkWhereInput
    orderBy?: Enumerable<BookmarkOrderByWithRelationInput>
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BookmarkScalarFieldEnum>
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
  }



  /**
   * Model Section
   */


  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    workspace_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    workspace_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    name: number
    workspace_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SectionMinAggregateInputType = {
    id?: true
    name?: true
    workspace_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    name?: true
    workspace_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    name?: true
    workspace_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SectionAggregateArgs = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: Enumerable<SectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs = {
    where?: SectionWhereInput
    orderBy?: Enumerable<SectionOrderByWithAggregationInput>
    by: SectionScalarFieldEnum[]
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }


  export type SectionGroupByOutputType = {
    id: string
    name: string
    workspace_id: string
    createdAt: Date
    updatedAt: Date
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect = {
    id?: boolean
    name?: boolean
    workspace_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Category?: boolean | Section$CategoryArgs
    Workspace?: boolean | WorkspaceArgs
    _count?: boolean | SectionCountOutputTypeArgs
  }


  export type SectionInclude = {
    Category?: boolean | Section$CategoryArgs
    Workspace?: boolean | WorkspaceArgs
    _count?: boolean | SectionCountOutputTypeArgs
  }

  export type SectionGetPayload<S extends boolean | null | undefined | SectionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Section :
    S extends undefined ? never :
    S extends { include: any } & (SectionArgs | SectionFindManyArgs)
    ? Section  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Category' ? Array < CategoryGetPayload<S['include'][P]>>  :
        P extends 'Workspace' ? WorkspaceGetPayload<S['include'][P]> :
        P extends '_count' ? SectionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SectionArgs | SectionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Category' ? Array < CategoryGetPayload<S['select'][P]>>  :
        P extends 'Workspace' ? WorkspaceGetPayload<S['select'][P]> :
        P extends '_count' ? SectionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Section ? Section[P] : never
  } 
      : Section


  type SectionCountArgs = 
    Omit<SectionFindManyArgs, 'select' | 'include'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Section'> extends True ? Prisma__SectionClient<SectionGetPayload<T>> : Prisma__SectionClient<SectionGetPayload<T> | null, null>

    /**
     * Find one Section that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SectionFindUniqueOrThrowArgs>
    ): Prisma__SectionClient<SectionGetPayload<T>>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Section'> extends True ? Prisma__SectionClient<SectionGetPayload<T>> : Prisma__SectionClient<SectionGetPayload<T> | null, null>

    /**
     * Find the first Section that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SectionFindFirstOrThrowArgs>
    ): Prisma__SectionClient<SectionGetPayload<T>>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SectionFindManyArgs>(
      args?: SelectSubset<T, SectionFindManyArgs>
    ): Prisma.PrismaPromise<Array<SectionGetPayload<T>>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
    **/
    create<T extends SectionCreateArgs>(
      args: SelectSubset<T, SectionCreateArgs>
    ): Prisma__SectionClient<SectionGetPayload<T>>

    /**
     * Create many Sections.
     *     @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     *     @example
     *     // Create many Sections
     *     const section = await prisma.section.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SectionCreateManyArgs>(
      args?: SelectSubset<T, SectionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
    **/
    delete<T extends SectionDeleteArgs>(
      args: SelectSubset<T, SectionDeleteArgs>
    ): Prisma__SectionClient<SectionGetPayload<T>>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SectionUpdateArgs>(
      args: SelectSubset<T, SectionUpdateArgs>
    ): Prisma__SectionClient<SectionGetPayload<T>>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SectionDeleteManyArgs>(
      args?: SelectSubset<T, SectionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SectionUpdateManyArgs>(
      args: SelectSubset<T, SectionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
    **/
    upsert<T extends SectionUpsertArgs>(
      args: SelectSubset<T, SectionUpsertArgs>
    ): Prisma__SectionClient<SectionGetPayload<T>>

    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SectionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Category<T extends Section$CategoryArgs= {}>(args?: Subset<T, Section$CategoryArgs>): Prisma.PrismaPromise<Array<CategoryGetPayload<T>>| Null>;

    Workspace<T extends WorkspaceArgs= {}>(args?: Subset<T, WorkspaceArgs>): Prisma__WorkspaceClient<WorkspaceGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Section base type for findUnique actions
   */
  export type SectionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUnique
   */
  export interface SectionFindUniqueArgs extends SectionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }


  /**
   * Section base type for findFirst actions
   */
  export type SectionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: Enumerable<SectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: Enumerable<SectionScalarFieldEnum>
  }

  /**
   * Section findFirst
   */
  export interface SectionFindFirstArgs extends SectionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: Enumerable<SectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: Enumerable<SectionScalarFieldEnum>
  }


  /**
   * Section findMany
   */
  export type SectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: Enumerable<SectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: Enumerable<SectionScalarFieldEnum>
  }


  /**
   * Section create
   */
  export type SectionCreateArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }


  /**
   * Section createMany
   */
  export type SectionCreateManyArgs = {
    /**
     * The data used to create many Sections.
     */
    data: Enumerable<SectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Section update
   */
  export type SectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }


  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
  }


  /**
   * Section upsert
   */
  export type SectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }


  /**
   * Section delete
   */
  export type SectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }


  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
  }


  /**
   * Section.Category
   */
  export type Section$CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Section without action
   */
  export type SectionArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
  }



  /**
   * Model Workspace
   */


  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    user_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs = {
    where?: WorkspaceWhereInput
    orderBy?: Enumerable<WorkspaceOrderByWithAggregationInput>
    by: WorkspaceScalarFieldEnum[]
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }


  export type WorkspaceGroupByOutputType = {
    id: string
    name: string
    user_id: string
    createdAt: Date
    updatedAt: Date
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect = {
    id?: boolean
    name?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Section?: boolean | Workspace$SectionArgs
    _count?: boolean | WorkspaceCountOutputTypeArgs
  }


  export type WorkspaceInclude = {
    Section?: boolean | Workspace$SectionArgs
    _count?: boolean | WorkspaceCountOutputTypeArgs
  }

  export type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Workspace :
    S extends undefined ? never :
    S extends { include: any } & (WorkspaceArgs | WorkspaceFindManyArgs)
    ? Workspace  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Section' ? Array < SectionGetPayload<S['include'][P]>>  :
        P extends '_count' ? WorkspaceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WorkspaceArgs | WorkspaceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Section' ? Array < SectionGetPayload<S['select'][P]>>  :
        P extends '_count' ? WorkspaceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Workspace ? Workspace[P] : never
  } 
      : Workspace


  type WorkspaceCountArgs = 
    Omit<WorkspaceFindManyArgs, 'select' | 'include'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkspaceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkspaceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Workspace'> extends True ? Prisma__WorkspaceClient<WorkspaceGetPayload<T>> : Prisma__WorkspaceClient<WorkspaceGetPayload<T> | null, null>

    /**
     * Find one Workspace that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkspaceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkspaceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Workspace'> extends True ? Prisma__WorkspaceClient<WorkspaceGetPayload<T>> : Prisma__WorkspaceClient<WorkspaceGetPayload<T> | null, null>

    /**
     * Find the first Workspace that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorkspaceFindManyArgs>(
      args?: SelectSubset<T, WorkspaceFindManyArgs>
    ): Prisma.PrismaPromise<Array<WorkspaceGetPayload<T>>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
    **/
    create<T extends WorkspaceCreateArgs>(
      args: SelectSubset<T, WorkspaceCreateArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Create many Workspaces.
     *     @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     *     @example
     *     // Create many Workspaces
     *     const workspace = await prisma.workspace.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkspaceCreateManyArgs>(
      args?: SelectSubset<T, WorkspaceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
    **/
    delete<T extends WorkspaceDeleteArgs>(
      args: SelectSubset<T, WorkspaceDeleteArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkspaceUpdateArgs>(
      args: SelectSubset<T, WorkspaceUpdateArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkspaceDeleteManyArgs>(
      args?: SelectSubset<T, WorkspaceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkspaceUpdateManyArgs>(
      args: SelectSubset<T, WorkspaceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
    **/
    upsert<T extends WorkspaceUpsertArgs>(
      args: SelectSubset<T, WorkspaceUpsertArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkspaceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Section<T extends Workspace$SectionArgs= {}>(args?: Subset<T, Workspace$SectionArgs>): Prisma.PrismaPromise<Array<SectionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Workspace base type for findUnique actions
   */
  export type WorkspaceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUnique
   */
  export interface WorkspaceFindUniqueArgs extends WorkspaceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }


  /**
   * Workspace base type for findFirst actions
   */
  export type WorkspaceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: Enumerable<WorkspaceScalarFieldEnum>
  }

  /**
   * Workspace findFirst
   */
  export interface WorkspaceFindFirstArgs extends WorkspaceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: Enumerable<WorkspaceScalarFieldEnum>
  }


  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    distinct?: Enumerable<WorkspaceScalarFieldEnum>
  }


  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }


  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs = {
    /**
     * The data used to create many Workspaces.
     */
    data: Enumerable<WorkspaceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }


  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
  }


  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }


  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }


  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
  }


  /**
   * Workspace.Section
   */
  export type Workspace$SectionArgs = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SectionInclude | null
    where?: SectionWhereInput
    orderBy?: Enumerable<SectionOrderByWithRelationInput>
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SectionScalarFieldEnum>
  }


  /**
   * Workspace without action
   */
  export type WorkspaceArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BookmarkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    description: 'description',
    category_id: 'category_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    section_id: 'section_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    workspace_id: 'workspace_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type BookmarkWhereInput = {
    AND?: Enumerable<BookmarkWhereInput>
    OR?: Enumerable<BookmarkWhereInput>
    NOT?: Enumerable<BookmarkWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    url?: StringFilter | string
    description?: StringFilter | string
    category_id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type BookmarkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Category?: CategoryOrderByWithRelationInput
  }

  export type BookmarkWhereUniqueInput = {
    id?: string
  }

  export type BookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookmarkCountOrderByAggregateInput
    _max?: BookmarkMaxOrderByAggregateInput
    _min?: BookmarkMinOrderByAggregateInput
  }

  export type BookmarkScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BookmarkScalarWhereWithAggregatesInput>
    OR?: Enumerable<BookmarkScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BookmarkScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    category_id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    section_id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Bookmark?: BookmarkListRelationFilter
    Section?: XOR<SectionRelationFilter, SectionWhereInput>
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Bookmark?: BookmarkOrderByRelationAggregateInput
    Section?: SectionOrderByWithRelationInput
  }

  export type CategoryWhereUniqueInput = {
    id?: string
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    section_id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SectionWhereInput = {
    AND?: Enumerable<SectionWhereInput>
    OR?: Enumerable<SectionWhereInput>
    NOT?: Enumerable<SectionWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    workspace_id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Category?: CategoryListRelationFilter
    Workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    workspace_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Category?: CategoryOrderByRelationAggregateInput
    Workspace?: WorkspaceOrderByWithRelationInput
  }

  export type SectionWhereUniqueInput = {
    id?: string
  }

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    workspace_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SectionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    workspace_id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type WorkspaceWhereInput = {
    AND?: Enumerable<WorkspaceWhereInput>
    OR?: Enumerable<WorkspaceWhereInput>
    NOT?: Enumerable<WorkspaceWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    user_id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Section?: SectionListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Section?: SectionOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = {
    id?: string
  }

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkspaceScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkspaceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkspaceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    user_id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BookmarkCreateInput = {
    id?: string
    name: string
    url: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Category: CategoryCreateNestedOneWithoutBookmarkInput
  }

  export type BookmarkUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    description: string
    category_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutBookmarkNestedInput
  }

  export type BookmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateManyInput = {
    id?: string
    name: string
    url: string
    description: string
    category_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Bookmark?: BookmarkCreateNestedManyWithoutCategoryInput
    Section: SectionCreateNestedOneWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    section_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Bookmark?: BookmarkUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bookmark?: BookmarkUpdateManyWithoutCategoryNestedInput
    Section?: SectionUpdateOneRequiredWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    section_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bookmark?: BookmarkUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    section_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    section_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Category?: CategoryCreateNestedManyWithoutSectionInput
    Workspace: WorkspaceCreateNestedOneWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    name: string
    workspace_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Category?: CategoryUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateManyWithoutSectionNestedInput
    Workspace?: WorkspaceUpdateOneRequiredWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    name: string
    workspace_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    name: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Section?: SectionCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    name: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Section?: SectionUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Section?: SectionUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Section?: SectionUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    name: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type BookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BookmarkListRelationFilter = {
    every?: BookmarkWhereInput
    some?: BookmarkWhereInput
    none?: BookmarkWhereInput
  }

  export type SectionRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type BookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    section_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type WorkspaceRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspace_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspace_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspace_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryCreateNestedOneWithoutBookmarkInput = {
    create?: XOR<CategoryCreateWithoutBookmarkInput, CategoryUncheckedCreateWithoutBookmarkInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBookmarkInput
    connect?: CategoryWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateOneRequiredWithoutBookmarkNestedInput = {
    create?: XOR<CategoryCreateWithoutBookmarkInput, CategoryUncheckedCreateWithoutBookmarkInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBookmarkInput
    upsert?: CategoryUpsertWithoutBookmarkInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutBookmarkInput, CategoryUncheckedUpdateWithoutBookmarkInput>
  }

  export type BookmarkCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<BookmarkCreateWithoutCategoryInput>, Enumerable<BookmarkUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<BookmarkCreateOrConnectWithoutCategoryInput>
    createMany?: BookmarkCreateManyCategoryInputEnvelope
    connect?: Enumerable<BookmarkWhereUniqueInput>
  }

  export type SectionCreateNestedOneWithoutCategoryInput = {
    create?: XOR<SectionCreateWithoutCategoryInput, SectionUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: SectionCreateOrConnectWithoutCategoryInput
    connect?: SectionWhereUniqueInput
  }

  export type BookmarkUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<BookmarkCreateWithoutCategoryInput>, Enumerable<BookmarkUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<BookmarkCreateOrConnectWithoutCategoryInput>
    createMany?: BookmarkCreateManyCategoryInputEnvelope
    connect?: Enumerable<BookmarkWhereUniqueInput>
  }

  export type BookmarkUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<BookmarkCreateWithoutCategoryInput>, Enumerable<BookmarkUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<BookmarkCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<BookmarkUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: BookmarkCreateManyCategoryInputEnvelope
    set?: Enumerable<BookmarkWhereUniqueInput>
    disconnect?: Enumerable<BookmarkWhereUniqueInput>
    delete?: Enumerable<BookmarkWhereUniqueInput>
    connect?: Enumerable<BookmarkWhereUniqueInput>
    update?: Enumerable<BookmarkUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<BookmarkUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<BookmarkScalarWhereInput>
  }

  export type SectionUpdateOneRequiredWithoutCategoryNestedInput = {
    create?: XOR<SectionCreateWithoutCategoryInput, SectionUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: SectionCreateOrConnectWithoutCategoryInput
    upsert?: SectionUpsertWithoutCategoryInput
    connect?: SectionWhereUniqueInput
    update?: XOR<SectionUpdateWithoutCategoryInput, SectionUncheckedUpdateWithoutCategoryInput>
  }

  export type BookmarkUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<BookmarkCreateWithoutCategoryInput>, Enumerable<BookmarkUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<BookmarkCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<BookmarkUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: BookmarkCreateManyCategoryInputEnvelope
    set?: Enumerable<BookmarkWhereUniqueInput>
    disconnect?: Enumerable<BookmarkWhereUniqueInput>
    delete?: Enumerable<BookmarkWhereUniqueInput>
    connect?: Enumerable<BookmarkWhereUniqueInput>
    update?: Enumerable<BookmarkUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<BookmarkUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<BookmarkScalarWhereInput>
  }

  export type CategoryCreateNestedManyWithoutSectionInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutSectionInput>, Enumerable<CategoryUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutSectionInput>
    createMany?: CategoryCreateManySectionInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type WorkspaceCreateNestedOneWithoutSectionInput = {
    create?: XOR<WorkspaceCreateWithoutSectionInput, WorkspaceUncheckedCreateWithoutSectionInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSectionInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type CategoryUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutSectionInput>, Enumerable<CategoryUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutSectionInput>
    createMany?: CategoryCreateManySectionInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type CategoryUpdateManyWithoutSectionNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutSectionInput>, Enumerable<CategoryUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutSectionInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutSectionInput>
    createMany?: CategoryCreateManySectionInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutSectionInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutSectionInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutSectionNestedInput = {
    create?: XOR<WorkspaceCreateWithoutSectionInput, WorkspaceUncheckedCreateWithoutSectionInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSectionInput
    upsert?: WorkspaceUpsertWithoutSectionInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutSectionInput, WorkspaceUncheckedUpdateWithoutSectionInput>
  }

  export type CategoryUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutSectionInput>, Enumerable<CategoryUncheckedCreateWithoutSectionInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutSectionInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutSectionInput>
    createMany?: CategoryCreateManySectionInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutSectionInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutSectionInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type SectionCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<SectionCreateWithoutWorkspaceInput>, Enumerable<SectionUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<SectionCreateOrConnectWithoutWorkspaceInput>
    createMany?: SectionCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<SectionWhereUniqueInput>
  }

  export type SectionUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<SectionCreateWithoutWorkspaceInput>, Enumerable<SectionUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<SectionCreateOrConnectWithoutWorkspaceInput>
    createMany?: SectionCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<SectionWhereUniqueInput>
  }

  export type SectionUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<SectionCreateWithoutWorkspaceInput>, Enumerable<SectionUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<SectionCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<SectionUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: SectionCreateManyWorkspaceInputEnvelope
    set?: Enumerable<SectionWhereUniqueInput>
    disconnect?: Enumerable<SectionWhereUniqueInput>
    delete?: Enumerable<SectionWhereUniqueInput>
    connect?: Enumerable<SectionWhereUniqueInput>
    update?: Enumerable<SectionUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<SectionUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<SectionScalarWhereInput>
  }

  export type SectionUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<SectionCreateWithoutWorkspaceInput>, Enumerable<SectionUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<SectionCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<SectionUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: SectionCreateManyWorkspaceInputEnvelope
    set?: Enumerable<SectionWhereUniqueInput>
    disconnect?: Enumerable<SectionWhereUniqueInput>
    delete?: Enumerable<SectionWhereUniqueInput>
    connect?: Enumerable<SectionWhereUniqueInput>
    update?: Enumerable<SectionUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<SectionUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<SectionScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type CategoryCreateWithoutBookmarkInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Section: SectionCreateNestedOneWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBookmarkInput = {
    id?: string
    name: string
    section_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutBookmarkInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBookmarkInput, CategoryUncheckedCreateWithoutBookmarkInput>
  }

  export type CategoryUpsertWithoutBookmarkInput = {
    update: XOR<CategoryUpdateWithoutBookmarkInput, CategoryUncheckedUpdateWithoutBookmarkInput>
    create: XOR<CategoryCreateWithoutBookmarkInput, CategoryUncheckedCreateWithoutBookmarkInput>
  }

  export type CategoryUpdateWithoutBookmarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Section?: SectionUpdateOneRequiredWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBookmarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    section_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateWithoutCategoryInput = {
    id?: string
    name: string
    url: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    url: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutCategoryInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutCategoryInput, BookmarkUncheckedCreateWithoutCategoryInput>
  }

  export type BookmarkCreateManyCategoryInputEnvelope = {
    data: Enumerable<BookmarkCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type SectionCreateWithoutCategoryInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Workspace: WorkspaceCreateNestedOneWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    workspace_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionCreateOrConnectWithoutCategoryInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutCategoryInput, SectionUncheckedCreateWithoutCategoryInput>
  }

  export type BookmarkUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutCategoryInput, BookmarkUncheckedUpdateWithoutCategoryInput>
    create: XOR<BookmarkCreateWithoutCategoryInput, BookmarkUncheckedCreateWithoutCategoryInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutCategoryInput, BookmarkUncheckedUpdateWithoutCategoryInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutCategoryInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutBookmarkInput>
  }

  export type BookmarkScalarWhereInput = {
    AND?: Enumerable<BookmarkScalarWhereInput>
    OR?: Enumerable<BookmarkScalarWhereInput>
    NOT?: Enumerable<BookmarkScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    url?: StringFilter | string
    description?: StringFilter | string
    category_id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SectionUpsertWithoutCategoryInput = {
    update: XOR<SectionUpdateWithoutCategoryInput, SectionUncheckedUpdateWithoutCategoryInput>
    create: XOR<SectionCreateWithoutCategoryInput, SectionUncheckedCreateWithoutCategoryInput>
  }

  export type SectionUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workspace?: WorkspaceUpdateOneRequiredWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workspace_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateWithoutSectionInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Bookmark?: BookmarkCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSectionInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Bookmark?: BookmarkUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSectionInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSectionInput, CategoryUncheckedCreateWithoutSectionInput>
  }

  export type CategoryCreateManySectionInputEnvelope = {
    data: Enumerable<CategoryCreateManySectionInput>
    skipDuplicates?: boolean
  }

  export type WorkspaceCreateWithoutSectionInput = {
    id?: string
    name: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceUncheckedCreateWithoutSectionInput = {
    id?: string
    name: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceCreateOrConnectWithoutSectionInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutSectionInput, WorkspaceUncheckedCreateWithoutSectionInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutSectionInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutSectionInput, CategoryUncheckedUpdateWithoutSectionInput>
    create: XOR<CategoryCreateWithoutSectionInput, CategoryUncheckedCreateWithoutSectionInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutSectionInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutSectionInput, CategoryUncheckedUpdateWithoutSectionInput>
  }

  export type CategoryUpdateManyWithWhereWithoutSectionInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: Enumerable<CategoryScalarWhereInput>
    OR?: Enumerable<CategoryScalarWhereInput>
    NOT?: Enumerable<CategoryScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    section_id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type WorkspaceUpsertWithoutSectionInput = {
    update: XOR<WorkspaceUpdateWithoutSectionInput, WorkspaceUncheckedUpdateWithoutSectionInput>
    create: XOR<WorkspaceCreateWithoutSectionInput, WorkspaceUncheckedCreateWithoutSectionInput>
  }

  export type WorkspaceUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Category?: CategoryCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Category?: CategoryUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutWorkspaceInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutWorkspaceInput, SectionUncheckedCreateWithoutWorkspaceInput>
  }

  export type SectionCreateManyWorkspaceInputEnvelope = {
    data: Enumerable<SectionCreateManyWorkspaceInput>
    skipDuplicates?: boolean
  }

  export type SectionUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutWorkspaceInput, SectionUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<SectionCreateWithoutWorkspaceInput, SectionUncheckedCreateWithoutWorkspaceInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutWorkspaceInput, SectionUncheckedUpdateWithoutWorkspaceInput>
  }

  export type SectionUpdateManyWithWhereWithoutWorkspaceInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutSectionInput>
  }

  export type SectionScalarWhereInput = {
    AND?: Enumerable<SectionScalarWhereInput>
    OR?: Enumerable<SectionScalarWhereInput>
    NOT?: Enumerable<SectionScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    workspace_id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BookmarkCreateManyCategoryInput = {
    id?: string
    name: string
    url: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutBookmarkInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManySectionInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bookmark?: BookmarkUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bookmark?: BookmarkUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateManyWorkspaceInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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