
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model RestauranteCadastro
 * 
 */
export type RestauranteCadastro = $Result.DefaultSelection<Prisma.$RestauranteCadastroPayload>
/**
 * Model UsuarioPerfil
 * 
 */
export type UsuarioPerfil = $Result.DefaultSelection<Prisma.$UsuarioPerfilPayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model RegistroImpacto
 * 
 */
export type RegistroImpacto = $Result.DefaultSelection<Prisma.$RegistroImpactoPayload>
/**
 * Model ItemListaCompras
 * 
 */
export type ItemListaCompras = $Result.DefaultSelection<Prisma.$ItemListaComprasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more RestauranteCadastros
 * const restauranteCadastros = await prisma.restauranteCadastro.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more RestauranteCadastros
   * const restauranteCadastros = await prisma.restauranteCadastro.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.restauranteCadastro`: Exposes CRUD operations for the **RestauranteCadastro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestauranteCadastros
    * const restauranteCadastros = await prisma.restauranteCadastro.findMany()
    * ```
    */
  get restauranteCadastro(): Prisma.RestauranteCadastroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioPerfil`: Exposes CRUD operations for the **UsuarioPerfil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioPerfils
    * const usuarioPerfils = await prisma.usuarioPerfil.findMany()
    * ```
    */
  get usuarioPerfil(): Prisma.UsuarioPerfilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroImpacto`: Exposes CRUD operations for the **RegistroImpacto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroImpactos
    * const registroImpactos = await prisma.registroImpacto.findMany()
    * ```
    */
  get registroImpacto(): Prisma.RegistroImpactoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemListaCompras`: Exposes CRUD operations for the **ItemListaCompras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemListaCompras
    * const itemListaCompras = await prisma.itemListaCompras.findMany()
    * ```
    */
  get itemListaCompras(): Prisma.ItemListaComprasDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    RestauranteCadastro: 'RestauranteCadastro',
    UsuarioPerfil: 'UsuarioPerfil',
    Produto: 'Produto',
    RegistroImpacto: 'RegistroImpacto',
    ItemListaCompras: 'ItemListaCompras'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "restauranteCadastro" | "usuarioPerfil" | "produto" | "registroImpacto" | "itemListaCompras"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RestauranteCadastro: {
        payload: Prisma.$RestauranteCadastroPayload<ExtArgs>
        fields: Prisma.RestauranteCadastroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestauranteCadastroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestauranteCadastroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestauranteCadastroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestauranteCadastroPayload>
          }
          findFirst: {
            args: Prisma.RestauranteCadastroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestauranteCadastroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestauranteCadastroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestauranteCadastroPayload>
          }
          findMany: {
            args: Prisma.RestauranteCadastroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestauranteCadastroPayload>[]
          }
          create: {
            args: Prisma.RestauranteCadastroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestauranteCadastroPayload>
          }
          createMany: {
            args: Prisma.RestauranteCadastroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestauranteCadastroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestauranteCadastroPayload>[]
          }
          delete: {
            args: Prisma.RestauranteCadastroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestauranteCadastroPayload>
          }
          update: {
            args: Prisma.RestauranteCadastroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestauranteCadastroPayload>
          }
          deleteMany: {
            args: Prisma.RestauranteCadastroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestauranteCadastroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestauranteCadastroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestauranteCadastroPayload>[]
          }
          upsert: {
            args: Prisma.RestauranteCadastroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestauranteCadastroPayload>
          }
          aggregate: {
            args: Prisma.RestauranteCadastroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestauranteCadastro>
          }
          groupBy: {
            args: Prisma.RestauranteCadastroGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestauranteCadastroGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestauranteCadastroCountArgs<ExtArgs>
            result: $Utils.Optional<RestauranteCadastroCountAggregateOutputType> | number
          }
        }
      }
      UsuarioPerfil: {
        payload: Prisma.$UsuarioPerfilPayload<ExtArgs>
        fields: Prisma.UsuarioPerfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioPerfilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPerfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioPerfilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPerfilPayload>
          }
          findFirst: {
            args: Prisma.UsuarioPerfilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPerfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioPerfilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPerfilPayload>
          }
          findMany: {
            args: Prisma.UsuarioPerfilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPerfilPayload>[]
          }
          create: {
            args: Prisma.UsuarioPerfilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPerfilPayload>
          }
          createMany: {
            args: Prisma.UsuarioPerfilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioPerfilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPerfilPayload>[]
          }
          delete: {
            args: Prisma.UsuarioPerfilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPerfilPayload>
          }
          update: {
            args: Prisma.UsuarioPerfilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPerfilPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioPerfilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioPerfilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioPerfilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPerfilPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioPerfilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPerfilPayload>
          }
          aggregate: {
            args: Prisma.UsuarioPerfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioPerfil>
          }
          groupBy: {
            args: Prisma.UsuarioPerfilGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioPerfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioPerfilCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioPerfilCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      RegistroImpacto: {
        payload: Prisma.$RegistroImpactoPayload<ExtArgs>
        fields: Prisma.RegistroImpactoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroImpactoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroImpactoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroImpactoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroImpactoPayload>
          }
          findFirst: {
            args: Prisma.RegistroImpactoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroImpactoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroImpactoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroImpactoPayload>
          }
          findMany: {
            args: Prisma.RegistroImpactoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroImpactoPayload>[]
          }
          create: {
            args: Prisma.RegistroImpactoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroImpactoPayload>
          }
          createMany: {
            args: Prisma.RegistroImpactoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroImpactoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroImpactoPayload>[]
          }
          delete: {
            args: Prisma.RegistroImpactoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroImpactoPayload>
          }
          update: {
            args: Prisma.RegistroImpactoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroImpactoPayload>
          }
          deleteMany: {
            args: Prisma.RegistroImpactoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroImpactoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroImpactoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroImpactoPayload>[]
          }
          upsert: {
            args: Prisma.RegistroImpactoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroImpactoPayload>
          }
          aggregate: {
            args: Prisma.RegistroImpactoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroImpacto>
          }
          groupBy: {
            args: Prisma.RegistroImpactoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroImpactoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroImpactoCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroImpactoCountAggregateOutputType> | number
          }
        }
      }
      ItemListaCompras: {
        payload: Prisma.$ItemListaComprasPayload<ExtArgs>
        fields: Prisma.ItemListaComprasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemListaComprasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemListaComprasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>
          }
          findFirst: {
            args: Prisma.ItemListaComprasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemListaComprasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>
          }
          findMany: {
            args: Prisma.ItemListaComprasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>[]
          }
          create: {
            args: Prisma.ItemListaComprasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>
          }
          createMany: {
            args: Prisma.ItemListaComprasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemListaComprasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>[]
          }
          delete: {
            args: Prisma.ItemListaComprasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>
          }
          update: {
            args: Prisma.ItemListaComprasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>
          }
          deleteMany: {
            args: Prisma.ItemListaComprasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemListaComprasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemListaComprasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>[]
          }
          upsert: {
            args: Prisma.ItemListaComprasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemListaComprasPayload>
          }
          aggregate: {
            args: Prisma.ItemListaComprasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemListaCompras>
          }
          groupBy: {
            args: Prisma.ItemListaComprasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemListaComprasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemListaComprasCountArgs<ExtArgs>
            result: $Utils.Optional<ItemListaComprasCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    restauranteCadastro?: RestauranteCadastroOmit
    usuarioPerfil?: UsuarioPerfilOmit
    produto?: ProdutoOmit
    registroImpacto?: RegistroImpactoOmit
    itemListaCompras?: ItemListaComprasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type RestauranteCadastroCountOutputType
   */

  export type RestauranteCadastroCountOutputType = {
    usuarios: number
    produtos: number
    itensListaCompras: number
    registrosImpacto: number
  }

  export type RestauranteCadastroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RestauranteCadastroCountOutputTypeCountUsuariosArgs
    produtos?: boolean | RestauranteCadastroCountOutputTypeCountProdutosArgs
    itensListaCompras?: boolean | RestauranteCadastroCountOutputTypeCountItensListaComprasArgs
    registrosImpacto?: boolean | RestauranteCadastroCountOutputTypeCountRegistrosImpactoArgs
  }

  // Custom InputTypes
  /**
   * RestauranteCadastroCountOutputType without action
   */
  export type RestauranteCadastroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCadastroCountOutputType
     */
    select?: RestauranteCadastroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestauranteCadastroCountOutputType without action
   */
  export type RestauranteCadastroCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioPerfilWhereInput
  }

  /**
   * RestauranteCadastroCountOutputType without action
   */
  export type RestauranteCadastroCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }

  /**
   * RestauranteCadastroCountOutputType without action
   */
  export type RestauranteCadastroCountOutputTypeCountItensListaComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListaComprasWhereInput
  }

  /**
   * RestauranteCadastroCountOutputType without action
   */
  export type RestauranteCadastroCountOutputTypeCountRegistrosImpactoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroImpactoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    registrosImpacto: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrosImpacto?: boolean | ProdutoCountOutputTypeCountRegistrosImpactoArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountRegistrosImpactoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroImpactoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model RestauranteCadastro
   */

  export type AggregateRestauranteCadastro = {
    _count: RestauranteCadastroCountAggregateOutputType | null
    _avg: RestauranteCadastroAvgAggregateOutputType | null
    _sum: RestauranteCadastroSumAggregateOutputType | null
    _min: RestauranteCadastroMinAggregateOutputType | null
    _max: RestauranteCadastroMaxAggregateOutputType | null
  }

  export type RestauranteCadastroAvgAggregateOutputType = {
    id: number | null
  }

  export type RestauranteCadastroSumAggregateOutputType = {
    id: number | null
  }

  export type RestauranteCadastroMinAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    endereco: string | null
    telefone: string | null
    email: string | null
    cnpj: string | null
    atualizadoEm: Date | null
  }

  export type RestauranteCadastroMaxAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    endereco: string | null
    telefone: string | null
    email: string | null
    cnpj: string | null
    atualizadoEm: Date | null
  }

  export type RestauranteCadastroCountAggregateOutputType = {
    id: number
    name: number
    password: number
    endereco: number
    telefone: number
    email: number
    cnpj: number
    atualizadoEm: number
    _all: number
  }


  export type RestauranteCadastroAvgAggregateInputType = {
    id?: true
  }

  export type RestauranteCadastroSumAggregateInputType = {
    id?: true
  }

  export type RestauranteCadastroMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    endereco?: true
    telefone?: true
    email?: true
    cnpj?: true
    atualizadoEm?: true
  }

  export type RestauranteCadastroMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    endereco?: true
    telefone?: true
    email?: true
    cnpj?: true
    atualizadoEm?: true
  }

  export type RestauranteCadastroCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    endereco?: true
    telefone?: true
    email?: true
    cnpj?: true
    atualizadoEm?: true
    _all?: true
  }

  export type RestauranteCadastroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestauranteCadastro to aggregate.
     */
    where?: RestauranteCadastroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestauranteCadastros to fetch.
     */
    orderBy?: RestauranteCadastroOrderByWithRelationInput | RestauranteCadastroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestauranteCadastroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestauranteCadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestauranteCadastros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestauranteCadastros
    **/
    _count?: true | RestauranteCadastroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestauranteCadastroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestauranteCadastroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestauranteCadastroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestauranteCadastroMaxAggregateInputType
  }

  export type GetRestauranteCadastroAggregateType<T extends RestauranteCadastroAggregateArgs> = {
        [P in keyof T & keyof AggregateRestauranteCadastro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestauranteCadastro[P]>
      : GetScalarType<T[P], AggregateRestauranteCadastro[P]>
  }




  export type RestauranteCadastroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestauranteCadastroWhereInput
    orderBy?: RestauranteCadastroOrderByWithAggregationInput | RestauranteCadastroOrderByWithAggregationInput[]
    by: RestauranteCadastroScalarFieldEnum[] | RestauranteCadastroScalarFieldEnum
    having?: RestauranteCadastroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestauranteCadastroCountAggregateInputType | true
    _avg?: RestauranteCadastroAvgAggregateInputType
    _sum?: RestauranteCadastroSumAggregateInputType
    _min?: RestauranteCadastroMinAggregateInputType
    _max?: RestauranteCadastroMaxAggregateInputType
  }

  export type RestauranteCadastroGroupByOutputType = {
    id: number
    name: string
    password: string
    endereco: string
    telefone: string
    email: string
    cnpj: string
    atualizadoEm: Date
    _count: RestauranteCadastroCountAggregateOutputType | null
    _avg: RestauranteCadastroAvgAggregateOutputType | null
    _sum: RestauranteCadastroSumAggregateOutputType | null
    _min: RestauranteCadastroMinAggregateOutputType | null
    _max: RestauranteCadastroMaxAggregateOutputType | null
  }

  type GetRestauranteCadastroGroupByPayload<T extends RestauranteCadastroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestauranteCadastroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestauranteCadastroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestauranteCadastroGroupByOutputType[P]>
            : GetScalarType<T[P], RestauranteCadastroGroupByOutputType[P]>
        }
      >
    >


  export type RestauranteCadastroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    cnpj?: boolean
    atualizadoEm?: boolean
    usuarios?: boolean | RestauranteCadastro$usuariosArgs<ExtArgs>
    produtos?: boolean | RestauranteCadastro$produtosArgs<ExtArgs>
    itensListaCompras?: boolean | RestauranteCadastro$itensListaComprasArgs<ExtArgs>
    registrosImpacto?: boolean | RestauranteCadastro$registrosImpactoArgs<ExtArgs>
    _count?: boolean | RestauranteCadastroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restauranteCadastro"]>

  export type RestauranteCadastroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    cnpj?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["restauranteCadastro"]>

  export type RestauranteCadastroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    cnpj?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["restauranteCadastro"]>

  export type RestauranteCadastroSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    endereco?: boolean
    telefone?: boolean
    email?: boolean
    cnpj?: boolean
    atualizadoEm?: boolean
  }

  export type RestauranteCadastroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "endereco" | "telefone" | "email" | "cnpj" | "atualizadoEm", ExtArgs["result"]["restauranteCadastro"]>
  export type RestauranteCadastroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RestauranteCadastro$usuariosArgs<ExtArgs>
    produtos?: boolean | RestauranteCadastro$produtosArgs<ExtArgs>
    itensListaCompras?: boolean | RestauranteCadastro$itensListaComprasArgs<ExtArgs>
    registrosImpacto?: boolean | RestauranteCadastro$registrosImpactoArgs<ExtArgs>
    _count?: boolean | RestauranteCadastroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestauranteCadastroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RestauranteCadastroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RestauranteCadastroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestauranteCadastro"
    objects: {
      usuarios: Prisma.$UsuarioPerfilPayload<ExtArgs>[]
      produtos: Prisma.$ProdutoPayload<ExtArgs>[]
      itensListaCompras: Prisma.$ItemListaComprasPayload<ExtArgs>[]
      registrosImpacto: Prisma.$RegistroImpactoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      password: string
      endereco: string
      telefone: string
      email: string
      cnpj: string
      atualizadoEm: Date
    }, ExtArgs["result"]["restauranteCadastro"]>
    composites: {}
  }

  type RestauranteCadastroGetPayload<S extends boolean | null | undefined | RestauranteCadastroDefaultArgs> = $Result.GetResult<Prisma.$RestauranteCadastroPayload, S>

  type RestauranteCadastroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestauranteCadastroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestauranteCadastroCountAggregateInputType | true
    }

  export interface RestauranteCadastroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestauranteCadastro'], meta: { name: 'RestauranteCadastro' } }
    /**
     * Find zero or one RestauranteCadastro that matches the filter.
     * @param {RestauranteCadastroFindUniqueArgs} args - Arguments to find a RestauranteCadastro
     * @example
     * // Get one RestauranteCadastro
     * const restauranteCadastro = await prisma.restauranteCadastro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestauranteCadastroFindUniqueArgs>(args: SelectSubset<T, RestauranteCadastroFindUniqueArgs<ExtArgs>>): Prisma__RestauranteCadastroClient<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestauranteCadastro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestauranteCadastroFindUniqueOrThrowArgs} args - Arguments to find a RestauranteCadastro
     * @example
     * // Get one RestauranteCadastro
     * const restauranteCadastro = await prisma.restauranteCadastro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestauranteCadastroFindUniqueOrThrowArgs>(args: SelectSubset<T, RestauranteCadastroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestauranteCadastroClient<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestauranteCadastro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteCadastroFindFirstArgs} args - Arguments to find a RestauranteCadastro
     * @example
     * // Get one RestauranteCadastro
     * const restauranteCadastro = await prisma.restauranteCadastro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestauranteCadastroFindFirstArgs>(args?: SelectSubset<T, RestauranteCadastroFindFirstArgs<ExtArgs>>): Prisma__RestauranteCadastroClient<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestauranteCadastro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteCadastroFindFirstOrThrowArgs} args - Arguments to find a RestauranteCadastro
     * @example
     * // Get one RestauranteCadastro
     * const restauranteCadastro = await prisma.restauranteCadastro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestauranteCadastroFindFirstOrThrowArgs>(args?: SelectSubset<T, RestauranteCadastroFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestauranteCadastroClient<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestauranteCadastros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteCadastroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestauranteCadastros
     * const restauranteCadastros = await prisma.restauranteCadastro.findMany()
     * 
     * // Get first 10 RestauranteCadastros
     * const restauranteCadastros = await prisma.restauranteCadastro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restauranteCadastroWithIdOnly = await prisma.restauranteCadastro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestauranteCadastroFindManyArgs>(args?: SelectSubset<T, RestauranteCadastroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestauranteCadastro.
     * @param {RestauranteCadastroCreateArgs} args - Arguments to create a RestauranteCadastro.
     * @example
     * // Create one RestauranteCadastro
     * const RestauranteCadastro = await prisma.restauranteCadastro.create({
     *   data: {
     *     // ... data to create a RestauranteCadastro
     *   }
     * })
     * 
     */
    create<T extends RestauranteCadastroCreateArgs>(args: SelectSubset<T, RestauranteCadastroCreateArgs<ExtArgs>>): Prisma__RestauranteCadastroClient<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestauranteCadastros.
     * @param {RestauranteCadastroCreateManyArgs} args - Arguments to create many RestauranteCadastros.
     * @example
     * // Create many RestauranteCadastros
     * const restauranteCadastro = await prisma.restauranteCadastro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestauranteCadastroCreateManyArgs>(args?: SelectSubset<T, RestauranteCadastroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RestauranteCadastros and returns the data saved in the database.
     * @param {RestauranteCadastroCreateManyAndReturnArgs} args - Arguments to create many RestauranteCadastros.
     * @example
     * // Create many RestauranteCadastros
     * const restauranteCadastro = await prisma.restauranteCadastro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RestauranteCadastros and only return the `id`
     * const restauranteCadastroWithIdOnly = await prisma.restauranteCadastro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestauranteCadastroCreateManyAndReturnArgs>(args?: SelectSubset<T, RestauranteCadastroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RestauranteCadastro.
     * @param {RestauranteCadastroDeleteArgs} args - Arguments to delete one RestauranteCadastro.
     * @example
     * // Delete one RestauranteCadastro
     * const RestauranteCadastro = await prisma.restauranteCadastro.delete({
     *   where: {
     *     // ... filter to delete one RestauranteCadastro
     *   }
     * })
     * 
     */
    delete<T extends RestauranteCadastroDeleteArgs>(args: SelectSubset<T, RestauranteCadastroDeleteArgs<ExtArgs>>): Prisma__RestauranteCadastroClient<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestauranteCadastro.
     * @param {RestauranteCadastroUpdateArgs} args - Arguments to update one RestauranteCadastro.
     * @example
     * // Update one RestauranteCadastro
     * const restauranteCadastro = await prisma.restauranteCadastro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestauranteCadastroUpdateArgs>(args: SelectSubset<T, RestauranteCadastroUpdateArgs<ExtArgs>>): Prisma__RestauranteCadastroClient<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestauranteCadastros.
     * @param {RestauranteCadastroDeleteManyArgs} args - Arguments to filter RestauranteCadastros to delete.
     * @example
     * // Delete a few RestauranteCadastros
     * const { count } = await prisma.restauranteCadastro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestauranteCadastroDeleteManyArgs>(args?: SelectSubset<T, RestauranteCadastroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestauranteCadastros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteCadastroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestauranteCadastros
     * const restauranteCadastro = await prisma.restauranteCadastro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestauranteCadastroUpdateManyArgs>(args: SelectSubset<T, RestauranteCadastroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestauranteCadastros and returns the data updated in the database.
     * @param {RestauranteCadastroUpdateManyAndReturnArgs} args - Arguments to update many RestauranteCadastros.
     * @example
     * // Update many RestauranteCadastros
     * const restauranteCadastro = await prisma.restauranteCadastro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RestauranteCadastros and only return the `id`
     * const restauranteCadastroWithIdOnly = await prisma.restauranteCadastro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestauranteCadastroUpdateManyAndReturnArgs>(args: SelectSubset<T, RestauranteCadastroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RestauranteCadastro.
     * @param {RestauranteCadastroUpsertArgs} args - Arguments to update or create a RestauranteCadastro.
     * @example
     * // Update or create a RestauranteCadastro
     * const restauranteCadastro = await prisma.restauranteCadastro.upsert({
     *   create: {
     *     // ... data to create a RestauranteCadastro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestauranteCadastro we want to update
     *   }
     * })
     */
    upsert<T extends RestauranteCadastroUpsertArgs>(args: SelectSubset<T, RestauranteCadastroUpsertArgs<ExtArgs>>): Prisma__RestauranteCadastroClient<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestauranteCadastros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteCadastroCountArgs} args - Arguments to filter RestauranteCadastros to count.
     * @example
     * // Count the number of RestauranteCadastros
     * const count = await prisma.restauranteCadastro.count({
     *   where: {
     *     // ... the filter for the RestauranteCadastros we want to count
     *   }
     * })
    **/
    count<T extends RestauranteCadastroCountArgs>(
      args?: Subset<T, RestauranteCadastroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestauranteCadastroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestauranteCadastro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteCadastroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestauranteCadastroAggregateArgs>(args: Subset<T, RestauranteCadastroAggregateArgs>): Prisma.PrismaPromise<GetRestauranteCadastroAggregateType<T>>

    /**
     * Group by RestauranteCadastro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestauranteCadastroGroupByArgs} args - Group by arguments.
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
      T extends RestauranteCadastroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestauranteCadastroGroupByArgs['orderBy'] }
        : { orderBy?: RestauranteCadastroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestauranteCadastroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestauranteCadastroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestauranteCadastro model
   */
  readonly fields: RestauranteCadastroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestauranteCadastro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestauranteCadastroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends RestauranteCadastro$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteCadastro$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produtos<T extends RestauranteCadastro$produtosArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteCadastro$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itensListaCompras<T extends RestauranteCadastro$itensListaComprasArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteCadastro$itensListaComprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registrosImpacto<T extends RestauranteCadastro$registrosImpactoArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteCadastro$registrosImpactoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroImpactoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RestauranteCadastro model
   */
  interface RestauranteCadastroFieldRefs {
    readonly id: FieldRef<"RestauranteCadastro", 'Int'>
    readonly name: FieldRef<"RestauranteCadastro", 'String'>
    readonly password: FieldRef<"RestauranteCadastro", 'String'>
    readonly endereco: FieldRef<"RestauranteCadastro", 'String'>
    readonly telefone: FieldRef<"RestauranteCadastro", 'String'>
    readonly email: FieldRef<"RestauranteCadastro", 'String'>
    readonly cnpj: FieldRef<"RestauranteCadastro", 'String'>
    readonly atualizadoEm: FieldRef<"RestauranteCadastro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RestauranteCadastro findUnique
   */
  export type RestauranteCadastroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCadastro
     */
    select?: RestauranteCadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestauranteCadastro
     */
    omit?: RestauranteCadastroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteCadastroInclude<ExtArgs> | null
    /**
     * Filter, which RestauranteCadastro to fetch.
     */
    where: RestauranteCadastroWhereUniqueInput
  }

  /**
   * RestauranteCadastro findUniqueOrThrow
   */
  export type RestauranteCadastroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCadastro
     */
    select?: RestauranteCadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestauranteCadastro
     */
    omit?: RestauranteCadastroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteCadastroInclude<ExtArgs> | null
    /**
     * Filter, which RestauranteCadastro to fetch.
     */
    where: RestauranteCadastroWhereUniqueInput
  }

  /**
   * RestauranteCadastro findFirst
   */
  export type RestauranteCadastroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCadastro
     */
    select?: RestauranteCadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestauranteCadastro
     */
    omit?: RestauranteCadastroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteCadastroInclude<ExtArgs> | null
    /**
     * Filter, which RestauranteCadastro to fetch.
     */
    where?: RestauranteCadastroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestauranteCadastros to fetch.
     */
    orderBy?: RestauranteCadastroOrderByWithRelationInput | RestauranteCadastroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestauranteCadastros.
     */
    cursor?: RestauranteCadastroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestauranteCadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestauranteCadastros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestauranteCadastros.
     */
    distinct?: RestauranteCadastroScalarFieldEnum | RestauranteCadastroScalarFieldEnum[]
  }

  /**
   * RestauranteCadastro findFirstOrThrow
   */
  export type RestauranteCadastroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCadastro
     */
    select?: RestauranteCadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestauranteCadastro
     */
    omit?: RestauranteCadastroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteCadastroInclude<ExtArgs> | null
    /**
     * Filter, which RestauranteCadastro to fetch.
     */
    where?: RestauranteCadastroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestauranteCadastros to fetch.
     */
    orderBy?: RestauranteCadastroOrderByWithRelationInput | RestauranteCadastroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestauranteCadastros.
     */
    cursor?: RestauranteCadastroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestauranteCadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestauranteCadastros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestauranteCadastros.
     */
    distinct?: RestauranteCadastroScalarFieldEnum | RestauranteCadastroScalarFieldEnum[]
  }

  /**
   * RestauranteCadastro findMany
   */
  export type RestauranteCadastroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCadastro
     */
    select?: RestauranteCadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestauranteCadastro
     */
    omit?: RestauranteCadastroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteCadastroInclude<ExtArgs> | null
    /**
     * Filter, which RestauranteCadastros to fetch.
     */
    where?: RestauranteCadastroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestauranteCadastros to fetch.
     */
    orderBy?: RestauranteCadastroOrderByWithRelationInput | RestauranteCadastroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestauranteCadastros.
     */
    cursor?: RestauranteCadastroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestauranteCadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestauranteCadastros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestauranteCadastros.
     */
    distinct?: RestauranteCadastroScalarFieldEnum | RestauranteCadastroScalarFieldEnum[]
  }

  /**
   * RestauranteCadastro create
   */
  export type RestauranteCadastroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCadastro
     */
    select?: RestauranteCadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestauranteCadastro
     */
    omit?: RestauranteCadastroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteCadastroInclude<ExtArgs> | null
    /**
     * The data needed to create a RestauranteCadastro.
     */
    data: XOR<RestauranteCadastroCreateInput, RestauranteCadastroUncheckedCreateInput>
  }

  /**
   * RestauranteCadastro createMany
   */
  export type RestauranteCadastroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestauranteCadastros.
     */
    data: RestauranteCadastroCreateManyInput | RestauranteCadastroCreateManyInput[]
  }

  /**
   * RestauranteCadastro createManyAndReturn
   */
  export type RestauranteCadastroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCadastro
     */
    select?: RestauranteCadastroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestauranteCadastro
     */
    omit?: RestauranteCadastroOmit<ExtArgs> | null
    /**
     * The data used to create many RestauranteCadastros.
     */
    data: RestauranteCadastroCreateManyInput | RestauranteCadastroCreateManyInput[]
  }

  /**
   * RestauranteCadastro update
   */
  export type RestauranteCadastroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCadastro
     */
    select?: RestauranteCadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestauranteCadastro
     */
    omit?: RestauranteCadastroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteCadastroInclude<ExtArgs> | null
    /**
     * The data needed to update a RestauranteCadastro.
     */
    data: XOR<RestauranteCadastroUpdateInput, RestauranteCadastroUncheckedUpdateInput>
    /**
     * Choose, which RestauranteCadastro to update.
     */
    where: RestauranteCadastroWhereUniqueInput
  }

  /**
   * RestauranteCadastro updateMany
   */
  export type RestauranteCadastroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestauranteCadastros.
     */
    data: XOR<RestauranteCadastroUpdateManyMutationInput, RestauranteCadastroUncheckedUpdateManyInput>
    /**
     * Filter which RestauranteCadastros to update
     */
    where?: RestauranteCadastroWhereInput
    /**
     * Limit how many RestauranteCadastros to update.
     */
    limit?: number
  }

  /**
   * RestauranteCadastro updateManyAndReturn
   */
  export type RestauranteCadastroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCadastro
     */
    select?: RestauranteCadastroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestauranteCadastro
     */
    omit?: RestauranteCadastroOmit<ExtArgs> | null
    /**
     * The data used to update RestauranteCadastros.
     */
    data: XOR<RestauranteCadastroUpdateManyMutationInput, RestauranteCadastroUncheckedUpdateManyInput>
    /**
     * Filter which RestauranteCadastros to update
     */
    where?: RestauranteCadastroWhereInput
    /**
     * Limit how many RestauranteCadastros to update.
     */
    limit?: number
  }

  /**
   * RestauranteCadastro upsert
   */
  export type RestauranteCadastroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCadastro
     */
    select?: RestauranteCadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestauranteCadastro
     */
    omit?: RestauranteCadastroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteCadastroInclude<ExtArgs> | null
    /**
     * The filter to search for the RestauranteCadastro to update in case it exists.
     */
    where: RestauranteCadastroWhereUniqueInput
    /**
     * In case the RestauranteCadastro found by the `where` argument doesn't exist, create a new RestauranteCadastro with this data.
     */
    create: XOR<RestauranteCadastroCreateInput, RestauranteCadastroUncheckedCreateInput>
    /**
     * In case the RestauranteCadastro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestauranteCadastroUpdateInput, RestauranteCadastroUncheckedUpdateInput>
  }

  /**
   * RestauranteCadastro delete
   */
  export type RestauranteCadastroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCadastro
     */
    select?: RestauranteCadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestauranteCadastro
     */
    omit?: RestauranteCadastroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteCadastroInclude<ExtArgs> | null
    /**
     * Filter which RestauranteCadastro to delete.
     */
    where: RestauranteCadastroWhereUniqueInput
  }

  /**
   * RestauranteCadastro deleteMany
   */
  export type RestauranteCadastroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestauranteCadastros to delete
     */
    where?: RestauranteCadastroWhereInput
    /**
     * Limit how many RestauranteCadastros to delete.
     */
    limit?: number
  }

  /**
   * RestauranteCadastro.usuarios
   */
  export type RestauranteCadastro$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPerfil
     */
    select?: UsuarioPerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPerfil
     */
    omit?: UsuarioPerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPerfilInclude<ExtArgs> | null
    where?: UsuarioPerfilWhereInput
    orderBy?: UsuarioPerfilOrderByWithRelationInput | UsuarioPerfilOrderByWithRelationInput[]
    cursor?: UsuarioPerfilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioPerfilScalarFieldEnum | UsuarioPerfilScalarFieldEnum[]
  }

  /**
   * RestauranteCadastro.produtos
   */
  export type RestauranteCadastro$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * RestauranteCadastro.itensListaCompras
   */
  export type RestauranteCadastro$itensListaComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    where?: ItemListaComprasWhereInput
    orderBy?: ItemListaComprasOrderByWithRelationInput | ItemListaComprasOrderByWithRelationInput[]
    cursor?: ItemListaComprasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemListaComprasScalarFieldEnum | ItemListaComprasScalarFieldEnum[]
  }

  /**
   * RestauranteCadastro.registrosImpacto
   */
  export type RestauranteCadastro$registrosImpactoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoInclude<ExtArgs> | null
    where?: RegistroImpactoWhereInput
    orderBy?: RegistroImpactoOrderByWithRelationInput | RegistroImpactoOrderByWithRelationInput[]
    cursor?: RegistroImpactoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroImpactoScalarFieldEnum | RegistroImpactoScalarFieldEnum[]
  }

  /**
   * RestauranteCadastro without action
   */
  export type RestauranteCadastroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestauranteCadastro
     */
    select?: RestauranteCadastroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestauranteCadastro
     */
    omit?: RestauranteCadastroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestauranteCadastroInclude<ExtArgs> | null
  }


  /**
   * Model UsuarioPerfil
   */

  export type AggregateUsuarioPerfil = {
    _count: UsuarioPerfilCountAggregateOutputType | null
    _avg: UsuarioPerfilAvgAggregateOutputType | null
    _sum: UsuarioPerfilSumAggregateOutputType | null
    _min: UsuarioPerfilMinAggregateOutputType | null
    _max: UsuarioPerfilMaxAggregateOutputType | null
  }

  export type UsuarioPerfilAvgAggregateOutputType = {
    id: number | null
    restauranteId: number | null
  }

  export type UsuarioPerfilSumAggregateOutputType = {
    id: number | null
    restauranteId: number | null
  }

  export type UsuarioPerfilMinAggregateOutputType = {
    id: number | null
    name: string | null
    fotoUrl: string | null
    email: string | null
    password: string | null
    restauranteId: number | null
    atualizadoEm: Date | null
  }

  export type UsuarioPerfilMaxAggregateOutputType = {
    id: number | null
    name: string | null
    fotoUrl: string | null
    email: string | null
    password: string | null
    restauranteId: number | null
    atualizadoEm: Date | null
  }

  export type UsuarioPerfilCountAggregateOutputType = {
    id: number
    name: number
    fotoUrl: number
    email: number
    password: number
    restauranteId: number
    atualizadoEm: number
    _all: number
  }


  export type UsuarioPerfilAvgAggregateInputType = {
    id?: true
    restauranteId?: true
  }

  export type UsuarioPerfilSumAggregateInputType = {
    id?: true
    restauranteId?: true
  }

  export type UsuarioPerfilMinAggregateInputType = {
    id?: true
    name?: true
    fotoUrl?: true
    email?: true
    password?: true
    restauranteId?: true
    atualizadoEm?: true
  }

  export type UsuarioPerfilMaxAggregateInputType = {
    id?: true
    name?: true
    fotoUrl?: true
    email?: true
    password?: true
    restauranteId?: true
    atualizadoEm?: true
  }

  export type UsuarioPerfilCountAggregateInputType = {
    id?: true
    name?: true
    fotoUrl?: true
    email?: true
    password?: true
    restauranteId?: true
    atualizadoEm?: true
    _all?: true
  }

  export type UsuarioPerfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioPerfil to aggregate.
     */
    where?: UsuarioPerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioPerfils to fetch.
     */
    orderBy?: UsuarioPerfilOrderByWithRelationInput | UsuarioPerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioPerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioPerfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioPerfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioPerfils
    **/
    _count?: true | UsuarioPerfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioPerfilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioPerfilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioPerfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioPerfilMaxAggregateInputType
  }

  export type GetUsuarioPerfilAggregateType<T extends UsuarioPerfilAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioPerfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioPerfil[P]>
      : GetScalarType<T[P], AggregateUsuarioPerfil[P]>
  }




  export type UsuarioPerfilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioPerfilWhereInput
    orderBy?: UsuarioPerfilOrderByWithAggregationInput | UsuarioPerfilOrderByWithAggregationInput[]
    by: UsuarioPerfilScalarFieldEnum[] | UsuarioPerfilScalarFieldEnum
    having?: UsuarioPerfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioPerfilCountAggregateInputType | true
    _avg?: UsuarioPerfilAvgAggregateInputType
    _sum?: UsuarioPerfilSumAggregateInputType
    _min?: UsuarioPerfilMinAggregateInputType
    _max?: UsuarioPerfilMaxAggregateInputType
  }

  export type UsuarioPerfilGroupByOutputType = {
    id: number
    name: string
    fotoUrl: string | null
    email: string
    password: string
    restauranteId: number
    atualizadoEm: Date
    _count: UsuarioPerfilCountAggregateOutputType | null
    _avg: UsuarioPerfilAvgAggregateOutputType | null
    _sum: UsuarioPerfilSumAggregateOutputType | null
    _min: UsuarioPerfilMinAggregateOutputType | null
    _max: UsuarioPerfilMaxAggregateOutputType | null
  }

  type GetUsuarioPerfilGroupByPayload<T extends UsuarioPerfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioPerfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioPerfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioPerfilGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioPerfilGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioPerfilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fotoUrl?: boolean
    email?: boolean
    password?: boolean
    restauranteId?: boolean
    atualizadoEm?: boolean
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioPerfil"]>

  export type UsuarioPerfilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fotoUrl?: boolean
    email?: boolean
    password?: boolean
    restauranteId?: boolean
    atualizadoEm?: boolean
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioPerfil"]>

  export type UsuarioPerfilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fotoUrl?: boolean
    email?: boolean
    password?: boolean
    restauranteId?: boolean
    atualizadoEm?: boolean
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioPerfil"]>

  export type UsuarioPerfilSelectScalar = {
    id?: boolean
    name?: boolean
    fotoUrl?: boolean
    email?: boolean
    password?: boolean
    restauranteId?: boolean
    atualizadoEm?: boolean
  }

  export type UsuarioPerfilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "fotoUrl" | "email" | "password" | "restauranteId" | "atualizadoEm", ExtArgs["result"]["usuarioPerfil"]>
  export type UsuarioPerfilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }
  export type UsuarioPerfilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }
  export type UsuarioPerfilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }

  export type $UsuarioPerfilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioPerfil"
    objects: {
      restaurante: Prisma.$RestauranteCadastroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      fotoUrl: string | null
      email: string
      password: string
      restauranteId: number
      atualizadoEm: Date
    }, ExtArgs["result"]["usuarioPerfil"]>
    composites: {}
  }

  type UsuarioPerfilGetPayload<S extends boolean | null | undefined | UsuarioPerfilDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPerfilPayload, S>

  type UsuarioPerfilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioPerfilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioPerfilCountAggregateInputType | true
    }

  export interface UsuarioPerfilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioPerfil'], meta: { name: 'UsuarioPerfil' } }
    /**
     * Find zero or one UsuarioPerfil that matches the filter.
     * @param {UsuarioPerfilFindUniqueArgs} args - Arguments to find a UsuarioPerfil
     * @example
     * // Get one UsuarioPerfil
     * const usuarioPerfil = await prisma.usuarioPerfil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioPerfilFindUniqueArgs>(args: SelectSubset<T, UsuarioPerfilFindUniqueArgs<ExtArgs>>): Prisma__UsuarioPerfilClient<$Result.GetResult<Prisma.$UsuarioPerfilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioPerfil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioPerfilFindUniqueOrThrowArgs} args - Arguments to find a UsuarioPerfil
     * @example
     * // Get one UsuarioPerfil
     * const usuarioPerfil = await prisma.usuarioPerfil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioPerfilFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioPerfilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioPerfilClient<$Result.GetResult<Prisma.$UsuarioPerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioPerfil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPerfilFindFirstArgs} args - Arguments to find a UsuarioPerfil
     * @example
     * // Get one UsuarioPerfil
     * const usuarioPerfil = await prisma.usuarioPerfil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioPerfilFindFirstArgs>(args?: SelectSubset<T, UsuarioPerfilFindFirstArgs<ExtArgs>>): Prisma__UsuarioPerfilClient<$Result.GetResult<Prisma.$UsuarioPerfilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioPerfil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPerfilFindFirstOrThrowArgs} args - Arguments to find a UsuarioPerfil
     * @example
     * // Get one UsuarioPerfil
     * const usuarioPerfil = await prisma.usuarioPerfil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioPerfilFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioPerfilFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioPerfilClient<$Result.GetResult<Prisma.$UsuarioPerfilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioPerfils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPerfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioPerfils
     * const usuarioPerfils = await prisma.usuarioPerfil.findMany()
     * 
     * // Get first 10 UsuarioPerfils
     * const usuarioPerfils = await prisma.usuarioPerfil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioPerfilWithIdOnly = await prisma.usuarioPerfil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioPerfilFindManyArgs>(args?: SelectSubset<T, UsuarioPerfilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioPerfil.
     * @param {UsuarioPerfilCreateArgs} args - Arguments to create a UsuarioPerfil.
     * @example
     * // Create one UsuarioPerfil
     * const UsuarioPerfil = await prisma.usuarioPerfil.create({
     *   data: {
     *     // ... data to create a UsuarioPerfil
     *   }
     * })
     * 
     */
    create<T extends UsuarioPerfilCreateArgs>(args: SelectSubset<T, UsuarioPerfilCreateArgs<ExtArgs>>): Prisma__UsuarioPerfilClient<$Result.GetResult<Prisma.$UsuarioPerfilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioPerfils.
     * @param {UsuarioPerfilCreateManyArgs} args - Arguments to create many UsuarioPerfils.
     * @example
     * // Create many UsuarioPerfils
     * const usuarioPerfil = await prisma.usuarioPerfil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioPerfilCreateManyArgs>(args?: SelectSubset<T, UsuarioPerfilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioPerfils and returns the data saved in the database.
     * @param {UsuarioPerfilCreateManyAndReturnArgs} args - Arguments to create many UsuarioPerfils.
     * @example
     * // Create many UsuarioPerfils
     * const usuarioPerfil = await prisma.usuarioPerfil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioPerfils and only return the `id`
     * const usuarioPerfilWithIdOnly = await prisma.usuarioPerfil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioPerfilCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioPerfilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPerfilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioPerfil.
     * @param {UsuarioPerfilDeleteArgs} args - Arguments to delete one UsuarioPerfil.
     * @example
     * // Delete one UsuarioPerfil
     * const UsuarioPerfil = await prisma.usuarioPerfil.delete({
     *   where: {
     *     // ... filter to delete one UsuarioPerfil
     *   }
     * })
     * 
     */
    delete<T extends UsuarioPerfilDeleteArgs>(args: SelectSubset<T, UsuarioPerfilDeleteArgs<ExtArgs>>): Prisma__UsuarioPerfilClient<$Result.GetResult<Prisma.$UsuarioPerfilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioPerfil.
     * @param {UsuarioPerfilUpdateArgs} args - Arguments to update one UsuarioPerfil.
     * @example
     * // Update one UsuarioPerfil
     * const usuarioPerfil = await prisma.usuarioPerfil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioPerfilUpdateArgs>(args: SelectSubset<T, UsuarioPerfilUpdateArgs<ExtArgs>>): Prisma__UsuarioPerfilClient<$Result.GetResult<Prisma.$UsuarioPerfilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioPerfils.
     * @param {UsuarioPerfilDeleteManyArgs} args - Arguments to filter UsuarioPerfils to delete.
     * @example
     * // Delete a few UsuarioPerfils
     * const { count } = await prisma.usuarioPerfil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioPerfilDeleteManyArgs>(args?: SelectSubset<T, UsuarioPerfilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioPerfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPerfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioPerfils
     * const usuarioPerfil = await prisma.usuarioPerfil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioPerfilUpdateManyArgs>(args: SelectSubset<T, UsuarioPerfilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioPerfils and returns the data updated in the database.
     * @param {UsuarioPerfilUpdateManyAndReturnArgs} args - Arguments to update many UsuarioPerfils.
     * @example
     * // Update many UsuarioPerfils
     * const usuarioPerfil = await prisma.usuarioPerfil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioPerfils and only return the `id`
     * const usuarioPerfilWithIdOnly = await prisma.usuarioPerfil.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioPerfilUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioPerfilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPerfilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioPerfil.
     * @param {UsuarioPerfilUpsertArgs} args - Arguments to update or create a UsuarioPerfil.
     * @example
     * // Update or create a UsuarioPerfil
     * const usuarioPerfil = await prisma.usuarioPerfil.upsert({
     *   create: {
     *     // ... data to create a UsuarioPerfil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioPerfil we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioPerfilUpsertArgs>(args: SelectSubset<T, UsuarioPerfilUpsertArgs<ExtArgs>>): Prisma__UsuarioPerfilClient<$Result.GetResult<Prisma.$UsuarioPerfilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioPerfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPerfilCountArgs} args - Arguments to filter UsuarioPerfils to count.
     * @example
     * // Count the number of UsuarioPerfils
     * const count = await prisma.usuarioPerfil.count({
     *   where: {
     *     // ... the filter for the UsuarioPerfils we want to count
     *   }
     * })
    **/
    count<T extends UsuarioPerfilCountArgs>(
      args?: Subset<T, UsuarioPerfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioPerfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioPerfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPerfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioPerfilAggregateArgs>(args: Subset<T, UsuarioPerfilAggregateArgs>): Prisma.PrismaPromise<GetUsuarioPerfilAggregateType<T>>

    /**
     * Group by UsuarioPerfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioPerfilGroupByArgs} args - Group by arguments.
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
      T extends UsuarioPerfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioPerfilGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioPerfilGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioPerfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioPerfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioPerfil model
   */
  readonly fields: UsuarioPerfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioPerfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioPerfilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurante<T extends RestauranteCadastroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteCadastroDefaultArgs<ExtArgs>>): Prisma__RestauranteCadastroClient<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UsuarioPerfil model
   */
  interface UsuarioPerfilFieldRefs {
    readonly id: FieldRef<"UsuarioPerfil", 'Int'>
    readonly name: FieldRef<"UsuarioPerfil", 'String'>
    readonly fotoUrl: FieldRef<"UsuarioPerfil", 'String'>
    readonly email: FieldRef<"UsuarioPerfil", 'String'>
    readonly password: FieldRef<"UsuarioPerfil", 'String'>
    readonly restauranteId: FieldRef<"UsuarioPerfil", 'Int'>
    readonly atualizadoEm: FieldRef<"UsuarioPerfil", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioPerfil findUnique
   */
  export type UsuarioPerfilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPerfil
     */
    select?: UsuarioPerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPerfil
     */
    omit?: UsuarioPerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPerfilInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioPerfil to fetch.
     */
    where: UsuarioPerfilWhereUniqueInput
  }

  /**
   * UsuarioPerfil findUniqueOrThrow
   */
  export type UsuarioPerfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPerfil
     */
    select?: UsuarioPerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPerfil
     */
    omit?: UsuarioPerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPerfilInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioPerfil to fetch.
     */
    where: UsuarioPerfilWhereUniqueInput
  }

  /**
   * UsuarioPerfil findFirst
   */
  export type UsuarioPerfilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPerfil
     */
    select?: UsuarioPerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPerfil
     */
    omit?: UsuarioPerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPerfilInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioPerfil to fetch.
     */
    where?: UsuarioPerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioPerfils to fetch.
     */
    orderBy?: UsuarioPerfilOrderByWithRelationInput | UsuarioPerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioPerfils.
     */
    cursor?: UsuarioPerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioPerfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioPerfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioPerfils.
     */
    distinct?: UsuarioPerfilScalarFieldEnum | UsuarioPerfilScalarFieldEnum[]
  }

  /**
   * UsuarioPerfil findFirstOrThrow
   */
  export type UsuarioPerfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPerfil
     */
    select?: UsuarioPerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPerfil
     */
    omit?: UsuarioPerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPerfilInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioPerfil to fetch.
     */
    where?: UsuarioPerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioPerfils to fetch.
     */
    orderBy?: UsuarioPerfilOrderByWithRelationInput | UsuarioPerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioPerfils.
     */
    cursor?: UsuarioPerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioPerfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioPerfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioPerfils.
     */
    distinct?: UsuarioPerfilScalarFieldEnum | UsuarioPerfilScalarFieldEnum[]
  }

  /**
   * UsuarioPerfil findMany
   */
  export type UsuarioPerfilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPerfil
     */
    select?: UsuarioPerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPerfil
     */
    omit?: UsuarioPerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPerfilInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioPerfils to fetch.
     */
    where?: UsuarioPerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioPerfils to fetch.
     */
    orderBy?: UsuarioPerfilOrderByWithRelationInput | UsuarioPerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioPerfils.
     */
    cursor?: UsuarioPerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioPerfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioPerfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioPerfils.
     */
    distinct?: UsuarioPerfilScalarFieldEnum | UsuarioPerfilScalarFieldEnum[]
  }

  /**
   * UsuarioPerfil create
   */
  export type UsuarioPerfilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPerfil
     */
    select?: UsuarioPerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPerfil
     */
    omit?: UsuarioPerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPerfilInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuarioPerfil.
     */
    data: XOR<UsuarioPerfilCreateInput, UsuarioPerfilUncheckedCreateInput>
  }

  /**
   * UsuarioPerfil createMany
   */
  export type UsuarioPerfilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioPerfils.
     */
    data: UsuarioPerfilCreateManyInput | UsuarioPerfilCreateManyInput[]
  }

  /**
   * UsuarioPerfil createManyAndReturn
   */
  export type UsuarioPerfilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPerfil
     */
    select?: UsuarioPerfilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPerfil
     */
    omit?: UsuarioPerfilOmit<ExtArgs> | null
    /**
     * The data used to create many UsuarioPerfils.
     */
    data: UsuarioPerfilCreateManyInput | UsuarioPerfilCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPerfilIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioPerfil update
   */
  export type UsuarioPerfilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPerfil
     */
    select?: UsuarioPerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPerfil
     */
    omit?: UsuarioPerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPerfilInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuarioPerfil.
     */
    data: XOR<UsuarioPerfilUpdateInput, UsuarioPerfilUncheckedUpdateInput>
    /**
     * Choose, which UsuarioPerfil to update.
     */
    where: UsuarioPerfilWhereUniqueInput
  }

  /**
   * UsuarioPerfil updateMany
   */
  export type UsuarioPerfilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioPerfils.
     */
    data: XOR<UsuarioPerfilUpdateManyMutationInput, UsuarioPerfilUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioPerfils to update
     */
    where?: UsuarioPerfilWhereInput
    /**
     * Limit how many UsuarioPerfils to update.
     */
    limit?: number
  }

  /**
   * UsuarioPerfil updateManyAndReturn
   */
  export type UsuarioPerfilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPerfil
     */
    select?: UsuarioPerfilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPerfil
     */
    omit?: UsuarioPerfilOmit<ExtArgs> | null
    /**
     * The data used to update UsuarioPerfils.
     */
    data: XOR<UsuarioPerfilUpdateManyMutationInput, UsuarioPerfilUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioPerfils to update
     */
    where?: UsuarioPerfilWhereInput
    /**
     * Limit how many UsuarioPerfils to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPerfilIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioPerfil upsert
   */
  export type UsuarioPerfilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPerfil
     */
    select?: UsuarioPerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPerfil
     */
    omit?: UsuarioPerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPerfilInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuarioPerfil to update in case it exists.
     */
    where: UsuarioPerfilWhereUniqueInput
    /**
     * In case the UsuarioPerfil found by the `where` argument doesn't exist, create a new UsuarioPerfil with this data.
     */
    create: XOR<UsuarioPerfilCreateInput, UsuarioPerfilUncheckedCreateInput>
    /**
     * In case the UsuarioPerfil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioPerfilUpdateInput, UsuarioPerfilUncheckedUpdateInput>
  }

  /**
   * UsuarioPerfil delete
   */
  export type UsuarioPerfilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPerfil
     */
    select?: UsuarioPerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPerfil
     */
    omit?: UsuarioPerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPerfilInclude<ExtArgs> | null
    /**
     * Filter which UsuarioPerfil to delete.
     */
    where: UsuarioPerfilWhereUniqueInput
  }

  /**
   * UsuarioPerfil deleteMany
   */
  export type UsuarioPerfilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioPerfils to delete
     */
    where?: UsuarioPerfilWhereInput
    /**
     * Limit how many UsuarioPerfils to delete.
     */
    limit?: number
  }

  /**
   * UsuarioPerfil without action
   */
  export type UsuarioPerfilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioPerfil
     */
    select?: UsuarioPerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioPerfil
     */
    omit?: UsuarioPerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioPerfilInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    restauranteId: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    restauranteId: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    codigoBarras: string | null
    localArmazenamento: string | null
    categoria: string | null
    quantidade: number | null
    unidade: string | null
    dataValidade: Date | null
    status: string | null
    restauranteId: number | null
    deuEntradaEm: Date | null
    atualizadoEm: Date | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    codigoBarras: string | null
    localArmazenamento: string | null
    categoria: string | null
    quantidade: number | null
    unidade: string | null
    dataValidade: Date | null
    status: string | null
    restauranteId: number | null
    deuEntradaEm: Date | null
    atualizadoEm: Date | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    codigoBarras: number
    localArmazenamento: number
    categoria: number
    quantidade: number
    unidade: number
    dataValidade: number
    status: number
    restauranteId: number
    deuEntradaEm: number
    atualizadoEm: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    quantidade?: true
    restauranteId?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    quantidade?: true
    restauranteId?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    codigoBarras?: true
    localArmazenamento?: true
    categoria?: true
    quantidade?: true
    unidade?: true
    dataValidade?: true
    status?: true
    restauranteId?: true
    deuEntradaEm?: true
    atualizadoEm?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    codigoBarras?: true
    localArmazenamento?: true
    categoria?: true
    quantidade?: true
    unidade?: true
    dataValidade?: true
    status?: true
    restauranteId?: true
    deuEntradaEm?: true
    atualizadoEm?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    codigoBarras?: true
    localArmazenamento?: true
    categoria?: true
    quantidade?: true
    unidade?: true
    dataValidade?: true
    status?: true
    restauranteId?: true
    deuEntradaEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    nome: string
    codigoBarras: string | null
    localArmazenamento: string
    categoria: string
    quantidade: number
    unidade: string
    dataValidade: Date
    status: string
    restauranteId: number
    deuEntradaEm: Date
    atualizadoEm: Date
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigoBarras?: boolean
    localArmazenamento?: boolean
    categoria?: boolean
    quantidade?: boolean
    unidade?: boolean
    dataValidade?: boolean
    status?: boolean
    restauranteId?: boolean
    deuEntradaEm?: boolean
    atualizadoEm?: boolean
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
    registrosImpacto?: boolean | Produto$registrosImpactoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigoBarras?: boolean
    localArmazenamento?: boolean
    categoria?: boolean
    quantidade?: boolean
    unidade?: boolean
    dataValidade?: boolean
    status?: boolean
    restauranteId?: boolean
    deuEntradaEm?: boolean
    atualizadoEm?: boolean
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigoBarras?: boolean
    localArmazenamento?: boolean
    categoria?: boolean
    quantidade?: boolean
    unidade?: boolean
    dataValidade?: boolean
    status?: boolean
    restauranteId?: boolean
    deuEntradaEm?: boolean
    atualizadoEm?: boolean
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    codigoBarras?: boolean
    localArmazenamento?: boolean
    categoria?: boolean
    quantidade?: boolean
    unidade?: boolean
    dataValidade?: boolean
    status?: boolean
    restauranteId?: boolean
    deuEntradaEm?: boolean
    atualizadoEm?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "codigoBarras" | "localArmazenamento" | "categoria" | "quantidade" | "unidade" | "dataValidade" | "status" | "restauranteId" | "deuEntradaEm" | "atualizadoEm", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
    registrosImpacto?: boolean | Produto$registrosImpactoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      restaurante: Prisma.$RestauranteCadastroPayload<ExtArgs>
      registrosImpacto: Prisma.$RegistroImpactoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      codigoBarras: string | null
      localArmazenamento: string
      categoria: string
      quantidade: number
      unidade: string
      dataValidade: Date
      status: string
      restauranteId: number
      deuEntradaEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurante<T extends RestauranteCadastroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteCadastroDefaultArgs<ExtArgs>>): Prisma__RestauranteCadastroClient<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registrosImpacto<T extends Produto$registrosImpactoArgs<ExtArgs> = {}>(args?: Subset<T, Produto$registrosImpactoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroImpactoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly codigoBarras: FieldRef<"Produto", 'String'>
    readonly localArmazenamento: FieldRef<"Produto", 'String'>
    readonly categoria: FieldRef<"Produto", 'String'>
    readonly quantidade: FieldRef<"Produto", 'Float'>
    readonly unidade: FieldRef<"Produto", 'String'>
    readonly dataValidade: FieldRef<"Produto", 'DateTime'>
    readonly status: FieldRef<"Produto", 'String'>
    readonly restauranteId: FieldRef<"Produto", 'Int'>
    readonly deuEntradaEm: FieldRef<"Produto", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Produto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.registrosImpacto
   */
  export type Produto$registrosImpactoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoInclude<ExtArgs> | null
    where?: RegistroImpactoWhereInput
    orderBy?: RegistroImpactoOrderByWithRelationInput | RegistroImpactoOrderByWithRelationInput[]
    cursor?: RegistroImpactoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroImpactoScalarFieldEnum | RegistroImpactoScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model RegistroImpacto
   */

  export type AggregateRegistroImpacto = {
    _count: RegistroImpactoCountAggregateOutputType | null
    _avg: RegistroImpactoAvgAggregateOutputType | null
    _sum: RegistroImpactoSumAggregateOutputType | null
    _min: RegistroImpactoMinAggregateOutputType | null
    _max: RegistroImpactoMaxAggregateOutputType | null
  }

  export type RegistroImpactoAvgAggregateOutputType = {
    id: number | null
    produtoId: number | null
    restauranteId: number | null
    quantidadeKg: number | null
  }

  export type RegistroImpactoSumAggregateOutputType = {
    id: number | null
    produtoId: number | null
    restauranteId: number | null
    quantidadeKg: number | null
  }

  export type RegistroImpactoMinAggregateOutputType = {
    id: number | null
    produtoId: number | null
    restauranteId: number | null
    quantidadeKg: number | null
    foiAproveitado: boolean | null
    criadoEm: Date | null
  }

  export type RegistroImpactoMaxAggregateOutputType = {
    id: number | null
    produtoId: number | null
    restauranteId: number | null
    quantidadeKg: number | null
    foiAproveitado: boolean | null
    criadoEm: Date | null
  }

  export type RegistroImpactoCountAggregateOutputType = {
    id: number
    produtoId: number
    restauranteId: number
    quantidadeKg: number
    foiAproveitado: number
    criadoEm: number
    _all: number
  }


  export type RegistroImpactoAvgAggregateInputType = {
    id?: true
    produtoId?: true
    restauranteId?: true
    quantidadeKg?: true
  }

  export type RegistroImpactoSumAggregateInputType = {
    id?: true
    produtoId?: true
    restauranteId?: true
    quantidadeKg?: true
  }

  export type RegistroImpactoMinAggregateInputType = {
    id?: true
    produtoId?: true
    restauranteId?: true
    quantidadeKg?: true
    foiAproveitado?: true
    criadoEm?: true
  }

  export type RegistroImpactoMaxAggregateInputType = {
    id?: true
    produtoId?: true
    restauranteId?: true
    quantidadeKg?: true
    foiAproveitado?: true
    criadoEm?: true
  }

  export type RegistroImpactoCountAggregateInputType = {
    id?: true
    produtoId?: true
    restauranteId?: true
    quantidadeKg?: true
    foiAproveitado?: true
    criadoEm?: true
    _all?: true
  }

  export type RegistroImpactoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroImpacto to aggregate.
     */
    where?: RegistroImpactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroImpactos to fetch.
     */
    orderBy?: RegistroImpactoOrderByWithRelationInput | RegistroImpactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroImpactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroImpactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroImpactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroImpactos
    **/
    _count?: true | RegistroImpactoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroImpactoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroImpactoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroImpactoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroImpactoMaxAggregateInputType
  }

  export type GetRegistroImpactoAggregateType<T extends RegistroImpactoAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroImpacto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroImpacto[P]>
      : GetScalarType<T[P], AggregateRegistroImpacto[P]>
  }




  export type RegistroImpactoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroImpactoWhereInput
    orderBy?: RegistroImpactoOrderByWithAggregationInput | RegistroImpactoOrderByWithAggregationInput[]
    by: RegistroImpactoScalarFieldEnum[] | RegistroImpactoScalarFieldEnum
    having?: RegistroImpactoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroImpactoCountAggregateInputType | true
    _avg?: RegistroImpactoAvgAggregateInputType
    _sum?: RegistroImpactoSumAggregateInputType
    _min?: RegistroImpactoMinAggregateInputType
    _max?: RegistroImpactoMaxAggregateInputType
  }

  export type RegistroImpactoGroupByOutputType = {
    id: number
    produtoId: number
    restauranteId: number
    quantidadeKg: number
    foiAproveitado: boolean
    criadoEm: Date
    _count: RegistroImpactoCountAggregateOutputType | null
    _avg: RegistroImpactoAvgAggregateOutputType | null
    _sum: RegistroImpactoSumAggregateOutputType | null
    _min: RegistroImpactoMinAggregateOutputType | null
    _max: RegistroImpactoMaxAggregateOutputType | null
  }

  type GetRegistroImpactoGroupByPayload<T extends RegistroImpactoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroImpactoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroImpactoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroImpactoGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroImpactoGroupByOutputType[P]>
        }
      >
    >


  export type RegistroImpactoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtoId?: boolean
    restauranteId?: boolean
    quantidadeKg?: boolean
    foiAproveitado?: boolean
    criadoEm?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroImpacto"]>

  export type RegistroImpactoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtoId?: boolean
    restauranteId?: boolean
    quantidadeKg?: boolean
    foiAproveitado?: boolean
    criadoEm?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroImpacto"]>

  export type RegistroImpactoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produtoId?: boolean
    restauranteId?: boolean
    quantidadeKg?: boolean
    foiAproveitado?: boolean
    criadoEm?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registroImpacto"]>

  export type RegistroImpactoSelectScalar = {
    id?: boolean
    produtoId?: boolean
    restauranteId?: boolean
    quantidadeKg?: boolean
    foiAproveitado?: boolean
    criadoEm?: boolean
  }

  export type RegistroImpactoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produtoId" | "restauranteId" | "quantidadeKg" | "foiAproveitado" | "criadoEm", ExtArgs["result"]["registroImpacto"]>
  export type RegistroImpactoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }
  export type RegistroImpactoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }
  export type RegistroImpactoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }

  export type $RegistroImpactoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroImpacto"
    objects: {
      produto: Prisma.$ProdutoPayload<ExtArgs>
      restaurante: Prisma.$RestauranteCadastroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produtoId: number
      restauranteId: number
      quantidadeKg: number
      foiAproveitado: boolean
      criadoEm: Date
    }, ExtArgs["result"]["registroImpacto"]>
    composites: {}
  }

  type RegistroImpactoGetPayload<S extends boolean | null | undefined | RegistroImpactoDefaultArgs> = $Result.GetResult<Prisma.$RegistroImpactoPayload, S>

  type RegistroImpactoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroImpactoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroImpactoCountAggregateInputType | true
    }

  export interface RegistroImpactoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroImpacto'], meta: { name: 'RegistroImpacto' } }
    /**
     * Find zero or one RegistroImpacto that matches the filter.
     * @param {RegistroImpactoFindUniqueArgs} args - Arguments to find a RegistroImpacto
     * @example
     * // Get one RegistroImpacto
     * const registroImpacto = await prisma.registroImpacto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroImpactoFindUniqueArgs>(args: SelectSubset<T, RegistroImpactoFindUniqueArgs<ExtArgs>>): Prisma__RegistroImpactoClient<$Result.GetResult<Prisma.$RegistroImpactoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroImpacto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroImpactoFindUniqueOrThrowArgs} args - Arguments to find a RegistroImpacto
     * @example
     * // Get one RegistroImpacto
     * const registroImpacto = await prisma.registroImpacto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroImpactoFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroImpactoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroImpactoClient<$Result.GetResult<Prisma.$RegistroImpactoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroImpacto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroImpactoFindFirstArgs} args - Arguments to find a RegistroImpacto
     * @example
     * // Get one RegistroImpacto
     * const registroImpacto = await prisma.registroImpacto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroImpactoFindFirstArgs>(args?: SelectSubset<T, RegistroImpactoFindFirstArgs<ExtArgs>>): Prisma__RegistroImpactoClient<$Result.GetResult<Prisma.$RegistroImpactoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroImpacto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroImpactoFindFirstOrThrowArgs} args - Arguments to find a RegistroImpacto
     * @example
     * // Get one RegistroImpacto
     * const registroImpacto = await prisma.registroImpacto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroImpactoFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroImpactoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroImpactoClient<$Result.GetResult<Prisma.$RegistroImpactoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroImpactos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroImpactoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroImpactos
     * const registroImpactos = await prisma.registroImpacto.findMany()
     * 
     * // Get first 10 RegistroImpactos
     * const registroImpactos = await prisma.registroImpacto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroImpactoWithIdOnly = await prisma.registroImpacto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroImpactoFindManyArgs>(args?: SelectSubset<T, RegistroImpactoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroImpactoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroImpacto.
     * @param {RegistroImpactoCreateArgs} args - Arguments to create a RegistroImpacto.
     * @example
     * // Create one RegistroImpacto
     * const RegistroImpacto = await prisma.registroImpacto.create({
     *   data: {
     *     // ... data to create a RegistroImpacto
     *   }
     * })
     * 
     */
    create<T extends RegistroImpactoCreateArgs>(args: SelectSubset<T, RegistroImpactoCreateArgs<ExtArgs>>): Prisma__RegistroImpactoClient<$Result.GetResult<Prisma.$RegistroImpactoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroImpactos.
     * @param {RegistroImpactoCreateManyArgs} args - Arguments to create many RegistroImpactos.
     * @example
     * // Create many RegistroImpactos
     * const registroImpacto = await prisma.registroImpacto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroImpactoCreateManyArgs>(args?: SelectSubset<T, RegistroImpactoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroImpactos and returns the data saved in the database.
     * @param {RegistroImpactoCreateManyAndReturnArgs} args - Arguments to create many RegistroImpactos.
     * @example
     * // Create many RegistroImpactos
     * const registroImpacto = await prisma.registroImpacto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroImpactos and only return the `id`
     * const registroImpactoWithIdOnly = await prisma.registroImpacto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroImpactoCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroImpactoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroImpactoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistroImpacto.
     * @param {RegistroImpactoDeleteArgs} args - Arguments to delete one RegistroImpacto.
     * @example
     * // Delete one RegistroImpacto
     * const RegistroImpacto = await prisma.registroImpacto.delete({
     *   where: {
     *     // ... filter to delete one RegistroImpacto
     *   }
     * })
     * 
     */
    delete<T extends RegistroImpactoDeleteArgs>(args: SelectSubset<T, RegistroImpactoDeleteArgs<ExtArgs>>): Prisma__RegistroImpactoClient<$Result.GetResult<Prisma.$RegistroImpactoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroImpacto.
     * @param {RegistroImpactoUpdateArgs} args - Arguments to update one RegistroImpacto.
     * @example
     * // Update one RegistroImpacto
     * const registroImpacto = await prisma.registroImpacto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroImpactoUpdateArgs>(args: SelectSubset<T, RegistroImpactoUpdateArgs<ExtArgs>>): Prisma__RegistroImpactoClient<$Result.GetResult<Prisma.$RegistroImpactoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroImpactos.
     * @param {RegistroImpactoDeleteManyArgs} args - Arguments to filter RegistroImpactos to delete.
     * @example
     * // Delete a few RegistroImpactos
     * const { count } = await prisma.registroImpacto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroImpactoDeleteManyArgs>(args?: SelectSubset<T, RegistroImpactoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroImpactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroImpactoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroImpactos
     * const registroImpacto = await prisma.registroImpacto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroImpactoUpdateManyArgs>(args: SelectSubset<T, RegistroImpactoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroImpactos and returns the data updated in the database.
     * @param {RegistroImpactoUpdateManyAndReturnArgs} args - Arguments to update many RegistroImpactos.
     * @example
     * // Update many RegistroImpactos
     * const registroImpacto = await prisma.registroImpacto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistroImpactos and only return the `id`
     * const registroImpactoWithIdOnly = await prisma.registroImpacto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistroImpactoUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroImpactoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroImpactoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistroImpacto.
     * @param {RegistroImpactoUpsertArgs} args - Arguments to update or create a RegistroImpacto.
     * @example
     * // Update or create a RegistroImpacto
     * const registroImpacto = await prisma.registroImpacto.upsert({
     *   create: {
     *     // ... data to create a RegistroImpacto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroImpacto we want to update
     *   }
     * })
     */
    upsert<T extends RegistroImpactoUpsertArgs>(args: SelectSubset<T, RegistroImpactoUpsertArgs<ExtArgs>>): Prisma__RegistroImpactoClient<$Result.GetResult<Prisma.$RegistroImpactoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroImpactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroImpactoCountArgs} args - Arguments to filter RegistroImpactos to count.
     * @example
     * // Count the number of RegistroImpactos
     * const count = await prisma.registroImpacto.count({
     *   where: {
     *     // ... the filter for the RegistroImpactos we want to count
     *   }
     * })
    **/
    count<T extends RegistroImpactoCountArgs>(
      args?: Subset<T, RegistroImpactoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroImpactoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroImpacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroImpactoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroImpactoAggregateArgs>(args: Subset<T, RegistroImpactoAggregateArgs>): Prisma.PrismaPromise<GetRegistroImpactoAggregateType<T>>

    /**
     * Group by RegistroImpacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroImpactoGroupByArgs} args - Group by arguments.
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
      T extends RegistroImpactoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroImpactoGroupByArgs['orderBy'] }
        : { orderBy?: RegistroImpactoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroImpactoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroImpactoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroImpacto model
   */
  readonly fields: RegistroImpactoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroImpacto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroImpactoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurante<T extends RestauranteCadastroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteCadastroDefaultArgs<ExtArgs>>): Prisma__RestauranteCadastroClient<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegistroImpacto model
   */
  interface RegistroImpactoFieldRefs {
    readonly id: FieldRef<"RegistroImpacto", 'Int'>
    readonly produtoId: FieldRef<"RegistroImpacto", 'Int'>
    readonly restauranteId: FieldRef<"RegistroImpacto", 'Int'>
    readonly quantidadeKg: FieldRef<"RegistroImpacto", 'Float'>
    readonly foiAproveitado: FieldRef<"RegistroImpacto", 'Boolean'>
    readonly criadoEm: FieldRef<"RegistroImpacto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistroImpacto findUnique
   */
  export type RegistroImpactoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroImpacto to fetch.
     */
    where: RegistroImpactoWhereUniqueInput
  }

  /**
   * RegistroImpacto findUniqueOrThrow
   */
  export type RegistroImpactoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroImpacto to fetch.
     */
    where: RegistroImpactoWhereUniqueInput
  }

  /**
   * RegistroImpacto findFirst
   */
  export type RegistroImpactoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroImpacto to fetch.
     */
    where?: RegistroImpactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroImpactos to fetch.
     */
    orderBy?: RegistroImpactoOrderByWithRelationInput | RegistroImpactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroImpactos.
     */
    cursor?: RegistroImpactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroImpactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroImpactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroImpactos.
     */
    distinct?: RegistroImpactoScalarFieldEnum | RegistroImpactoScalarFieldEnum[]
  }

  /**
   * RegistroImpacto findFirstOrThrow
   */
  export type RegistroImpactoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroImpacto to fetch.
     */
    where?: RegistroImpactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroImpactos to fetch.
     */
    orderBy?: RegistroImpactoOrderByWithRelationInput | RegistroImpactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroImpactos.
     */
    cursor?: RegistroImpactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroImpactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroImpactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroImpactos.
     */
    distinct?: RegistroImpactoScalarFieldEnum | RegistroImpactoScalarFieldEnum[]
  }

  /**
   * RegistroImpacto findMany
   */
  export type RegistroImpactoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoInclude<ExtArgs> | null
    /**
     * Filter, which RegistroImpactos to fetch.
     */
    where?: RegistroImpactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroImpactos to fetch.
     */
    orderBy?: RegistroImpactoOrderByWithRelationInput | RegistroImpactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroImpactos.
     */
    cursor?: RegistroImpactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroImpactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroImpactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroImpactos.
     */
    distinct?: RegistroImpactoScalarFieldEnum | RegistroImpactoScalarFieldEnum[]
  }

  /**
   * RegistroImpacto create
   */
  export type RegistroImpactoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistroImpacto.
     */
    data: XOR<RegistroImpactoCreateInput, RegistroImpactoUncheckedCreateInput>
  }

  /**
   * RegistroImpacto createMany
   */
  export type RegistroImpactoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroImpactos.
     */
    data: RegistroImpactoCreateManyInput | RegistroImpactoCreateManyInput[]
  }

  /**
   * RegistroImpacto createManyAndReturn
   */
  export type RegistroImpactoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * The data used to create many RegistroImpactos.
     */
    data: RegistroImpactoCreateManyInput | RegistroImpactoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroImpacto update
   */
  export type RegistroImpactoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistroImpacto.
     */
    data: XOR<RegistroImpactoUpdateInput, RegistroImpactoUncheckedUpdateInput>
    /**
     * Choose, which RegistroImpacto to update.
     */
    where: RegistroImpactoWhereUniqueInput
  }

  /**
   * RegistroImpacto updateMany
   */
  export type RegistroImpactoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroImpactos.
     */
    data: XOR<RegistroImpactoUpdateManyMutationInput, RegistroImpactoUncheckedUpdateManyInput>
    /**
     * Filter which RegistroImpactos to update
     */
    where?: RegistroImpactoWhereInput
    /**
     * Limit how many RegistroImpactos to update.
     */
    limit?: number
  }

  /**
   * RegistroImpacto updateManyAndReturn
   */
  export type RegistroImpactoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * The data used to update RegistroImpactos.
     */
    data: XOR<RegistroImpactoUpdateManyMutationInput, RegistroImpactoUncheckedUpdateManyInput>
    /**
     * Filter which RegistroImpactos to update
     */
    where?: RegistroImpactoWhereInput
    /**
     * Limit how many RegistroImpactos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroImpacto upsert
   */
  export type RegistroImpactoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistroImpacto to update in case it exists.
     */
    where: RegistroImpactoWhereUniqueInput
    /**
     * In case the RegistroImpacto found by the `where` argument doesn't exist, create a new RegistroImpacto with this data.
     */
    create: XOR<RegistroImpactoCreateInput, RegistroImpactoUncheckedCreateInput>
    /**
     * In case the RegistroImpacto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroImpactoUpdateInput, RegistroImpactoUncheckedUpdateInput>
  }

  /**
   * RegistroImpacto delete
   */
  export type RegistroImpactoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoInclude<ExtArgs> | null
    /**
     * Filter which RegistroImpacto to delete.
     */
    where: RegistroImpactoWhereUniqueInput
  }

  /**
   * RegistroImpacto deleteMany
   */
  export type RegistroImpactoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroImpactos to delete
     */
    where?: RegistroImpactoWhereInput
    /**
     * Limit how many RegistroImpactos to delete.
     */
    limit?: number
  }

  /**
   * RegistroImpacto without action
   */
  export type RegistroImpactoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroImpacto
     */
    select?: RegistroImpactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroImpacto
     */
    omit?: RegistroImpactoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroImpactoInclude<ExtArgs> | null
  }


  /**
   * Model ItemListaCompras
   */

  export type AggregateItemListaCompras = {
    _count: ItemListaComprasCountAggregateOutputType | null
    _avg: ItemListaComprasAvgAggregateOutputType | null
    _sum: ItemListaComprasSumAggregateOutputType | null
    _min: ItemListaComprasMinAggregateOutputType | null
    _max: ItemListaComprasMaxAggregateOutputType | null
  }

  export type ItemListaComprasAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    restauranteId: number | null
  }

  export type ItemListaComprasSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    restauranteId: number | null
  }

  export type ItemListaComprasMinAggregateOutputType = {
    id: number | null
    nome: string | null
    localArmazenamento: string | null
    categoria: string | null
    quantidade: number | null
    unidade: string | null
    prioridade: boolean | null
    comprado: boolean | null
    restauranteId: number | null
    criadoEm: Date | null
  }

  export type ItemListaComprasMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    localArmazenamento: string | null
    categoria: string | null
    quantidade: number | null
    unidade: string | null
    prioridade: boolean | null
    comprado: boolean | null
    restauranteId: number | null
    criadoEm: Date | null
  }

  export type ItemListaComprasCountAggregateOutputType = {
    id: number
    nome: number
    localArmazenamento: number
    categoria: number
    quantidade: number
    unidade: number
    prioridade: number
    comprado: number
    restauranteId: number
    criadoEm: number
    _all: number
  }


  export type ItemListaComprasAvgAggregateInputType = {
    id?: true
    quantidade?: true
    restauranteId?: true
  }

  export type ItemListaComprasSumAggregateInputType = {
    id?: true
    quantidade?: true
    restauranteId?: true
  }

  export type ItemListaComprasMinAggregateInputType = {
    id?: true
    nome?: true
    localArmazenamento?: true
    categoria?: true
    quantidade?: true
    unidade?: true
    prioridade?: true
    comprado?: true
    restauranteId?: true
    criadoEm?: true
  }

  export type ItemListaComprasMaxAggregateInputType = {
    id?: true
    nome?: true
    localArmazenamento?: true
    categoria?: true
    quantidade?: true
    unidade?: true
    prioridade?: true
    comprado?: true
    restauranteId?: true
    criadoEm?: true
  }

  export type ItemListaComprasCountAggregateInputType = {
    id?: true
    nome?: true
    localArmazenamento?: true
    categoria?: true
    quantidade?: true
    unidade?: true
    prioridade?: true
    comprado?: true
    restauranteId?: true
    criadoEm?: true
    _all?: true
  }

  export type ItemListaComprasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemListaCompras to aggregate.
     */
    where?: ItemListaComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemListaCompras to fetch.
     */
    orderBy?: ItemListaComprasOrderByWithRelationInput | ItemListaComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemListaComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemListaCompras
    **/
    _count?: true | ItemListaComprasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemListaComprasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemListaComprasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemListaComprasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemListaComprasMaxAggregateInputType
  }

  export type GetItemListaComprasAggregateType<T extends ItemListaComprasAggregateArgs> = {
        [P in keyof T & keyof AggregateItemListaCompras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemListaCompras[P]>
      : GetScalarType<T[P], AggregateItemListaCompras[P]>
  }




  export type ItemListaComprasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListaComprasWhereInput
    orderBy?: ItemListaComprasOrderByWithAggregationInput | ItemListaComprasOrderByWithAggregationInput[]
    by: ItemListaComprasScalarFieldEnum[] | ItemListaComprasScalarFieldEnum
    having?: ItemListaComprasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemListaComprasCountAggregateInputType | true
    _avg?: ItemListaComprasAvgAggregateInputType
    _sum?: ItemListaComprasSumAggregateInputType
    _min?: ItemListaComprasMinAggregateInputType
    _max?: ItemListaComprasMaxAggregateInputType
  }

  export type ItemListaComprasGroupByOutputType = {
    id: number
    nome: string
    localArmazenamento: string
    categoria: string
    quantidade: number
    unidade: string
    prioridade: boolean
    comprado: boolean
    restauranteId: number
    criadoEm: Date
    _count: ItemListaComprasCountAggregateOutputType | null
    _avg: ItemListaComprasAvgAggregateOutputType | null
    _sum: ItemListaComprasSumAggregateOutputType | null
    _min: ItemListaComprasMinAggregateOutputType | null
    _max: ItemListaComprasMaxAggregateOutputType | null
  }

  type GetItemListaComprasGroupByPayload<T extends ItemListaComprasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemListaComprasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemListaComprasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemListaComprasGroupByOutputType[P]>
            : GetScalarType<T[P], ItemListaComprasGroupByOutputType[P]>
        }
      >
    >


  export type ItemListaComprasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localArmazenamento?: boolean
    categoria?: boolean
    quantidade?: boolean
    unidade?: boolean
    prioridade?: boolean
    comprado?: boolean
    restauranteId?: boolean
    criadoEm?: boolean
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemListaCompras"]>

  export type ItemListaComprasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localArmazenamento?: boolean
    categoria?: boolean
    quantidade?: boolean
    unidade?: boolean
    prioridade?: boolean
    comprado?: boolean
    restauranteId?: boolean
    criadoEm?: boolean
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemListaCompras"]>

  export type ItemListaComprasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localArmazenamento?: boolean
    categoria?: boolean
    quantidade?: boolean
    unidade?: boolean
    prioridade?: boolean
    comprado?: boolean
    restauranteId?: boolean
    criadoEm?: boolean
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemListaCompras"]>

  export type ItemListaComprasSelectScalar = {
    id?: boolean
    nome?: boolean
    localArmazenamento?: boolean
    categoria?: boolean
    quantidade?: boolean
    unidade?: boolean
    prioridade?: boolean
    comprado?: boolean
    restauranteId?: boolean
    criadoEm?: boolean
  }

  export type ItemListaComprasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "localArmazenamento" | "categoria" | "quantidade" | "unidade" | "prioridade" | "comprado" | "restauranteId" | "criadoEm", ExtArgs["result"]["itemListaCompras"]>
  export type ItemListaComprasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }
  export type ItemListaComprasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }
  export type ItemListaComprasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurante?: boolean | RestauranteCadastroDefaultArgs<ExtArgs>
  }

  export type $ItemListaComprasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemListaCompras"
    objects: {
      restaurante: Prisma.$RestauranteCadastroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      localArmazenamento: string
      categoria: string
      quantidade: number
      unidade: string
      prioridade: boolean
      comprado: boolean
      restauranteId: number
      criadoEm: Date
    }, ExtArgs["result"]["itemListaCompras"]>
    composites: {}
  }

  type ItemListaComprasGetPayload<S extends boolean | null | undefined | ItemListaComprasDefaultArgs> = $Result.GetResult<Prisma.$ItemListaComprasPayload, S>

  type ItemListaComprasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemListaComprasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemListaComprasCountAggregateInputType | true
    }

  export interface ItemListaComprasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemListaCompras'], meta: { name: 'ItemListaCompras' } }
    /**
     * Find zero or one ItemListaCompras that matches the filter.
     * @param {ItemListaComprasFindUniqueArgs} args - Arguments to find a ItemListaCompras
     * @example
     * // Get one ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemListaComprasFindUniqueArgs>(args: SelectSubset<T, ItemListaComprasFindUniqueArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemListaCompras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemListaComprasFindUniqueOrThrowArgs} args - Arguments to find a ItemListaCompras
     * @example
     * // Get one ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemListaComprasFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemListaComprasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemListaCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasFindFirstArgs} args - Arguments to find a ItemListaCompras
     * @example
     * // Get one ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemListaComprasFindFirstArgs>(args?: SelectSubset<T, ItemListaComprasFindFirstArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemListaCompras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasFindFirstOrThrowArgs} args - Arguments to find a ItemListaCompras
     * @example
     * // Get one ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemListaComprasFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemListaComprasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemListaCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.findMany()
     * 
     * // Get first 10 ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemListaComprasWithIdOnly = await prisma.itemListaCompras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemListaComprasFindManyArgs>(args?: SelectSubset<T, ItemListaComprasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemListaCompras.
     * @param {ItemListaComprasCreateArgs} args - Arguments to create a ItemListaCompras.
     * @example
     * // Create one ItemListaCompras
     * const ItemListaCompras = await prisma.itemListaCompras.create({
     *   data: {
     *     // ... data to create a ItemListaCompras
     *   }
     * })
     * 
     */
    create<T extends ItemListaComprasCreateArgs>(args: SelectSubset<T, ItemListaComprasCreateArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemListaCompras.
     * @param {ItemListaComprasCreateManyArgs} args - Arguments to create many ItemListaCompras.
     * @example
     * // Create many ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemListaComprasCreateManyArgs>(args?: SelectSubset<T, ItemListaComprasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemListaCompras and returns the data saved in the database.
     * @param {ItemListaComprasCreateManyAndReturnArgs} args - Arguments to create many ItemListaCompras.
     * @example
     * // Create many ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemListaCompras and only return the `id`
     * const itemListaComprasWithIdOnly = await prisma.itemListaCompras.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemListaComprasCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemListaComprasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemListaCompras.
     * @param {ItemListaComprasDeleteArgs} args - Arguments to delete one ItemListaCompras.
     * @example
     * // Delete one ItemListaCompras
     * const ItemListaCompras = await prisma.itemListaCompras.delete({
     *   where: {
     *     // ... filter to delete one ItemListaCompras
     *   }
     * })
     * 
     */
    delete<T extends ItemListaComprasDeleteArgs>(args: SelectSubset<T, ItemListaComprasDeleteArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemListaCompras.
     * @param {ItemListaComprasUpdateArgs} args - Arguments to update one ItemListaCompras.
     * @example
     * // Update one ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemListaComprasUpdateArgs>(args: SelectSubset<T, ItemListaComprasUpdateArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemListaCompras.
     * @param {ItemListaComprasDeleteManyArgs} args - Arguments to filter ItemListaCompras to delete.
     * @example
     * // Delete a few ItemListaCompras
     * const { count } = await prisma.itemListaCompras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemListaComprasDeleteManyArgs>(args?: SelectSubset<T, ItemListaComprasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemListaComprasUpdateManyArgs>(args: SelectSubset<T, ItemListaComprasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemListaCompras and returns the data updated in the database.
     * @param {ItemListaComprasUpdateManyAndReturnArgs} args - Arguments to update many ItemListaCompras.
     * @example
     * // Update many ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemListaCompras and only return the `id`
     * const itemListaComprasWithIdOnly = await prisma.itemListaCompras.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemListaComprasUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemListaComprasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemListaCompras.
     * @param {ItemListaComprasUpsertArgs} args - Arguments to update or create a ItemListaCompras.
     * @example
     * // Update or create a ItemListaCompras
     * const itemListaCompras = await prisma.itemListaCompras.upsert({
     *   create: {
     *     // ... data to create a ItemListaCompras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemListaCompras we want to update
     *   }
     * })
     */
    upsert<T extends ItemListaComprasUpsertArgs>(args: SelectSubset<T, ItemListaComprasUpsertArgs<ExtArgs>>): Prisma__ItemListaComprasClient<$Result.GetResult<Prisma.$ItemListaComprasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasCountArgs} args - Arguments to filter ItemListaCompras to count.
     * @example
     * // Count the number of ItemListaCompras
     * const count = await prisma.itemListaCompras.count({
     *   where: {
     *     // ... the filter for the ItemListaCompras we want to count
     *   }
     * })
    **/
    count<T extends ItemListaComprasCountArgs>(
      args?: Subset<T, ItemListaComprasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemListaComprasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemListaComprasAggregateArgs>(args: Subset<T, ItemListaComprasAggregateArgs>): Prisma.PrismaPromise<GetItemListaComprasAggregateType<T>>

    /**
     * Group by ItemListaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListaComprasGroupByArgs} args - Group by arguments.
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
      T extends ItemListaComprasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemListaComprasGroupByArgs['orderBy'] }
        : { orderBy?: ItemListaComprasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemListaComprasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemListaComprasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemListaCompras model
   */
  readonly fields: ItemListaComprasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemListaCompras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemListaComprasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurante<T extends RestauranteCadastroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestauranteCadastroDefaultArgs<ExtArgs>>): Prisma__RestauranteCadastroClient<$Result.GetResult<Prisma.$RestauranteCadastroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItemListaCompras model
   */
  interface ItemListaComprasFieldRefs {
    readonly id: FieldRef<"ItemListaCompras", 'Int'>
    readonly nome: FieldRef<"ItemListaCompras", 'String'>
    readonly localArmazenamento: FieldRef<"ItemListaCompras", 'String'>
    readonly categoria: FieldRef<"ItemListaCompras", 'String'>
    readonly quantidade: FieldRef<"ItemListaCompras", 'Float'>
    readonly unidade: FieldRef<"ItemListaCompras", 'String'>
    readonly prioridade: FieldRef<"ItemListaCompras", 'Boolean'>
    readonly comprado: FieldRef<"ItemListaCompras", 'Boolean'>
    readonly restauranteId: FieldRef<"ItemListaCompras", 'Int'>
    readonly criadoEm: FieldRef<"ItemListaCompras", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemListaCompras findUnique
   */
  export type ItemListaComprasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaCompras to fetch.
     */
    where: ItemListaComprasWhereUniqueInput
  }

  /**
   * ItemListaCompras findUniqueOrThrow
   */
  export type ItemListaComprasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaCompras to fetch.
     */
    where: ItemListaComprasWhereUniqueInput
  }

  /**
   * ItemListaCompras findFirst
   */
  export type ItemListaComprasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaCompras to fetch.
     */
    where?: ItemListaComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemListaCompras to fetch.
     */
    orderBy?: ItemListaComprasOrderByWithRelationInput | ItemListaComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemListaCompras.
     */
    cursor?: ItemListaComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemListaCompras.
     */
    distinct?: ItemListaComprasScalarFieldEnum | ItemListaComprasScalarFieldEnum[]
  }

  /**
   * ItemListaCompras findFirstOrThrow
   */
  export type ItemListaComprasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaCompras to fetch.
     */
    where?: ItemListaComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemListaCompras to fetch.
     */
    orderBy?: ItemListaComprasOrderByWithRelationInput | ItemListaComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemListaCompras.
     */
    cursor?: ItemListaComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemListaCompras.
     */
    distinct?: ItemListaComprasScalarFieldEnum | ItemListaComprasScalarFieldEnum[]
  }

  /**
   * ItemListaCompras findMany
   */
  export type ItemListaComprasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * Filter, which ItemListaCompras to fetch.
     */
    where?: ItemListaComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemListaCompras to fetch.
     */
    orderBy?: ItemListaComprasOrderByWithRelationInput | ItemListaComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemListaCompras.
     */
    cursor?: ItemListaComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemListaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemListaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemListaCompras.
     */
    distinct?: ItemListaComprasScalarFieldEnum | ItemListaComprasScalarFieldEnum[]
  }

  /**
   * ItemListaCompras create
   */
  export type ItemListaComprasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemListaCompras.
     */
    data: XOR<ItemListaComprasCreateInput, ItemListaComprasUncheckedCreateInput>
  }

  /**
   * ItemListaCompras createMany
   */
  export type ItemListaComprasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemListaCompras.
     */
    data: ItemListaComprasCreateManyInput | ItemListaComprasCreateManyInput[]
  }

  /**
   * ItemListaCompras createManyAndReturn
   */
  export type ItemListaComprasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * The data used to create many ItemListaCompras.
     */
    data: ItemListaComprasCreateManyInput | ItemListaComprasCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemListaCompras update
   */
  export type ItemListaComprasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemListaCompras.
     */
    data: XOR<ItemListaComprasUpdateInput, ItemListaComprasUncheckedUpdateInput>
    /**
     * Choose, which ItemListaCompras to update.
     */
    where: ItemListaComprasWhereUniqueInput
  }

  /**
   * ItemListaCompras updateMany
   */
  export type ItemListaComprasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemListaCompras.
     */
    data: XOR<ItemListaComprasUpdateManyMutationInput, ItemListaComprasUncheckedUpdateManyInput>
    /**
     * Filter which ItemListaCompras to update
     */
    where?: ItemListaComprasWhereInput
    /**
     * Limit how many ItemListaCompras to update.
     */
    limit?: number
  }

  /**
   * ItemListaCompras updateManyAndReturn
   */
  export type ItemListaComprasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * The data used to update ItemListaCompras.
     */
    data: XOR<ItemListaComprasUpdateManyMutationInput, ItemListaComprasUncheckedUpdateManyInput>
    /**
     * Filter which ItemListaCompras to update
     */
    where?: ItemListaComprasWhereInput
    /**
     * Limit how many ItemListaCompras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemListaCompras upsert
   */
  export type ItemListaComprasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemListaCompras to update in case it exists.
     */
    where: ItemListaComprasWhereUniqueInput
    /**
     * In case the ItemListaCompras found by the `where` argument doesn't exist, create a new ItemListaCompras with this data.
     */
    create: XOR<ItemListaComprasCreateInput, ItemListaComprasUncheckedCreateInput>
    /**
     * In case the ItemListaCompras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemListaComprasUpdateInput, ItemListaComprasUncheckedUpdateInput>
  }

  /**
   * ItemListaCompras delete
   */
  export type ItemListaComprasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
    /**
     * Filter which ItemListaCompras to delete.
     */
    where: ItemListaComprasWhereUniqueInput
  }

  /**
   * ItemListaCompras deleteMany
   */
  export type ItemListaComprasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemListaCompras to delete
     */
    where?: ItemListaComprasWhereInput
    /**
     * Limit how many ItemListaCompras to delete.
     */
    limit?: number
  }

  /**
   * ItemListaCompras without action
   */
  export type ItemListaComprasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemListaCompras
     */
    select?: ItemListaComprasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemListaCompras
     */
    omit?: ItemListaComprasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemListaComprasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RestauranteCadastroScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    endereco: 'endereco',
    telefone: 'telefone',
    email: 'email',
    cnpj: 'cnpj',
    atualizadoEm: 'atualizadoEm'
  };

  export type RestauranteCadastroScalarFieldEnum = (typeof RestauranteCadastroScalarFieldEnum)[keyof typeof RestauranteCadastroScalarFieldEnum]


  export const UsuarioPerfilScalarFieldEnum: {
    id: 'id',
    name: 'name',
    fotoUrl: 'fotoUrl',
    email: 'email',
    password: 'password',
    restauranteId: 'restauranteId',
    atualizadoEm: 'atualizadoEm'
  };

  export type UsuarioPerfilScalarFieldEnum = (typeof UsuarioPerfilScalarFieldEnum)[keyof typeof UsuarioPerfilScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    codigoBarras: 'codigoBarras',
    localArmazenamento: 'localArmazenamento',
    categoria: 'categoria',
    quantidade: 'quantidade',
    unidade: 'unidade',
    dataValidade: 'dataValidade',
    status: 'status',
    restauranteId: 'restauranteId',
    deuEntradaEm: 'deuEntradaEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const RegistroImpactoScalarFieldEnum: {
    id: 'id',
    produtoId: 'produtoId',
    restauranteId: 'restauranteId',
    quantidadeKg: 'quantidadeKg',
    foiAproveitado: 'foiAproveitado',
    criadoEm: 'criadoEm'
  };

  export type RegistroImpactoScalarFieldEnum = (typeof RegistroImpactoScalarFieldEnum)[keyof typeof RegistroImpactoScalarFieldEnum]


  export const ItemListaComprasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    localArmazenamento: 'localArmazenamento',
    categoria: 'categoria',
    quantidade: 'quantidade',
    unidade: 'unidade',
    prioridade: 'prioridade',
    comprado: 'comprado',
    restauranteId: 'restauranteId',
    criadoEm: 'criadoEm'
  };

  export type ItemListaComprasScalarFieldEnum = (typeof ItemListaComprasScalarFieldEnum)[keyof typeof ItemListaComprasScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type RestauranteCadastroWhereInput = {
    AND?: RestauranteCadastroWhereInput | RestauranteCadastroWhereInput[]
    OR?: RestauranteCadastroWhereInput[]
    NOT?: RestauranteCadastroWhereInput | RestauranteCadastroWhereInput[]
    id?: IntFilter<"RestauranteCadastro"> | number
    name?: StringFilter<"RestauranteCadastro"> | string
    password?: StringFilter<"RestauranteCadastro"> | string
    endereco?: StringFilter<"RestauranteCadastro"> | string
    telefone?: StringFilter<"RestauranteCadastro"> | string
    email?: StringFilter<"RestauranteCadastro"> | string
    cnpj?: StringFilter<"RestauranteCadastro"> | string
    atualizadoEm?: DateTimeFilter<"RestauranteCadastro"> | Date | string
    usuarios?: UsuarioPerfilListRelationFilter
    produtos?: ProdutoListRelationFilter
    itensListaCompras?: ItemListaComprasListRelationFilter
    registrosImpacto?: RegistroImpactoListRelationFilter
  }

  export type RestauranteCadastroOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    cnpj?: SortOrder
    atualizadoEm?: SortOrder
    usuarios?: UsuarioPerfilOrderByRelationAggregateInput
    produtos?: ProdutoOrderByRelationAggregateInput
    itensListaCompras?: ItemListaComprasOrderByRelationAggregateInput
    registrosImpacto?: RegistroImpactoOrderByRelationAggregateInput
  }

  export type RestauranteCadastroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cnpj?: string
    AND?: RestauranteCadastroWhereInput | RestauranteCadastroWhereInput[]
    OR?: RestauranteCadastroWhereInput[]
    NOT?: RestauranteCadastroWhereInput | RestauranteCadastroWhereInput[]
    name?: StringFilter<"RestauranteCadastro"> | string
    password?: StringFilter<"RestauranteCadastro"> | string
    endereco?: StringFilter<"RestauranteCadastro"> | string
    telefone?: StringFilter<"RestauranteCadastro"> | string
    atualizadoEm?: DateTimeFilter<"RestauranteCadastro"> | Date | string
    usuarios?: UsuarioPerfilListRelationFilter
    produtos?: ProdutoListRelationFilter
    itensListaCompras?: ItemListaComprasListRelationFilter
    registrosImpacto?: RegistroImpactoListRelationFilter
  }, "id" | "email" | "cnpj">

  export type RestauranteCadastroOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    cnpj?: SortOrder
    atualizadoEm?: SortOrder
    _count?: RestauranteCadastroCountOrderByAggregateInput
    _avg?: RestauranteCadastroAvgOrderByAggregateInput
    _max?: RestauranteCadastroMaxOrderByAggregateInput
    _min?: RestauranteCadastroMinOrderByAggregateInput
    _sum?: RestauranteCadastroSumOrderByAggregateInput
  }

  export type RestauranteCadastroScalarWhereWithAggregatesInput = {
    AND?: RestauranteCadastroScalarWhereWithAggregatesInput | RestauranteCadastroScalarWhereWithAggregatesInput[]
    OR?: RestauranteCadastroScalarWhereWithAggregatesInput[]
    NOT?: RestauranteCadastroScalarWhereWithAggregatesInput | RestauranteCadastroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RestauranteCadastro"> | number
    name?: StringWithAggregatesFilter<"RestauranteCadastro"> | string
    password?: StringWithAggregatesFilter<"RestauranteCadastro"> | string
    endereco?: StringWithAggregatesFilter<"RestauranteCadastro"> | string
    telefone?: StringWithAggregatesFilter<"RestauranteCadastro"> | string
    email?: StringWithAggregatesFilter<"RestauranteCadastro"> | string
    cnpj?: StringWithAggregatesFilter<"RestauranteCadastro"> | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"RestauranteCadastro"> | Date | string
  }

  export type UsuarioPerfilWhereInput = {
    AND?: UsuarioPerfilWhereInput | UsuarioPerfilWhereInput[]
    OR?: UsuarioPerfilWhereInput[]
    NOT?: UsuarioPerfilWhereInput | UsuarioPerfilWhereInput[]
    id?: IntFilter<"UsuarioPerfil"> | number
    name?: StringFilter<"UsuarioPerfil"> | string
    fotoUrl?: StringNullableFilter<"UsuarioPerfil"> | string | null
    email?: StringFilter<"UsuarioPerfil"> | string
    password?: StringFilter<"UsuarioPerfil"> | string
    restauranteId?: IntFilter<"UsuarioPerfil"> | number
    atualizadoEm?: DateTimeFilter<"UsuarioPerfil"> | Date | string
    restaurante?: XOR<RestauranteCadastroScalarRelationFilter, RestauranteCadastroWhereInput>
  }

  export type UsuarioPerfilOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    restauranteId?: SortOrder
    atualizadoEm?: SortOrder
    restaurante?: RestauranteCadastroOrderByWithRelationInput
  }

  export type UsuarioPerfilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioPerfilWhereInput | UsuarioPerfilWhereInput[]
    OR?: UsuarioPerfilWhereInput[]
    NOT?: UsuarioPerfilWhereInput | UsuarioPerfilWhereInput[]
    name?: StringFilter<"UsuarioPerfil"> | string
    fotoUrl?: StringNullableFilter<"UsuarioPerfil"> | string | null
    password?: StringFilter<"UsuarioPerfil"> | string
    restauranteId?: IntFilter<"UsuarioPerfil"> | number
    atualizadoEm?: DateTimeFilter<"UsuarioPerfil"> | Date | string
    restaurante?: XOR<RestauranteCadastroScalarRelationFilter, RestauranteCadastroWhereInput>
  }, "id" | "email">

  export type UsuarioPerfilOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    restauranteId?: SortOrder
    atualizadoEm?: SortOrder
    _count?: UsuarioPerfilCountOrderByAggregateInput
    _avg?: UsuarioPerfilAvgOrderByAggregateInput
    _max?: UsuarioPerfilMaxOrderByAggregateInput
    _min?: UsuarioPerfilMinOrderByAggregateInput
    _sum?: UsuarioPerfilSumOrderByAggregateInput
  }

  export type UsuarioPerfilScalarWhereWithAggregatesInput = {
    AND?: UsuarioPerfilScalarWhereWithAggregatesInput | UsuarioPerfilScalarWhereWithAggregatesInput[]
    OR?: UsuarioPerfilScalarWhereWithAggregatesInput[]
    NOT?: UsuarioPerfilScalarWhereWithAggregatesInput | UsuarioPerfilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsuarioPerfil"> | number
    name?: StringWithAggregatesFilter<"UsuarioPerfil"> | string
    fotoUrl?: StringNullableWithAggregatesFilter<"UsuarioPerfil"> | string | null
    email?: StringWithAggregatesFilter<"UsuarioPerfil"> | string
    password?: StringWithAggregatesFilter<"UsuarioPerfil"> | string
    restauranteId?: IntWithAggregatesFilter<"UsuarioPerfil"> | number
    atualizadoEm?: DateTimeWithAggregatesFilter<"UsuarioPerfil"> | Date | string
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    codigoBarras?: StringNullableFilter<"Produto"> | string | null
    localArmazenamento?: StringFilter<"Produto"> | string
    categoria?: StringFilter<"Produto"> | string
    quantidade?: FloatFilter<"Produto"> | number
    unidade?: StringFilter<"Produto"> | string
    dataValidade?: DateTimeFilter<"Produto"> | Date | string
    status?: StringFilter<"Produto"> | string
    restauranteId?: IntFilter<"Produto"> | number
    deuEntradaEm?: DateTimeFilter<"Produto"> | Date | string
    atualizadoEm?: DateTimeFilter<"Produto"> | Date | string
    restaurante?: XOR<RestauranteCadastroScalarRelationFilter, RestauranteCadastroWhereInput>
    registrosImpacto?: RegistroImpactoListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    codigoBarras?: SortOrderInput | SortOrder
    localArmazenamento?: SortOrder
    categoria?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    dataValidade?: SortOrder
    status?: SortOrder
    restauranteId?: SortOrder
    deuEntradaEm?: SortOrder
    atualizadoEm?: SortOrder
    restaurante?: RestauranteCadastroOrderByWithRelationInput
    registrosImpacto?: RegistroImpactoOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    codigoBarras?: StringNullableFilter<"Produto"> | string | null
    localArmazenamento?: StringFilter<"Produto"> | string
    categoria?: StringFilter<"Produto"> | string
    quantidade?: FloatFilter<"Produto"> | number
    unidade?: StringFilter<"Produto"> | string
    dataValidade?: DateTimeFilter<"Produto"> | Date | string
    status?: StringFilter<"Produto"> | string
    restauranteId?: IntFilter<"Produto"> | number
    deuEntradaEm?: DateTimeFilter<"Produto"> | Date | string
    atualizadoEm?: DateTimeFilter<"Produto"> | Date | string
    restaurante?: XOR<RestauranteCadastroScalarRelationFilter, RestauranteCadastroWhereInput>
    registrosImpacto?: RegistroImpactoListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    codigoBarras?: SortOrderInput | SortOrder
    localArmazenamento?: SortOrder
    categoria?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    dataValidade?: SortOrder
    status?: SortOrder
    restauranteId?: SortOrder
    deuEntradaEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    nome?: StringWithAggregatesFilter<"Produto"> | string
    codigoBarras?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    localArmazenamento?: StringWithAggregatesFilter<"Produto"> | string
    categoria?: StringWithAggregatesFilter<"Produto"> | string
    quantidade?: FloatWithAggregatesFilter<"Produto"> | number
    unidade?: StringWithAggregatesFilter<"Produto"> | string
    dataValidade?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
    status?: StringWithAggregatesFilter<"Produto"> | string
    restauranteId?: IntWithAggregatesFilter<"Produto"> | number
    deuEntradaEm?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
  }

  export type RegistroImpactoWhereInput = {
    AND?: RegistroImpactoWhereInput | RegistroImpactoWhereInput[]
    OR?: RegistroImpactoWhereInput[]
    NOT?: RegistroImpactoWhereInput | RegistroImpactoWhereInput[]
    id?: IntFilter<"RegistroImpacto"> | number
    produtoId?: IntFilter<"RegistroImpacto"> | number
    restauranteId?: IntFilter<"RegistroImpacto"> | number
    quantidadeKg?: FloatFilter<"RegistroImpacto"> | number
    foiAproveitado?: BoolFilter<"RegistroImpacto"> | boolean
    criadoEm?: DateTimeFilter<"RegistroImpacto"> | Date | string
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    restaurante?: XOR<RestauranteCadastroScalarRelationFilter, RestauranteCadastroWhereInput>
  }

  export type RegistroImpactoOrderByWithRelationInput = {
    id?: SortOrder
    produtoId?: SortOrder
    restauranteId?: SortOrder
    quantidadeKg?: SortOrder
    foiAproveitado?: SortOrder
    criadoEm?: SortOrder
    produto?: ProdutoOrderByWithRelationInput
    restaurante?: RestauranteCadastroOrderByWithRelationInput
  }

  export type RegistroImpactoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegistroImpactoWhereInput | RegistroImpactoWhereInput[]
    OR?: RegistroImpactoWhereInput[]
    NOT?: RegistroImpactoWhereInput | RegistroImpactoWhereInput[]
    produtoId?: IntFilter<"RegistroImpacto"> | number
    restauranteId?: IntFilter<"RegistroImpacto"> | number
    quantidadeKg?: FloatFilter<"RegistroImpacto"> | number
    foiAproveitado?: BoolFilter<"RegistroImpacto"> | boolean
    criadoEm?: DateTimeFilter<"RegistroImpacto"> | Date | string
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    restaurante?: XOR<RestauranteCadastroScalarRelationFilter, RestauranteCadastroWhereInput>
  }, "id">

  export type RegistroImpactoOrderByWithAggregationInput = {
    id?: SortOrder
    produtoId?: SortOrder
    restauranteId?: SortOrder
    quantidadeKg?: SortOrder
    foiAproveitado?: SortOrder
    criadoEm?: SortOrder
    _count?: RegistroImpactoCountOrderByAggregateInput
    _avg?: RegistroImpactoAvgOrderByAggregateInput
    _max?: RegistroImpactoMaxOrderByAggregateInput
    _min?: RegistroImpactoMinOrderByAggregateInput
    _sum?: RegistroImpactoSumOrderByAggregateInput
  }

  export type RegistroImpactoScalarWhereWithAggregatesInput = {
    AND?: RegistroImpactoScalarWhereWithAggregatesInput | RegistroImpactoScalarWhereWithAggregatesInput[]
    OR?: RegistroImpactoScalarWhereWithAggregatesInput[]
    NOT?: RegistroImpactoScalarWhereWithAggregatesInput | RegistroImpactoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RegistroImpacto"> | number
    produtoId?: IntWithAggregatesFilter<"RegistroImpacto"> | number
    restauranteId?: IntWithAggregatesFilter<"RegistroImpacto"> | number
    quantidadeKg?: FloatWithAggregatesFilter<"RegistroImpacto"> | number
    foiAproveitado?: BoolWithAggregatesFilter<"RegistroImpacto"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"RegistroImpacto"> | Date | string
  }

  export type ItemListaComprasWhereInput = {
    AND?: ItemListaComprasWhereInput | ItemListaComprasWhereInput[]
    OR?: ItemListaComprasWhereInput[]
    NOT?: ItemListaComprasWhereInput | ItemListaComprasWhereInput[]
    id?: IntFilter<"ItemListaCompras"> | number
    nome?: StringFilter<"ItemListaCompras"> | string
    localArmazenamento?: StringFilter<"ItemListaCompras"> | string
    categoria?: StringFilter<"ItemListaCompras"> | string
    quantidade?: FloatFilter<"ItemListaCompras"> | number
    unidade?: StringFilter<"ItemListaCompras"> | string
    prioridade?: BoolFilter<"ItemListaCompras"> | boolean
    comprado?: BoolFilter<"ItemListaCompras"> | boolean
    restauranteId?: IntFilter<"ItemListaCompras"> | number
    criadoEm?: DateTimeFilter<"ItemListaCompras"> | Date | string
    restaurante?: XOR<RestauranteCadastroScalarRelationFilter, RestauranteCadastroWhereInput>
  }

  export type ItemListaComprasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    localArmazenamento?: SortOrder
    categoria?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    prioridade?: SortOrder
    comprado?: SortOrder
    restauranteId?: SortOrder
    criadoEm?: SortOrder
    restaurante?: RestauranteCadastroOrderByWithRelationInput
  }

  export type ItemListaComprasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemListaComprasWhereInput | ItemListaComprasWhereInput[]
    OR?: ItemListaComprasWhereInput[]
    NOT?: ItemListaComprasWhereInput | ItemListaComprasWhereInput[]
    nome?: StringFilter<"ItemListaCompras"> | string
    localArmazenamento?: StringFilter<"ItemListaCompras"> | string
    categoria?: StringFilter<"ItemListaCompras"> | string
    quantidade?: FloatFilter<"ItemListaCompras"> | number
    unidade?: StringFilter<"ItemListaCompras"> | string
    prioridade?: BoolFilter<"ItemListaCompras"> | boolean
    comprado?: BoolFilter<"ItemListaCompras"> | boolean
    restauranteId?: IntFilter<"ItemListaCompras"> | number
    criadoEm?: DateTimeFilter<"ItemListaCompras"> | Date | string
    restaurante?: XOR<RestauranteCadastroScalarRelationFilter, RestauranteCadastroWhereInput>
  }, "id">

  export type ItemListaComprasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    localArmazenamento?: SortOrder
    categoria?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    prioridade?: SortOrder
    comprado?: SortOrder
    restauranteId?: SortOrder
    criadoEm?: SortOrder
    _count?: ItemListaComprasCountOrderByAggregateInput
    _avg?: ItemListaComprasAvgOrderByAggregateInput
    _max?: ItemListaComprasMaxOrderByAggregateInput
    _min?: ItemListaComprasMinOrderByAggregateInput
    _sum?: ItemListaComprasSumOrderByAggregateInput
  }

  export type ItemListaComprasScalarWhereWithAggregatesInput = {
    AND?: ItemListaComprasScalarWhereWithAggregatesInput | ItemListaComprasScalarWhereWithAggregatesInput[]
    OR?: ItemListaComprasScalarWhereWithAggregatesInput[]
    NOT?: ItemListaComprasScalarWhereWithAggregatesInput | ItemListaComprasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemListaCompras"> | number
    nome?: StringWithAggregatesFilter<"ItemListaCompras"> | string
    localArmazenamento?: StringWithAggregatesFilter<"ItemListaCompras"> | string
    categoria?: StringWithAggregatesFilter<"ItemListaCompras"> | string
    quantidade?: FloatWithAggregatesFilter<"ItemListaCompras"> | number
    unidade?: StringWithAggregatesFilter<"ItemListaCompras"> | string
    prioridade?: BoolWithAggregatesFilter<"ItemListaCompras"> | boolean
    comprado?: BoolWithAggregatesFilter<"ItemListaCompras"> | boolean
    restauranteId?: IntWithAggregatesFilter<"ItemListaCompras"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"ItemListaCompras"> | Date | string
  }

  export type RestauranteCadastroCreateInput = {
    name: string
    password: string
    endereco: string
    telefone: string
    email: string
    cnpj: string
    atualizadoEm?: Date | string
    usuarios?: UsuarioPerfilCreateNestedManyWithoutRestauranteInput
    produtos?: ProdutoCreateNestedManyWithoutRestauranteInput
    itensListaCompras?: ItemListaComprasCreateNestedManyWithoutRestauranteInput
    registrosImpacto?: RegistroImpactoCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCadastroUncheckedCreateInput = {
    id?: number
    name: string
    password: string
    endereco: string
    telefone: string
    email: string
    cnpj: string
    atualizadoEm?: Date | string
    usuarios?: UsuarioPerfilUncheckedCreateNestedManyWithoutRestauranteInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutRestauranteInput
    itensListaCompras?: ItemListaComprasUncheckedCreateNestedManyWithoutRestauranteInput
    registrosImpacto?: RegistroImpactoUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCadastroUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioPerfilUpdateManyWithoutRestauranteNestedInput
    produtos?: ProdutoUpdateManyWithoutRestauranteNestedInput
    itensListaCompras?: ItemListaComprasUpdateManyWithoutRestauranteNestedInput
    registrosImpacto?: RegistroImpactoUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteCadastroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioPerfilUncheckedUpdateManyWithoutRestauranteNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutRestauranteNestedInput
    itensListaCompras?: ItemListaComprasUncheckedUpdateManyWithoutRestauranteNestedInput
    registrosImpacto?: RegistroImpactoUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteCadastroCreateManyInput = {
    id?: number
    name: string
    password: string
    endereco: string
    telefone: string
    email: string
    cnpj: string
    atualizadoEm?: Date | string
  }

  export type RestauranteCadastroUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestauranteCadastroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioPerfilCreateInput = {
    name: string
    fotoUrl?: string | null
    email: string
    password: string
    atualizadoEm?: Date | string
    restaurante: RestauranteCadastroCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioPerfilUncheckedCreateInput = {
    id?: number
    name: string
    fotoUrl?: string | null
    email: string
    password: string
    restauranteId: number
    atualizadoEm?: Date | string
  }

  export type UsuarioPerfilUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteCadastroUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioPerfilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    restauranteId?: IntFieldUpdateOperationsInput | number
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioPerfilCreateManyInput = {
    id?: number
    name: string
    fotoUrl?: string | null
    email: string
    password: string
    restauranteId: number
    atualizadoEm?: Date | string
  }

  export type UsuarioPerfilUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioPerfilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    restauranteId?: IntFieldUpdateOperationsInput | number
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoCreateInput = {
    nome: string
    codigoBarras?: string | null
    localArmazenamento: string
    categoria: string
    quantidade?: number
    unidade?: string
    dataValidade: Date | string
    status?: string
    deuEntradaEm?: Date | string
    atualizadoEm?: Date | string
    restaurante: RestauranteCadastroCreateNestedOneWithoutProdutosInput
    registrosImpacto?: RegistroImpactoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    nome: string
    codigoBarras?: string | null
    localArmazenamento: string
    categoria: string
    quantidade?: number
    unidade?: string
    dataValidade: Date | string
    status?: string
    restauranteId: number
    deuEntradaEm?: Date | string
    atualizadoEm?: Date | string
    registrosImpacto?: RegistroImpactoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deuEntradaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteCadastroUpdateOneRequiredWithoutProdutosNestedInput
    registrosImpacto?: RegistroImpactoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    restauranteId?: IntFieldUpdateOperationsInput | number
    deuEntradaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    registrosImpacto?: RegistroImpactoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    nome: string
    codigoBarras?: string | null
    localArmazenamento: string
    categoria: string
    quantidade?: number
    unidade?: string
    dataValidade: Date | string
    status?: string
    restauranteId: number
    deuEntradaEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deuEntradaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    restauranteId?: IntFieldUpdateOperationsInput | number
    deuEntradaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroImpactoCreateInput = {
    quantidadeKg: number
    foiAproveitado: boolean
    criadoEm?: Date | string
    produto: ProdutoCreateNestedOneWithoutRegistrosImpactoInput
    restaurante: RestauranteCadastroCreateNestedOneWithoutRegistrosImpactoInput
  }

  export type RegistroImpactoUncheckedCreateInput = {
    id?: number
    produtoId: number
    restauranteId: number
    quantidadeKg: number
    foiAproveitado: boolean
    criadoEm?: Date | string
  }

  export type RegistroImpactoUpdateInput = {
    quantidadeKg?: FloatFieldUpdateOperationsInput | number
    foiAproveitado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutRegistrosImpactoNestedInput
    restaurante?: RestauranteCadastroUpdateOneRequiredWithoutRegistrosImpactoNestedInput
  }

  export type RegistroImpactoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    restauranteId?: IntFieldUpdateOperationsInput | number
    quantidadeKg?: FloatFieldUpdateOperationsInput | number
    foiAproveitado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroImpactoCreateManyInput = {
    id?: number
    produtoId: number
    restauranteId: number
    quantidadeKg: number
    foiAproveitado: boolean
    criadoEm?: Date | string
  }

  export type RegistroImpactoUpdateManyMutationInput = {
    quantidadeKg?: FloatFieldUpdateOperationsInput | number
    foiAproveitado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroImpactoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    restauranteId?: IntFieldUpdateOperationsInput | number
    quantidadeKg?: FloatFieldUpdateOperationsInput | number
    foiAproveitado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListaComprasCreateInput = {
    nome: string
    localArmazenamento: string
    categoria?: string
    quantidade?: number
    unidade?: string
    prioridade?: boolean
    comprado?: boolean
    criadoEm?: Date | string
    restaurante: RestauranteCadastroCreateNestedOneWithoutItensListaComprasInput
  }

  export type ItemListaComprasUncheckedCreateInput = {
    id?: number
    nome: string
    localArmazenamento: string
    categoria?: string
    quantidade?: number
    unidade?: string
    prioridade?: boolean
    comprado?: boolean
    restauranteId: number
    criadoEm?: Date | string
  }

  export type ItemListaComprasUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    prioridade?: BoolFieldUpdateOperationsInput | boolean
    comprado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteCadastroUpdateOneRequiredWithoutItensListaComprasNestedInput
  }

  export type ItemListaComprasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    prioridade?: BoolFieldUpdateOperationsInput | boolean
    comprado?: BoolFieldUpdateOperationsInput | boolean
    restauranteId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListaComprasCreateManyInput = {
    id?: number
    nome: string
    localArmazenamento: string
    categoria?: string
    quantidade?: number
    unidade?: string
    prioridade?: boolean
    comprado?: boolean
    restauranteId: number
    criadoEm?: Date | string
  }

  export type ItemListaComprasUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    prioridade?: BoolFieldUpdateOperationsInput | boolean
    comprado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListaComprasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    prioridade?: BoolFieldUpdateOperationsInput | boolean
    comprado?: BoolFieldUpdateOperationsInput | boolean
    restauranteId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type UsuarioPerfilListRelationFilter = {
    every?: UsuarioPerfilWhereInput
    some?: UsuarioPerfilWhereInput
    none?: UsuarioPerfilWhereInput
  }

  export type ProdutoListRelationFilter = {
    every?: ProdutoWhereInput
    some?: ProdutoWhereInput
    none?: ProdutoWhereInput
  }

  export type ItemListaComprasListRelationFilter = {
    every?: ItemListaComprasWhereInput
    some?: ItemListaComprasWhereInput
    none?: ItemListaComprasWhereInput
  }

  export type RegistroImpactoListRelationFilter = {
    every?: RegistroImpactoWhereInput
    some?: RegistroImpactoWhereInput
    none?: RegistroImpactoWhereInput
  }

  export type UsuarioPerfilOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemListaComprasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistroImpactoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestauranteCadastroCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    cnpj?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type RestauranteCadastroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RestauranteCadastroMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    cnpj?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type RestauranteCadastroMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    cnpj?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type RestauranteCadastroSumOrderByAggregateInput = {
    id?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RestauranteCadastroScalarRelationFilter = {
    is?: RestauranteCadastroWhereInput
    isNot?: RestauranteCadastroWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioPerfilCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fotoUrl?: SortOrder
    email?: SortOrder
    password?: SortOrder
    restauranteId?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UsuarioPerfilAvgOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
  }

  export type UsuarioPerfilMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fotoUrl?: SortOrder
    email?: SortOrder
    password?: SortOrder
    restauranteId?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UsuarioPerfilMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fotoUrl?: SortOrder
    email?: SortOrder
    password?: SortOrder
    restauranteId?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UsuarioPerfilSumOrderByAggregateInput = {
    id?: SortOrder
    restauranteId?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigoBarras?: SortOrder
    localArmazenamento?: SortOrder
    categoria?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    dataValidade?: SortOrder
    status?: SortOrder
    restauranteId?: SortOrder
    deuEntradaEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    restauranteId?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigoBarras?: SortOrder
    localArmazenamento?: SortOrder
    categoria?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    dataValidade?: SortOrder
    status?: SortOrder
    restauranteId?: SortOrder
    deuEntradaEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigoBarras?: SortOrder
    localArmazenamento?: SortOrder
    categoria?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    dataValidade?: SortOrder
    status?: SortOrder
    restauranteId?: SortOrder
    deuEntradaEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    restauranteId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type RegistroImpactoCountOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    restauranteId?: SortOrder
    quantidadeKg?: SortOrder
    foiAproveitado?: SortOrder
    criadoEm?: SortOrder
  }

  export type RegistroImpactoAvgOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    restauranteId?: SortOrder
    quantidadeKg?: SortOrder
  }

  export type RegistroImpactoMaxOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    restauranteId?: SortOrder
    quantidadeKg?: SortOrder
    foiAproveitado?: SortOrder
    criadoEm?: SortOrder
  }

  export type RegistroImpactoMinOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    restauranteId?: SortOrder
    quantidadeKg?: SortOrder
    foiAproveitado?: SortOrder
    criadoEm?: SortOrder
  }

  export type RegistroImpactoSumOrderByAggregateInput = {
    id?: SortOrder
    produtoId?: SortOrder
    restauranteId?: SortOrder
    quantidadeKg?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ItemListaComprasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localArmazenamento?: SortOrder
    categoria?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    prioridade?: SortOrder
    comprado?: SortOrder
    restauranteId?: SortOrder
    criadoEm?: SortOrder
  }

  export type ItemListaComprasAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    restauranteId?: SortOrder
  }

  export type ItemListaComprasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localArmazenamento?: SortOrder
    categoria?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    prioridade?: SortOrder
    comprado?: SortOrder
    restauranteId?: SortOrder
    criadoEm?: SortOrder
  }

  export type ItemListaComprasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localArmazenamento?: SortOrder
    categoria?: SortOrder
    quantidade?: SortOrder
    unidade?: SortOrder
    prioridade?: SortOrder
    comprado?: SortOrder
    restauranteId?: SortOrder
    criadoEm?: SortOrder
  }

  export type ItemListaComprasSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    restauranteId?: SortOrder
  }

  export type UsuarioPerfilCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<UsuarioPerfilCreateWithoutRestauranteInput, UsuarioPerfilUncheckedCreateWithoutRestauranteInput> | UsuarioPerfilCreateWithoutRestauranteInput[] | UsuarioPerfilUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: UsuarioPerfilCreateOrConnectWithoutRestauranteInput | UsuarioPerfilCreateOrConnectWithoutRestauranteInput[]
    createMany?: UsuarioPerfilCreateManyRestauranteInputEnvelope
    connect?: UsuarioPerfilWhereUniqueInput | UsuarioPerfilWhereUniqueInput[]
  }

  export type ProdutoCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<ProdutoCreateWithoutRestauranteInput, ProdutoUncheckedCreateWithoutRestauranteInput> | ProdutoCreateWithoutRestauranteInput[] | ProdutoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutRestauranteInput | ProdutoCreateOrConnectWithoutRestauranteInput[]
    createMany?: ProdutoCreateManyRestauranteInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ItemListaComprasCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<ItemListaComprasCreateWithoutRestauranteInput, ItemListaComprasUncheckedCreateWithoutRestauranteInput> | ItemListaComprasCreateWithoutRestauranteInput[] | ItemListaComprasUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ItemListaComprasCreateOrConnectWithoutRestauranteInput | ItemListaComprasCreateOrConnectWithoutRestauranteInput[]
    createMany?: ItemListaComprasCreateManyRestauranteInputEnvelope
    connect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
  }

  export type RegistroImpactoCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<RegistroImpactoCreateWithoutRestauranteInput, RegistroImpactoUncheckedCreateWithoutRestauranteInput> | RegistroImpactoCreateWithoutRestauranteInput[] | RegistroImpactoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: RegistroImpactoCreateOrConnectWithoutRestauranteInput | RegistroImpactoCreateOrConnectWithoutRestauranteInput[]
    createMany?: RegistroImpactoCreateManyRestauranteInputEnvelope
    connect?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
  }

  export type UsuarioPerfilUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<UsuarioPerfilCreateWithoutRestauranteInput, UsuarioPerfilUncheckedCreateWithoutRestauranteInput> | UsuarioPerfilCreateWithoutRestauranteInput[] | UsuarioPerfilUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: UsuarioPerfilCreateOrConnectWithoutRestauranteInput | UsuarioPerfilCreateOrConnectWithoutRestauranteInput[]
    createMany?: UsuarioPerfilCreateManyRestauranteInputEnvelope
    connect?: UsuarioPerfilWhereUniqueInput | UsuarioPerfilWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<ProdutoCreateWithoutRestauranteInput, ProdutoUncheckedCreateWithoutRestauranteInput> | ProdutoCreateWithoutRestauranteInput[] | ProdutoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutRestauranteInput | ProdutoCreateOrConnectWithoutRestauranteInput[]
    createMany?: ProdutoCreateManyRestauranteInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ItemListaComprasUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<ItemListaComprasCreateWithoutRestauranteInput, ItemListaComprasUncheckedCreateWithoutRestauranteInput> | ItemListaComprasCreateWithoutRestauranteInput[] | ItemListaComprasUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ItemListaComprasCreateOrConnectWithoutRestauranteInput | ItemListaComprasCreateOrConnectWithoutRestauranteInput[]
    createMany?: ItemListaComprasCreateManyRestauranteInputEnvelope
    connect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
  }

  export type RegistroImpactoUncheckedCreateNestedManyWithoutRestauranteInput = {
    create?: XOR<RegistroImpactoCreateWithoutRestauranteInput, RegistroImpactoUncheckedCreateWithoutRestauranteInput> | RegistroImpactoCreateWithoutRestauranteInput[] | RegistroImpactoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: RegistroImpactoCreateOrConnectWithoutRestauranteInput | RegistroImpactoCreateOrConnectWithoutRestauranteInput[]
    createMany?: RegistroImpactoCreateManyRestauranteInputEnvelope
    connect?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioPerfilUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<UsuarioPerfilCreateWithoutRestauranteInput, UsuarioPerfilUncheckedCreateWithoutRestauranteInput> | UsuarioPerfilCreateWithoutRestauranteInput[] | UsuarioPerfilUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: UsuarioPerfilCreateOrConnectWithoutRestauranteInput | UsuarioPerfilCreateOrConnectWithoutRestauranteInput[]
    upsert?: UsuarioPerfilUpsertWithWhereUniqueWithoutRestauranteInput | UsuarioPerfilUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: UsuarioPerfilCreateManyRestauranteInputEnvelope
    set?: UsuarioPerfilWhereUniqueInput | UsuarioPerfilWhereUniqueInput[]
    disconnect?: UsuarioPerfilWhereUniqueInput | UsuarioPerfilWhereUniqueInput[]
    delete?: UsuarioPerfilWhereUniqueInput | UsuarioPerfilWhereUniqueInput[]
    connect?: UsuarioPerfilWhereUniqueInput | UsuarioPerfilWhereUniqueInput[]
    update?: UsuarioPerfilUpdateWithWhereUniqueWithoutRestauranteInput | UsuarioPerfilUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: UsuarioPerfilUpdateManyWithWhereWithoutRestauranteInput | UsuarioPerfilUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: UsuarioPerfilScalarWhereInput | UsuarioPerfilScalarWhereInput[]
  }

  export type ProdutoUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<ProdutoCreateWithoutRestauranteInput, ProdutoUncheckedCreateWithoutRestauranteInput> | ProdutoCreateWithoutRestauranteInput[] | ProdutoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutRestauranteInput | ProdutoCreateOrConnectWithoutRestauranteInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutRestauranteInput | ProdutoUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: ProdutoCreateManyRestauranteInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutRestauranteInput | ProdutoUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutRestauranteInput | ProdutoUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ItemListaComprasUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<ItemListaComprasCreateWithoutRestauranteInput, ItemListaComprasUncheckedCreateWithoutRestauranteInput> | ItemListaComprasCreateWithoutRestauranteInput[] | ItemListaComprasUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ItemListaComprasCreateOrConnectWithoutRestauranteInput | ItemListaComprasCreateOrConnectWithoutRestauranteInput[]
    upsert?: ItemListaComprasUpsertWithWhereUniqueWithoutRestauranteInput | ItemListaComprasUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: ItemListaComprasCreateManyRestauranteInputEnvelope
    set?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    disconnect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    delete?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    connect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    update?: ItemListaComprasUpdateWithWhereUniqueWithoutRestauranteInput | ItemListaComprasUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: ItemListaComprasUpdateManyWithWhereWithoutRestauranteInput | ItemListaComprasUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: ItemListaComprasScalarWhereInput | ItemListaComprasScalarWhereInput[]
  }

  export type RegistroImpactoUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<RegistroImpactoCreateWithoutRestauranteInput, RegistroImpactoUncheckedCreateWithoutRestauranteInput> | RegistroImpactoCreateWithoutRestauranteInput[] | RegistroImpactoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: RegistroImpactoCreateOrConnectWithoutRestauranteInput | RegistroImpactoCreateOrConnectWithoutRestauranteInput[]
    upsert?: RegistroImpactoUpsertWithWhereUniqueWithoutRestauranteInput | RegistroImpactoUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: RegistroImpactoCreateManyRestauranteInputEnvelope
    set?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    disconnect?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    delete?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    connect?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    update?: RegistroImpactoUpdateWithWhereUniqueWithoutRestauranteInput | RegistroImpactoUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: RegistroImpactoUpdateManyWithWhereWithoutRestauranteInput | RegistroImpactoUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: RegistroImpactoScalarWhereInput | RegistroImpactoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioPerfilUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<UsuarioPerfilCreateWithoutRestauranteInput, UsuarioPerfilUncheckedCreateWithoutRestauranteInput> | UsuarioPerfilCreateWithoutRestauranteInput[] | UsuarioPerfilUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: UsuarioPerfilCreateOrConnectWithoutRestauranteInput | UsuarioPerfilCreateOrConnectWithoutRestauranteInput[]
    upsert?: UsuarioPerfilUpsertWithWhereUniqueWithoutRestauranteInput | UsuarioPerfilUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: UsuarioPerfilCreateManyRestauranteInputEnvelope
    set?: UsuarioPerfilWhereUniqueInput | UsuarioPerfilWhereUniqueInput[]
    disconnect?: UsuarioPerfilWhereUniqueInput | UsuarioPerfilWhereUniqueInput[]
    delete?: UsuarioPerfilWhereUniqueInput | UsuarioPerfilWhereUniqueInput[]
    connect?: UsuarioPerfilWhereUniqueInput | UsuarioPerfilWhereUniqueInput[]
    update?: UsuarioPerfilUpdateWithWhereUniqueWithoutRestauranteInput | UsuarioPerfilUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: UsuarioPerfilUpdateManyWithWhereWithoutRestauranteInput | UsuarioPerfilUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: UsuarioPerfilScalarWhereInput | UsuarioPerfilScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<ProdutoCreateWithoutRestauranteInput, ProdutoUncheckedCreateWithoutRestauranteInput> | ProdutoCreateWithoutRestauranteInput[] | ProdutoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutRestauranteInput | ProdutoCreateOrConnectWithoutRestauranteInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutRestauranteInput | ProdutoUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: ProdutoCreateManyRestauranteInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutRestauranteInput | ProdutoUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutRestauranteInput | ProdutoUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ItemListaComprasUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<ItemListaComprasCreateWithoutRestauranteInput, ItemListaComprasUncheckedCreateWithoutRestauranteInput> | ItemListaComprasCreateWithoutRestauranteInput[] | ItemListaComprasUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: ItemListaComprasCreateOrConnectWithoutRestauranteInput | ItemListaComprasCreateOrConnectWithoutRestauranteInput[]
    upsert?: ItemListaComprasUpsertWithWhereUniqueWithoutRestauranteInput | ItemListaComprasUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: ItemListaComprasCreateManyRestauranteInputEnvelope
    set?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    disconnect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    delete?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    connect?: ItemListaComprasWhereUniqueInput | ItemListaComprasWhereUniqueInput[]
    update?: ItemListaComprasUpdateWithWhereUniqueWithoutRestauranteInput | ItemListaComprasUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: ItemListaComprasUpdateManyWithWhereWithoutRestauranteInput | ItemListaComprasUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: ItemListaComprasScalarWhereInput | ItemListaComprasScalarWhereInput[]
  }

  export type RegistroImpactoUncheckedUpdateManyWithoutRestauranteNestedInput = {
    create?: XOR<RegistroImpactoCreateWithoutRestauranteInput, RegistroImpactoUncheckedCreateWithoutRestauranteInput> | RegistroImpactoCreateWithoutRestauranteInput[] | RegistroImpactoUncheckedCreateWithoutRestauranteInput[]
    connectOrCreate?: RegistroImpactoCreateOrConnectWithoutRestauranteInput | RegistroImpactoCreateOrConnectWithoutRestauranteInput[]
    upsert?: RegistroImpactoUpsertWithWhereUniqueWithoutRestauranteInput | RegistroImpactoUpsertWithWhereUniqueWithoutRestauranteInput[]
    createMany?: RegistroImpactoCreateManyRestauranteInputEnvelope
    set?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    disconnect?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    delete?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    connect?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    update?: RegistroImpactoUpdateWithWhereUniqueWithoutRestauranteInput | RegistroImpactoUpdateWithWhereUniqueWithoutRestauranteInput[]
    updateMany?: RegistroImpactoUpdateManyWithWhereWithoutRestauranteInput | RegistroImpactoUpdateManyWithWhereWithoutRestauranteInput[]
    deleteMany?: RegistroImpactoScalarWhereInput | RegistroImpactoScalarWhereInput[]
  }

  export type RestauranteCadastroCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RestauranteCadastroCreateWithoutUsuariosInput, RestauranteCadastroUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RestauranteCadastroCreateOrConnectWithoutUsuariosInput
    connect?: RestauranteCadastroWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RestauranteCadastroUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RestauranteCadastroCreateWithoutUsuariosInput, RestauranteCadastroUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RestauranteCadastroCreateOrConnectWithoutUsuariosInput
    upsert?: RestauranteCadastroUpsertWithoutUsuariosInput
    connect?: RestauranteCadastroWhereUniqueInput
    update?: XOR<XOR<RestauranteCadastroUpdateToOneWithWhereWithoutUsuariosInput, RestauranteCadastroUpdateWithoutUsuariosInput>, RestauranteCadastroUncheckedUpdateWithoutUsuariosInput>
  }

  export type RestauranteCadastroCreateNestedOneWithoutProdutosInput = {
    create?: XOR<RestauranteCadastroCreateWithoutProdutosInput, RestauranteCadastroUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: RestauranteCadastroCreateOrConnectWithoutProdutosInput
    connect?: RestauranteCadastroWhereUniqueInput
  }

  export type RegistroImpactoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<RegistroImpactoCreateWithoutProdutoInput, RegistroImpactoUncheckedCreateWithoutProdutoInput> | RegistroImpactoCreateWithoutProdutoInput[] | RegistroImpactoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: RegistroImpactoCreateOrConnectWithoutProdutoInput | RegistroImpactoCreateOrConnectWithoutProdutoInput[]
    createMany?: RegistroImpactoCreateManyProdutoInputEnvelope
    connect?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
  }

  export type RegistroImpactoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<RegistroImpactoCreateWithoutProdutoInput, RegistroImpactoUncheckedCreateWithoutProdutoInput> | RegistroImpactoCreateWithoutProdutoInput[] | RegistroImpactoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: RegistroImpactoCreateOrConnectWithoutProdutoInput | RegistroImpactoCreateOrConnectWithoutProdutoInput[]
    createMany?: RegistroImpactoCreateManyProdutoInputEnvelope
    connect?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RestauranteCadastroUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: XOR<RestauranteCadastroCreateWithoutProdutosInput, RestauranteCadastroUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: RestauranteCadastroCreateOrConnectWithoutProdutosInput
    upsert?: RestauranteCadastroUpsertWithoutProdutosInput
    connect?: RestauranteCadastroWhereUniqueInput
    update?: XOR<XOR<RestauranteCadastroUpdateToOneWithWhereWithoutProdutosInput, RestauranteCadastroUpdateWithoutProdutosInput>, RestauranteCadastroUncheckedUpdateWithoutProdutosInput>
  }

  export type RegistroImpactoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<RegistroImpactoCreateWithoutProdutoInput, RegistroImpactoUncheckedCreateWithoutProdutoInput> | RegistroImpactoCreateWithoutProdutoInput[] | RegistroImpactoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: RegistroImpactoCreateOrConnectWithoutProdutoInput | RegistroImpactoCreateOrConnectWithoutProdutoInput[]
    upsert?: RegistroImpactoUpsertWithWhereUniqueWithoutProdutoInput | RegistroImpactoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: RegistroImpactoCreateManyProdutoInputEnvelope
    set?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    disconnect?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    delete?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    connect?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    update?: RegistroImpactoUpdateWithWhereUniqueWithoutProdutoInput | RegistroImpactoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: RegistroImpactoUpdateManyWithWhereWithoutProdutoInput | RegistroImpactoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: RegistroImpactoScalarWhereInput | RegistroImpactoScalarWhereInput[]
  }

  export type RegistroImpactoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<RegistroImpactoCreateWithoutProdutoInput, RegistroImpactoUncheckedCreateWithoutProdutoInput> | RegistroImpactoCreateWithoutProdutoInput[] | RegistroImpactoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: RegistroImpactoCreateOrConnectWithoutProdutoInput | RegistroImpactoCreateOrConnectWithoutProdutoInput[]
    upsert?: RegistroImpactoUpsertWithWhereUniqueWithoutProdutoInput | RegistroImpactoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: RegistroImpactoCreateManyProdutoInputEnvelope
    set?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    disconnect?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    delete?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    connect?: RegistroImpactoWhereUniqueInput | RegistroImpactoWhereUniqueInput[]
    update?: RegistroImpactoUpdateWithWhereUniqueWithoutProdutoInput | RegistroImpactoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: RegistroImpactoUpdateManyWithWhereWithoutProdutoInput | RegistroImpactoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: RegistroImpactoScalarWhereInput | RegistroImpactoScalarWhereInput[]
  }

  export type ProdutoCreateNestedOneWithoutRegistrosImpactoInput = {
    create?: XOR<ProdutoCreateWithoutRegistrosImpactoInput, ProdutoUncheckedCreateWithoutRegistrosImpactoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutRegistrosImpactoInput
    connect?: ProdutoWhereUniqueInput
  }

  export type RestauranteCadastroCreateNestedOneWithoutRegistrosImpactoInput = {
    create?: XOR<RestauranteCadastroCreateWithoutRegistrosImpactoInput, RestauranteCadastroUncheckedCreateWithoutRegistrosImpactoInput>
    connectOrCreate?: RestauranteCadastroCreateOrConnectWithoutRegistrosImpactoInput
    connect?: RestauranteCadastroWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProdutoUpdateOneRequiredWithoutRegistrosImpactoNestedInput = {
    create?: XOR<ProdutoCreateWithoutRegistrosImpactoInput, ProdutoUncheckedCreateWithoutRegistrosImpactoInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutRegistrosImpactoInput
    upsert?: ProdutoUpsertWithoutRegistrosImpactoInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutRegistrosImpactoInput, ProdutoUpdateWithoutRegistrosImpactoInput>, ProdutoUncheckedUpdateWithoutRegistrosImpactoInput>
  }

  export type RestauranteCadastroUpdateOneRequiredWithoutRegistrosImpactoNestedInput = {
    create?: XOR<RestauranteCadastroCreateWithoutRegistrosImpactoInput, RestauranteCadastroUncheckedCreateWithoutRegistrosImpactoInput>
    connectOrCreate?: RestauranteCadastroCreateOrConnectWithoutRegistrosImpactoInput
    upsert?: RestauranteCadastroUpsertWithoutRegistrosImpactoInput
    connect?: RestauranteCadastroWhereUniqueInput
    update?: XOR<XOR<RestauranteCadastroUpdateToOneWithWhereWithoutRegistrosImpactoInput, RestauranteCadastroUpdateWithoutRegistrosImpactoInput>, RestauranteCadastroUncheckedUpdateWithoutRegistrosImpactoInput>
  }

  export type RestauranteCadastroCreateNestedOneWithoutItensListaComprasInput = {
    create?: XOR<RestauranteCadastroCreateWithoutItensListaComprasInput, RestauranteCadastroUncheckedCreateWithoutItensListaComprasInput>
    connectOrCreate?: RestauranteCadastroCreateOrConnectWithoutItensListaComprasInput
    connect?: RestauranteCadastroWhereUniqueInput
  }

  export type RestauranteCadastroUpdateOneRequiredWithoutItensListaComprasNestedInput = {
    create?: XOR<RestauranteCadastroCreateWithoutItensListaComprasInput, RestauranteCadastroUncheckedCreateWithoutItensListaComprasInput>
    connectOrCreate?: RestauranteCadastroCreateOrConnectWithoutItensListaComprasInput
    upsert?: RestauranteCadastroUpsertWithoutItensListaComprasInput
    connect?: RestauranteCadastroWhereUniqueInput
    update?: XOR<XOR<RestauranteCadastroUpdateToOneWithWhereWithoutItensListaComprasInput, RestauranteCadastroUpdateWithoutItensListaComprasInput>, RestauranteCadastroUncheckedUpdateWithoutItensListaComprasInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsuarioPerfilCreateWithoutRestauranteInput = {
    name: string
    fotoUrl?: string | null
    email: string
    password: string
    atualizadoEm?: Date | string
  }

  export type UsuarioPerfilUncheckedCreateWithoutRestauranteInput = {
    id?: number
    name: string
    fotoUrl?: string | null
    email: string
    password: string
    atualizadoEm?: Date | string
  }

  export type UsuarioPerfilCreateOrConnectWithoutRestauranteInput = {
    where: UsuarioPerfilWhereUniqueInput
    create: XOR<UsuarioPerfilCreateWithoutRestauranteInput, UsuarioPerfilUncheckedCreateWithoutRestauranteInput>
  }

  export type UsuarioPerfilCreateManyRestauranteInputEnvelope = {
    data: UsuarioPerfilCreateManyRestauranteInput | UsuarioPerfilCreateManyRestauranteInput[]
  }

  export type ProdutoCreateWithoutRestauranteInput = {
    nome: string
    codigoBarras?: string | null
    localArmazenamento: string
    categoria: string
    quantidade?: number
    unidade?: string
    dataValidade: Date | string
    status?: string
    deuEntradaEm?: Date | string
    atualizadoEm?: Date | string
    registrosImpacto?: RegistroImpactoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutRestauranteInput = {
    id?: number
    nome: string
    codigoBarras?: string | null
    localArmazenamento: string
    categoria: string
    quantidade?: number
    unidade?: string
    dataValidade: Date | string
    status?: string
    deuEntradaEm?: Date | string
    atualizadoEm?: Date | string
    registrosImpacto?: RegistroImpactoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutRestauranteInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutRestauranteInput, ProdutoUncheckedCreateWithoutRestauranteInput>
  }

  export type ProdutoCreateManyRestauranteInputEnvelope = {
    data: ProdutoCreateManyRestauranteInput | ProdutoCreateManyRestauranteInput[]
  }

  export type ItemListaComprasCreateWithoutRestauranteInput = {
    nome: string
    localArmazenamento: string
    categoria?: string
    quantidade?: number
    unidade?: string
    prioridade?: boolean
    comprado?: boolean
    criadoEm?: Date | string
  }

  export type ItemListaComprasUncheckedCreateWithoutRestauranteInput = {
    id?: number
    nome: string
    localArmazenamento: string
    categoria?: string
    quantidade?: number
    unidade?: string
    prioridade?: boolean
    comprado?: boolean
    criadoEm?: Date | string
  }

  export type ItemListaComprasCreateOrConnectWithoutRestauranteInput = {
    where: ItemListaComprasWhereUniqueInput
    create: XOR<ItemListaComprasCreateWithoutRestauranteInput, ItemListaComprasUncheckedCreateWithoutRestauranteInput>
  }

  export type ItemListaComprasCreateManyRestauranteInputEnvelope = {
    data: ItemListaComprasCreateManyRestauranteInput | ItemListaComprasCreateManyRestauranteInput[]
  }

  export type RegistroImpactoCreateWithoutRestauranteInput = {
    quantidadeKg: number
    foiAproveitado: boolean
    criadoEm?: Date | string
    produto: ProdutoCreateNestedOneWithoutRegistrosImpactoInput
  }

  export type RegistroImpactoUncheckedCreateWithoutRestauranteInput = {
    id?: number
    produtoId: number
    quantidadeKg: number
    foiAproveitado: boolean
    criadoEm?: Date | string
  }

  export type RegistroImpactoCreateOrConnectWithoutRestauranteInput = {
    where: RegistroImpactoWhereUniqueInput
    create: XOR<RegistroImpactoCreateWithoutRestauranteInput, RegistroImpactoUncheckedCreateWithoutRestauranteInput>
  }

  export type RegistroImpactoCreateManyRestauranteInputEnvelope = {
    data: RegistroImpactoCreateManyRestauranteInput | RegistroImpactoCreateManyRestauranteInput[]
  }

  export type UsuarioPerfilUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: UsuarioPerfilWhereUniqueInput
    update: XOR<UsuarioPerfilUpdateWithoutRestauranteInput, UsuarioPerfilUncheckedUpdateWithoutRestauranteInput>
    create: XOR<UsuarioPerfilCreateWithoutRestauranteInput, UsuarioPerfilUncheckedCreateWithoutRestauranteInput>
  }

  export type UsuarioPerfilUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: UsuarioPerfilWhereUniqueInput
    data: XOR<UsuarioPerfilUpdateWithoutRestauranteInput, UsuarioPerfilUncheckedUpdateWithoutRestauranteInput>
  }

  export type UsuarioPerfilUpdateManyWithWhereWithoutRestauranteInput = {
    where: UsuarioPerfilScalarWhereInput
    data: XOR<UsuarioPerfilUpdateManyMutationInput, UsuarioPerfilUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type UsuarioPerfilScalarWhereInput = {
    AND?: UsuarioPerfilScalarWhereInput | UsuarioPerfilScalarWhereInput[]
    OR?: UsuarioPerfilScalarWhereInput[]
    NOT?: UsuarioPerfilScalarWhereInput | UsuarioPerfilScalarWhereInput[]
    id?: IntFilter<"UsuarioPerfil"> | number
    name?: StringFilter<"UsuarioPerfil"> | string
    fotoUrl?: StringNullableFilter<"UsuarioPerfil"> | string | null
    email?: StringFilter<"UsuarioPerfil"> | string
    password?: StringFilter<"UsuarioPerfil"> | string
    restauranteId?: IntFilter<"UsuarioPerfil"> | number
    atualizadoEm?: DateTimeFilter<"UsuarioPerfil"> | Date | string
  }

  export type ProdutoUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutRestauranteInput, ProdutoUncheckedUpdateWithoutRestauranteInput>
    create: XOR<ProdutoCreateWithoutRestauranteInput, ProdutoUncheckedCreateWithoutRestauranteInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutRestauranteInput, ProdutoUncheckedUpdateWithoutRestauranteInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutRestauranteInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type ProdutoScalarWhereInput = {
    AND?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    OR?: ProdutoScalarWhereInput[]
    NOT?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    codigoBarras?: StringNullableFilter<"Produto"> | string | null
    localArmazenamento?: StringFilter<"Produto"> | string
    categoria?: StringFilter<"Produto"> | string
    quantidade?: FloatFilter<"Produto"> | number
    unidade?: StringFilter<"Produto"> | string
    dataValidade?: DateTimeFilter<"Produto"> | Date | string
    status?: StringFilter<"Produto"> | string
    restauranteId?: IntFilter<"Produto"> | number
    deuEntradaEm?: DateTimeFilter<"Produto"> | Date | string
    atualizadoEm?: DateTimeFilter<"Produto"> | Date | string
  }

  export type ItemListaComprasUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: ItemListaComprasWhereUniqueInput
    update: XOR<ItemListaComprasUpdateWithoutRestauranteInput, ItemListaComprasUncheckedUpdateWithoutRestauranteInput>
    create: XOR<ItemListaComprasCreateWithoutRestauranteInput, ItemListaComprasUncheckedCreateWithoutRestauranteInput>
  }

  export type ItemListaComprasUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: ItemListaComprasWhereUniqueInput
    data: XOR<ItemListaComprasUpdateWithoutRestauranteInput, ItemListaComprasUncheckedUpdateWithoutRestauranteInput>
  }

  export type ItemListaComprasUpdateManyWithWhereWithoutRestauranteInput = {
    where: ItemListaComprasScalarWhereInput
    data: XOR<ItemListaComprasUpdateManyMutationInput, ItemListaComprasUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type ItemListaComprasScalarWhereInput = {
    AND?: ItemListaComprasScalarWhereInput | ItemListaComprasScalarWhereInput[]
    OR?: ItemListaComprasScalarWhereInput[]
    NOT?: ItemListaComprasScalarWhereInput | ItemListaComprasScalarWhereInput[]
    id?: IntFilter<"ItemListaCompras"> | number
    nome?: StringFilter<"ItemListaCompras"> | string
    localArmazenamento?: StringFilter<"ItemListaCompras"> | string
    categoria?: StringFilter<"ItemListaCompras"> | string
    quantidade?: FloatFilter<"ItemListaCompras"> | number
    unidade?: StringFilter<"ItemListaCompras"> | string
    prioridade?: BoolFilter<"ItemListaCompras"> | boolean
    comprado?: BoolFilter<"ItemListaCompras"> | boolean
    restauranteId?: IntFilter<"ItemListaCompras"> | number
    criadoEm?: DateTimeFilter<"ItemListaCompras"> | Date | string
  }

  export type RegistroImpactoUpsertWithWhereUniqueWithoutRestauranteInput = {
    where: RegistroImpactoWhereUniqueInput
    update: XOR<RegistroImpactoUpdateWithoutRestauranteInput, RegistroImpactoUncheckedUpdateWithoutRestauranteInput>
    create: XOR<RegistroImpactoCreateWithoutRestauranteInput, RegistroImpactoUncheckedCreateWithoutRestauranteInput>
  }

  export type RegistroImpactoUpdateWithWhereUniqueWithoutRestauranteInput = {
    where: RegistroImpactoWhereUniqueInput
    data: XOR<RegistroImpactoUpdateWithoutRestauranteInput, RegistroImpactoUncheckedUpdateWithoutRestauranteInput>
  }

  export type RegistroImpactoUpdateManyWithWhereWithoutRestauranteInput = {
    where: RegistroImpactoScalarWhereInput
    data: XOR<RegistroImpactoUpdateManyMutationInput, RegistroImpactoUncheckedUpdateManyWithoutRestauranteInput>
  }

  export type RegistroImpactoScalarWhereInput = {
    AND?: RegistroImpactoScalarWhereInput | RegistroImpactoScalarWhereInput[]
    OR?: RegistroImpactoScalarWhereInput[]
    NOT?: RegistroImpactoScalarWhereInput | RegistroImpactoScalarWhereInput[]
    id?: IntFilter<"RegistroImpacto"> | number
    produtoId?: IntFilter<"RegistroImpacto"> | number
    restauranteId?: IntFilter<"RegistroImpacto"> | number
    quantidadeKg?: FloatFilter<"RegistroImpacto"> | number
    foiAproveitado?: BoolFilter<"RegistroImpacto"> | boolean
    criadoEm?: DateTimeFilter<"RegistroImpacto"> | Date | string
  }

  export type RestauranteCadastroCreateWithoutUsuariosInput = {
    name: string
    password: string
    endereco: string
    telefone: string
    email: string
    cnpj: string
    atualizadoEm?: Date | string
    produtos?: ProdutoCreateNestedManyWithoutRestauranteInput
    itensListaCompras?: ItemListaComprasCreateNestedManyWithoutRestauranteInput
    registrosImpacto?: RegistroImpactoCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCadastroUncheckedCreateWithoutUsuariosInput = {
    id?: number
    name: string
    password: string
    endereco: string
    telefone: string
    email: string
    cnpj: string
    atualizadoEm?: Date | string
    produtos?: ProdutoUncheckedCreateNestedManyWithoutRestauranteInput
    itensListaCompras?: ItemListaComprasUncheckedCreateNestedManyWithoutRestauranteInput
    registrosImpacto?: RegistroImpactoUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCadastroCreateOrConnectWithoutUsuariosInput = {
    where: RestauranteCadastroWhereUniqueInput
    create: XOR<RestauranteCadastroCreateWithoutUsuariosInput, RestauranteCadastroUncheckedCreateWithoutUsuariosInput>
  }

  export type RestauranteCadastroUpsertWithoutUsuariosInput = {
    update: XOR<RestauranteCadastroUpdateWithoutUsuariosInput, RestauranteCadastroUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RestauranteCadastroCreateWithoutUsuariosInput, RestauranteCadastroUncheckedCreateWithoutUsuariosInput>
    where?: RestauranteCadastroWhereInput
  }

  export type RestauranteCadastroUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RestauranteCadastroWhereInput
    data: XOR<RestauranteCadastroUpdateWithoutUsuariosInput, RestauranteCadastroUncheckedUpdateWithoutUsuariosInput>
  }

  export type RestauranteCadastroUpdateWithoutUsuariosInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUpdateManyWithoutRestauranteNestedInput
    itensListaCompras?: ItemListaComprasUpdateManyWithoutRestauranteNestedInput
    registrosImpacto?: RegistroImpactoUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteCadastroUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtos?: ProdutoUncheckedUpdateManyWithoutRestauranteNestedInput
    itensListaCompras?: ItemListaComprasUncheckedUpdateManyWithoutRestauranteNestedInput
    registrosImpacto?: RegistroImpactoUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteCadastroCreateWithoutProdutosInput = {
    name: string
    password: string
    endereco: string
    telefone: string
    email: string
    cnpj: string
    atualizadoEm?: Date | string
    usuarios?: UsuarioPerfilCreateNestedManyWithoutRestauranteInput
    itensListaCompras?: ItemListaComprasCreateNestedManyWithoutRestauranteInput
    registrosImpacto?: RegistroImpactoCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCadastroUncheckedCreateWithoutProdutosInput = {
    id?: number
    name: string
    password: string
    endereco: string
    telefone: string
    email: string
    cnpj: string
    atualizadoEm?: Date | string
    usuarios?: UsuarioPerfilUncheckedCreateNestedManyWithoutRestauranteInput
    itensListaCompras?: ItemListaComprasUncheckedCreateNestedManyWithoutRestauranteInput
    registrosImpacto?: RegistroImpactoUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCadastroCreateOrConnectWithoutProdutosInput = {
    where: RestauranteCadastroWhereUniqueInput
    create: XOR<RestauranteCadastroCreateWithoutProdutosInput, RestauranteCadastroUncheckedCreateWithoutProdutosInput>
  }

  export type RegistroImpactoCreateWithoutProdutoInput = {
    quantidadeKg: number
    foiAproveitado: boolean
    criadoEm?: Date | string
    restaurante: RestauranteCadastroCreateNestedOneWithoutRegistrosImpactoInput
  }

  export type RegistroImpactoUncheckedCreateWithoutProdutoInput = {
    id?: number
    restauranteId: number
    quantidadeKg: number
    foiAproveitado: boolean
    criadoEm?: Date | string
  }

  export type RegistroImpactoCreateOrConnectWithoutProdutoInput = {
    where: RegistroImpactoWhereUniqueInput
    create: XOR<RegistroImpactoCreateWithoutProdutoInput, RegistroImpactoUncheckedCreateWithoutProdutoInput>
  }

  export type RegistroImpactoCreateManyProdutoInputEnvelope = {
    data: RegistroImpactoCreateManyProdutoInput | RegistroImpactoCreateManyProdutoInput[]
  }

  export type RestauranteCadastroUpsertWithoutProdutosInput = {
    update: XOR<RestauranteCadastroUpdateWithoutProdutosInput, RestauranteCadastroUncheckedUpdateWithoutProdutosInput>
    create: XOR<RestauranteCadastroCreateWithoutProdutosInput, RestauranteCadastroUncheckedCreateWithoutProdutosInput>
    where?: RestauranteCadastroWhereInput
  }

  export type RestauranteCadastroUpdateToOneWithWhereWithoutProdutosInput = {
    where?: RestauranteCadastroWhereInput
    data: XOR<RestauranteCadastroUpdateWithoutProdutosInput, RestauranteCadastroUncheckedUpdateWithoutProdutosInput>
  }

  export type RestauranteCadastroUpdateWithoutProdutosInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioPerfilUpdateManyWithoutRestauranteNestedInput
    itensListaCompras?: ItemListaComprasUpdateManyWithoutRestauranteNestedInput
    registrosImpacto?: RegistroImpactoUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteCadastroUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioPerfilUncheckedUpdateManyWithoutRestauranteNestedInput
    itensListaCompras?: ItemListaComprasUncheckedUpdateManyWithoutRestauranteNestedInput
    registrosImpacto?: RegistroImpactoUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type RegistroImpactoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: RegistroImpactoWhereUniqueInput
    update: XOR<RegistroImpactoUpdateWithoutProdutoInput, RegistroImpactoUncheckedUpdateWithoutProdutoInput>
    create: XOR<RegistroImpactoCreateWithoutProdutoInput, RegistroImpactoUncheckedCreateWithoutProdutoInput>
  }

  export type RegistroImpactoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: RegistroImpactoWhereUniqueInput
    data: XOR<RegistroImpactoUpdateWithoutProdutoInput, RegistroImpactoUncheckedUpdateWithoutProdutoInput>
  }

  export type RegistroImpactoUpdateManyWithWhereWithoutProdutoInput = {
    where: RegistroImpactoScalarWhereInput
    data: XOR<RegistroImpactoUpdateManyMutationInput, RegistroImpactoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ProdutoCreateWithoutRegistrosImpactoInput = {
    nome: string
    codigoBarras?: string | null
    localArmazenamento: string
    categoria: string
    quantidade?: number
    unidade?: string
    dataValidade: Date | string
    status?: string
    deuEntradaEm?: Date | string
    atualizadoEm?: Date | string
    restaurante: RestauranteCadastroCreateNestedOneWithoutProdutosInput
  }

  export type ProdutoUncheckedCreateWithoutRegistrosImpactoInput = {
    id?: number
    nome: string
    codigoBarras?: string | null
    localArmazenamento: string
    categoria: string
    quantidade?: number
    unidade?: string
    dataValidade: Date | string
    status?: string
    restauranteId: number
    deuEntradaEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ProdutoCreateOrConnectWithoutRegistrosImpactoInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutRegistrosImpactoInput, ProdutoUncheckedCreateWithoutRegistrosImpactoInput>
  }

  export type RestauranteCadastroCreateWithoutRegistrosImpactoInput = {
    name: string
    password: string
    endereco: string
    telefone: string
    email: string
    cnpj: string
    atualizadoEm?: Date | string
    usuarios?: UsuarioPerfilCreateNestedManyWithoutRestauranteInput
    produtos?: ProdutoCreateNestedManyWithoutRestauranteInput
    itensListaCompras?: ItemListaComprasCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCadastroUncheckedCreateWithoutRegistrosImpactoInput = {
    id?: number
    name: string
    password: string
    endereco: string
    telefone: string
    email: string
    cnpj: string
    atualizadoEm?: Date | string
    usuarios?: UsuarioPerfilUncheckedCreateNestedManyWithoutRestauranteInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutRestauranteInput
    itensListaCompras?: ItemListaComprasUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCadastroCreateOrConnectWithoutRegistrosImpactoInput = {
    where: RestauranteCadastroWhereUniqueInput
    create: XOR<RestauranteCadastroCreateWithoutRegistrosImpactoInput, RestauranteCadastroUncheckedCreateWithoutRegistrosImpactoInput>
  }

  export type ProdutoUpsertWithoutRegistrosImpactoInput = {
    update: XOR<ProdutoUpdateWithoutRegistrosImpactoInput, ProdutoUncheckedUpdateWithoutRegistrosImpactoInput>
    create: XOR<ProdutoCreateWithoutRegistrosImpactoInput, ProdutoUncheckedCreateWithoutRegistrosImpactoInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutRegistrosImpactoInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutRegistrosImpactoInput, ProdutoUncheckedUpdateWithoutRegistrosImpactoInput>
  }

  export type ProdutoUpdateWithoutRegistrosImpactoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deuEntradaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteCadastroUpdateOneRequiredWithoutProdutosNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutRegistrosImpactoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    restauranteId?: IntFieldUpdateOperationsInput | number
    deuEntradaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestauranteCadastroUpsertWithoutRegistrosImpactoInput = {
    update: XOR<RestauranteCadastroUpdateWithoutRegistrosImpactoInput, RestauranteCadastroUncheckedUpdateWithoutRegistrosImpactoInput>
    create: XOR<RestauranteCadastroCreateWithoutRegistrosImpactoInput, RestauranteCadastroUncheckedCreateWithoutRegistrosImpactoInput>
    where?: RestauranteCadastroWhereInput
  }

  export type RestauranteCadastroUpdateToOneWithWhereWithoutRegistrosImpactoInput = {
    where?: RestauranteCadastroWhereInput
    data: XOR<RestauranteCadastroUpdateWithoutRegistrosImpactoInput, RestauranteCadastroUncheckedUpdateWithoutRegistrosImpactoInput>
  }

  export type RestauranteCadastroUpdateWithoutRegistrosImpactoInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioPerfilUpdateManyWithoutRestauranteNestedInput
    produtos?: ProdutoUpdateManyWithoutRestauranteNestedInput
    itensListaCompras?: ItemListaComprasUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteCadastroUncheckedUpdateWithoutRegistrosImpactoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioPerfilUncheckedUpdateManyWithoutRestauranteNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutRestauranteNestedInput
    itensListaCompras?: ItemListaComprasUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteCadastroCreateWithoutItensListaComprasInput = {
    name: string
    password: string
    endereco: string
    telefone: string
    email: string
    cnpj: string
    atualizadoEm?: Date | string
    usuarios?: UsuarioPerfilCreateNestedManyWithoutRestauranteInput
    produtos?: ProdutoCreateNestedManyWithoutRestauranteInput
    registrosImpacto?: RegistroImpactoCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCadastroUncheckedCreateWithoutItensListaComprasInput = {
    id?: number
    name: string
    password: string
    endereco: string
    telefone: string
    email: string
    cnpj: string
    atualizadoEm?: Date | string
    usuarios?: UsuarioPerfilUncheckedCreateNestedManyWithoutRestauranteInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutRestauranteInput
    registrosImpacto?: RegistroImpactoUncheckedCreateNestedManyWithoutRestauranteInput
  }

  export type RestauranteCadastroCreateOrConnectWithoutItensListaComprasInput = {
    where: RestauranteCadastroWhereUniqueInput
    create: XOR<RestauranteCadastroCreateWithoutItensListaComprasInput, RestauranteCadastroUncheckedCreateWithoutItensListaComprasInput>
  }

  export type RestauranteCadastroUpsertWithoutItensListaComprasInput = {
    update: XOR<RestauranteCadastroUpdateWithoutItensListaComprasInput, RestauranteCadastroUncheckedUpdateWithoutItensListaComprasInput>
    create: XOR<RestauranteCadastroCreateWithoutItensListaComprasInput, RestauranteCadastroUncheckedCreateWithoutItensListaComprasInput>
    where?: RestauranteCadastroWhereInput
  }

  export type RestauranteCadastroUpdateToOneWithWhereWithoutItensListaComprasInput = {
    where?: RestauranteCadastroWhereInput
    data: XOR<RestauranteCadastroUpdateWithoutItensListaComprasInput, RestauranteCadastroUncheckedUpdateWithoutItensListaComprasInput>
  }

  export type RestauranteCadastroUpdateWithoutItensListaComprasInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioPerfilUpdateManyWithoutRestauranteNestedInput
    produtos?: ProdutoUpdateManyWithoutRestauranteNestedInput
    registrosImpacto?: RegistroImpactoUpdateManyWithoutRestauranteNestedInput
  }

  export type RestauranteCadastroUncheckedUpdateWithoutItensListaComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioPerfilUncheckedUpdateManyWithoutRestauranteNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutRestauranteNestedInput
    registrosImpacto?: RegistroImpactoUncheckedUpdateManyWithoutRestauranteNestedInput
  }

  export type UsuarioPerfilCreateManyRestauranteInput = {
    id?: number
    name: string
    fotoUrl?: string | null
    email: string
    password: string
    atualizadoEm?: Date | string
  }

  export type ProdutoCreateManyRestauranteInput = {
    id?: number
    nome: string
    codigoBarras?: string | null
    localArmazenamento: string
    categoria: string
    quantidade?: number
    unidade?: string
    dataValidade: Date | string
    status?: string
    deuEntradaEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ItemListaComprasCreateManyRestauranteInput = {
    id?: number
    nome: string
    localArmazenamento: string
    categoria?: string
    quantidade?: number
    unidade?: string
    prioridade?: boolean
    comprado?: boolean
    criadoEm?: Date | string
  }

  export type RegistroImpactoCreateManyRestauranteInput = {
    id?: number
    produtoId: number
    quantidadeKg: number
    foiAproveitado: boolean
    criadoEm?: Date | string
  }

  export type UsuarioPerfilUpdateWithoutRestauranteInput = {
    name?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioPerfilUncheckedUpdateWithoutRestauranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioPerfilUncheckedUpdateManyWithoutRestauranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUpdateWithoutRestauranteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deuEntradaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    registrosImpacto?: RegistroImpactoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutRestauranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deuEntradaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    registrosImpacto?: RegistroImpactoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutRestauranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    codigoBarras?: NullableStringFieldUpdateOperationsInput | string | null
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    deuEntradaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListaComprasUpdateWithoutRestauranteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    prioridade?: BoolFieldUpdateOperationsInput | boolean
    comprado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListaComprasUncheckedUpdateWithoutRestauranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    prioridade?: BoolFieldUpdateOperationsInput | boolean
    comprado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemListaComprasUncheckedUpdateManyWithoutRestauranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localArmazenamento?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    prioridade?: BoolFieldUpdateOperationsInput | boolean
    comprado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroImpactoUpdateWithoutRestauranteInput = {
    quantidadeKg?: FloatFieldUpdateOperationsInput | number
    foiAproveitado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutRegistrosImpactoNestedInput
  }

  export type RegistroImpactoUncheckedUpdateWithoutRestauranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidadeKg?: FloatFieldUpdateOperationsInput | number
    foiAproveitado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroImpactoUncheckedUpdateManyWithoutRestauranteInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidadeKg?: FloatFieldUpdateOperationsInput | number
    foiAproveitado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroImpactoCreateManyProdutoInput = {
    id?: number
    restauranteId: number
    quantidadeKg: number
    foiAproveitado: boolean
    criadoEm?: Date | string
  }

  export type RegistroImpactoUpdateWithoutProdutoInput = {
    quantidadeKg?: FloatFieldUpdateOperationsInput | number
    foiAproveitado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurante?: RestauranteCadastroUpdateOneRequiredWithoutRegistrosImpactoNestedInput
  }

  export type RegistroImpactoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    restauranteId?: IntFieldUpdateOperationsInput | number
    quantidadeKg?: FloatFieldUpdateOperationsInput | number
    foiAproveitado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroImpactoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    restauranteId?: IntFieldUpdateOperationsInput | number
    quantidadeKg?: FloatFieldUpdateOperationsInput | number
    foiAproveitado?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
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