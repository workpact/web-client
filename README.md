# INDEPACT Web Client

This uses the [Bloom starter kit](https://github.com/vineyard-bloom/bloom-starter).

### Installation and Set Up
1. Install dependencies with `npm install`


2. For front-end debugging, you will need React and Redux Chrome dev tools. You can find them here:
    * [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
    * [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

3. Copy over any configuration from config-sample into a new config.json file. If you're not running a server on localhost:3000, make sure you point it to the correct api url. Or, if you're not running an api at all, set `useWebServiceStub` to `true`.

4. Boot up the server in the root directory with `npm run dev`. By default, it's served on port 8080.

### Build
1. `npm run build` to generate a production bundle.
