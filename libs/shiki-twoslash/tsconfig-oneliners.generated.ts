export const tsconfig = {
  compilerOptions: `The set of compiler options for your project`,
  allowJs: `Let TS include .JS files in imports`,
  allowSyntheticDefaultImports: `Allow 'import x from y' when a module doesn't have a default export`,
  allowUmdGlobalAccess: `Assume UMD imports are all globally available`,
  allowUnreachableCode: `Error when code will never be called`,
  allowUnusedLabels: `Error when accidentally creating a label`,
  alwaysStrict: `Ensure 'use strict' is always emitted`,
  assumeChangesOnlyAffectDirectDependencies: `A drastically faster, but occasionally inaccurate watch mode option.`,
  baseUrl: `Set a baseurl for relative module names`,
  charset: `Manually set the text encoding for reading files`,
  checkJs: `Run the type checker on .js files in your project`,
  composite: `Used to create multiple build projects`,
  declaration: `Emit d.ts files for referenced files in the project`,
  declarationDir: `Set the root directory for d.ts files to go`,
  declarationMap: `Create sourcemaps for d.ts files`,
  diagnostics: `Output additional information after a compile`,
  disableReferencedProjectLoad: `Reduces the number of projects loaded automatically by TypeScript`,
  disableSizeLimit: `Remove the memory cap on the TypeScript language server`,
  disableSolutionSearching: ` Opt a project out of multi-project reference checking`,
  disableSourceOfProjectReferenceRedirect: `Use d.ts files as the source of truth for tooling between composite project boundries`,
  downlevelIteration: `Emit more compliant, but verbose JavaScript for iterating objects`,
  emitBOM: `Include a byte order mark to output files`,
  emitDeclarationOnly: `Only output d.ts files and not .js files`,
  emitDecoratorMetadata: `Adds additional type metadata to decorators in emitted code`,
  esModuleInterop: `Emit additional JS to ease support for importing commonjs modules`,
  exclude: `Files or patterns to be skipped from the include option`,
  experimentalDecorators: `Enable experimental support for TC39 stage 2 decorators`,
  extendedDiagnostics: `Include a lot of diagnostic information after a compile`,
  extends: `Inherit options for a TSConfig`,
  fallbackPolling: `What the watcher should use if the system runs out of native file watchers`,
  files: `Include a set list of files, does not support globs`,
  forceConsistentCasingInFileNames: `Ensure that casing is correct in imports`,
  generateCpuProfile: `Emit a v8 CPU profile of the compiler run for debugging`,
  importHelpers: `Allow importing helper functions once per project, instead of including them per-file`,
  importsNotUsedAsValues: `Controls which syntax you use for importing types`,
  include: `Files or patterns to include in this project`,
  incremental: `Save .tsbuildinfo files to allow for incremental compilation of projects`,
  inlineSourceMap: `Include sourcemap files inside the emitted JavaScript`,
  inlineSources: `Include sourcemap files inside the emitted JavaScript`,
  isolatedModules: `Ensure that each file can be safely transpiled without relying on other imports`,
  jsx: `Control how JSX is emitted`,
  jsxFactory: `Control the function emitted by JSX`,
  jsxFragmentFactory: `Specifies what identifiers a JSX fragment should be transformed to`,
  keyofStringsOnly: `Make keyof only return strings instead of string or numbers`,
  lib: `Include type definitions you know are available in your JavaScript runtime`,
  listEmittedFiles: `Print the names of emitted files after a compile`,
  listFiles: `Print all of the files read during the compilation`,
  locale: `Set the language of the tsc output`,
  mapRoot: `Set an external root for sourcemaps`,
  maxNodeModuleJsDepth: `How deep should TypeScript run type checking in node_modules`,
  module: `Sets the expected module system for your runtime`,
  moduleResolution: `Allow TypeScript 1.6 module resolution strategies`,
  newLine: `Set the newline character`,
  noEmit: `Do not emit files from a compilation`,
  noEmitHelpers: `Assume helpers are available in the global runtime`,
  noEmitOnError: `Only emit files on a successful compile`,
  noErrorTruncation: `Do not truncate error messages`,
  noFallthroughCasesInSwitch: `Report errors for fallthrough cases in switch statements.`,
  noImplicitAny: `Avoid introducing anys inside your codebase when a type could be specified`,
  noImplicitReturns: `Ensure that all codepaths return in a function`,
  noImplicitThis: `Raise errors when 'this' would be any`,
  noImplicitUseStrict: `Disable 'use strict' in the JS emit`,
  noLib: `Ignore options from lib`,
  noResolve: `Skip ahead-of-time checking for import and <reference files`,
  noStrictGenericChecks: `Disable strict checking of generic signatures in functions.`,
  noUnusedLocals: `Error when a local variable isn't read`,
  noUnusedParameters: `Error when a parameter isn't used`,
  out: `Do not use this`,
  outDir: `Set an output folder for all emitted files`,
  outFile: `Output a single file of all JS files concatenated`,
  paths: `A set of locations to look for imports in`,
  plugins: `A list of language service plugins to include`,
  preserveConstEnums: `Do not erase \`const enum\` declarations in generated code`,
  preserveSymlinks: `Do not resolve symlink paths`,
  preserveWatchOutput: `Do not wipe the console in watch mode`,
  pretty: `Use color and formatting to make compiler errors easier to read`,
  reactNamespace: `Specify the object which 'createElement' is called on in JSX`,
  references: `Provide a structure for composite projects`,
  removeComments: `Remove comments in TypeScript from appearing in JavaScript`,
  resolveJsonModule: `Allow importing .json files`,
  rootDir: `Sets the root folder within your source files`,
  rootDirs: `Set multiple root directories`,
  skipDefaultLibCheck: `use SkipLibCheck instead`,
  skipLibCheck: `Skip type checking of declaration files`,
  sourceMap: `Creates source map files for emitted JavaScript files`,
  sourceRoot: `Sets the root path for debuggers to find the reference source code`,
  strict: `Enable TypeScript's most in-depth type checking rules`,
  strictBindCallApply: `Ensure that 'call', 'bind' and 'apply' have the right arguments`,
  strictFunctionTypes: `Ensure that function parameters are consistent`,
  strictNullChecks: `Ensure that nullability is respected in the type checker`,
  strictPropertyInitialization: `Ensure that all class properties match their types after the constructor has finished`,
  stripInternal: `Remove declarations which have '@internal' in their JSDoc comments`,
  suppressExcessPropertyErrors: `Allow additional properties being set during creation of types`,
  suppressImplicitAnyIndexErrors: `Remove the warning when using string indexes to access unknown properties`,
  target: `Set the supported JavaScript language runtime to transpile to`,
  traceResolution: `Log out paths when resolving all modules`,
  tsBuildInfoFile: `Set the folder for .tsbuildinfo files`,
  typeAcquisition: `Sets of options for Automatic Type Acquisition in JavaScript`,
  typeRoots: `locations where TypeScript should look for type definitions`,
  types: `Used to create an allowlist of types to be included in the compile`,
  useDefineForClassFields: `Use define characteristics for handling class fields`,
  watchDirectory: `Determine how directories are watched`,
  watchFile: `What technique should the watcher use`
}