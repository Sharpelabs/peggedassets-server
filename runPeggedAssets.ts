import { getAllAssets } from "./src/adapters/peggedAssets/getPeggedAsset";

console.log(Date());
  async function measureAsyncFunction() {
    console.time('Async Execution Time');
    await getAllAssets();
    console.timeEnd('Async Execution Time');
  }
  
  console.time('Execution Time');
  (async () => {
    await measureAsyncFunction();
})()
