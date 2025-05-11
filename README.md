# JavaScript

## Mistakes

### I. Binary (V1)

- It does not work for `328`, and `805306373`

## Jest Issues with TypeScript ESM

There are no unit tests for now. Jest does currently does not support `Node16`.

```bash
Error: Jest: Failed to parse the TypeScript config file C:\repositories\00-personal\learnings\refactor-yourself\javascript\jest.config.ts
  TSError: ⨯ Unable to compile TypeScript:
error TS5110: Option 'module' must be set to 'Node16' when option 'moduleResolution' is set to 'Node16'.

modules\jest-config\build\readConfigFileAndSetRootDir.js:116:13)
    at async readInitialOptions (C:\repositories\00-personal\learnings\refactor-yourself\javascript\node_modules\jest-config\build\index.js:403:13)
    at async readConfig (C:\repositories\00-personal\learnings\refactor-yourself\javascript\node_modules\jest-config\build\index.js:147:48)
    at async readConfigs (C:\repositories\00-personal\learnings\refactor-yourself\javascript\node_modules\jest-config\build\index.js:424:26)
    at async runCLI (C:\repositories\00-personal\learnings\refactor-yourself\javascript\node_modules\@jest\core\build\cli\index.js:151:59)
    at async Object.run (C:\repositories\00-personal\learnings\refactor-yourself\javascript\node_modules\jest-cli\build\run.js:130:37)
```

Jest dropped the support for `Node16/NodeNext` in `29.2.4` because it caused breaking changes for many users. The support for `Node16/NodeNext` will be in the next major release.

- [[Bug]: When import ESModule from CommonJS, Error: Must use import to load ES Module](https://github.com/kulshekhar/ts-jest/issues/4497)
- [Support Node16/NodeNext value for moduleResolution](https://github.com/kulshekhar/ts-jest/issues/4198)
