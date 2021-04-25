import { defaultNetworks } from "@neo-one/cli";

export default {
  contracts: {
    // The NEO•ONE compile command will output the compile results in this directory.
    outDir: "neo-one/compiled",
    // NEO•ONE will look for smart contracts in this directory.
    path: "neo-one/contracts",
    // Set this to true if you want the compile command to output JSON.
    // json: true,
    // Set this to true if you want the compile command to output AVM.
    // avm: false,
    // Set this to true if you want the compile command to output additional debug information.
    // debug: false,
    // Set this to true if you want the compile command to output the AVM in a human-readable format for debugging (requires debug: true).
    // opcodes: false,
  },
  artifacts: {
    // NEO•ONE will store build and deployment artifacts that should be checked in to vcs in this directory.
    path: "neo-one/artifacts",
  },
  migration: {
    // NEO•ONE will load the deployment migration from this path.
    path: "neo-one/migration.ts",
  },
  codegen: {
    // NEO•ONE will write source artifacts to this directory. This directory should be committed.
    path: "src/neo-one",
    // NEO•ONE will generate code in the language specified here. Can be one of 'javascript' or 'typescript'.
    language: "typescript",
    // NEO•ONE will generate client helpers for the framework specified here. Can be one of 'react', 'angular', 'vue' or 'none'.
    framework: "react",
    // Set this to true if you're using an environment like Expo that doesn't handle browserifying dependencies automatically.
    browserify: false,
    // Set this to true if you're running in codesandbox to workaround certain limitations of codesandbox.
    codesandbox: false,
  },
  network: {
    // NEO•ONE will store network data here. This path should be ignored by your vcs, e.g. by specifiying it in a .gitignore file.
    path: ".neo-one/network",
    // NEO•ONE will start the network on this port.
    port: 9040,
  },
  // NEO•ONE will configure various parts of the CLI that require network accounts using the value provided here, for example, when deploying contracts.
  // Refer to the documentation at https://neo-one.io/docs/config-options for more information.
  networks: defaultNetworks,
  neotracker: {
    // NEO•ONE will start an instance of NEO Tracker using this path for local data. This directory should not be committed.
    path: ".neo-one/neotracker",
    // NEO•ONE will start an instance of NEO Tracker using this port.
    port: 9041,
    // Set to false if you'd like NEO•ONE to start an instance of NEO Tracker when running 'neo-one build'. You will need @neotracker/core installed as a dependency for this to work.
    skip: true,
  },
};
