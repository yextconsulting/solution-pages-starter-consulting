import { fetchBody } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";

Deno.test("Test My Function Old", async () => {
  let nextPageToken: string | "" = "";
  let fullData: unknown[] = [];
  let pageNumber = 0;
  do {
    const res = fetchBody(nextPageToken);
    const resObj = JSON.parse(await res);
    const data = resObj.data;
    nextPageToken = resObj.nextPageToken;

    console.log(`Found ${data.length} rows on page ${pageNumber}`);

    fullData = [...fullData, ...data];

    pageNumber += 0;
  } while (nextPageToken);
  assertEquals(nextPageToken, nextPageToken);
});

Deno.test("Test2", async () => {
  let nextPageToken: string | "" = "1";
  const input = JSON.stringify({pageToken: 556})

    const res = fetchBody(input);
    const resObj = JSON.parse(await res);
    const data = resObj.data;
    console.log('data', data)
    nextPageToken = resObj.nextPageToken;

    console.log(`Found ${data.list.length} rows`);

    nextPageToken + 1;
  console.log('This is the page number', nextPageToken)
});