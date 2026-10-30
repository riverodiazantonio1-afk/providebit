import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Providebit landing narrative", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Asociación Cultural Providebit/);
  assert.match(html, /Proyectos apostólicos en desarrollo/);
  assert.match(html, /Haz posible estos proyectos/);
  assert.match(html, /Bajo tu manto/);
  assert.match(html, /Actualmente, las aportaciones a Providebit no dan derecho a deducción fiscal/);
  assert.match(html, /Editorial Providebit/);
  assert.match(html, /Padres Católicos/);
  assert.match(html, /Te receto un Santo/);
});
