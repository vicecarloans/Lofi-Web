# Flux Folder

Place all new ducks in the the `ducks/` folder and add your reducer to `./rootReducer.js`.

Every duck should have an `index.js` file which exports the reducer by default and the actions, selectors:

```js
import reducer from "./reducer";
export default reducer;
export * from "./actions";
export * from "./selectors";
```