const K_VISITORS  = "rmf_visitors_v1";
const K_GENERATED = "rmf_generated_v1";

function pad(n, digits = 5) {
  return String(Math.max(0, parseInt(n) || 0)).padStart(digits, "0");
}

async function safeGet(key) {
  try {
    const r = await window.storage.get(key, true);
    return r ? parseInt(r.value) || 0 : 0;
  } catch { return 0; }
}

async function safeSet(key, val) {
  try { await window.storage.set(key, String(val), true); } catch {}
}

export async function initAnalytics(onUpdate) {
  let visitors  = await safeGet(K_VISITORS);
  let generated = await safeGet(K_GENERATED);

  visitors++;
  await safeSet(K_VISITORS, visitors);

  onUpdate({ visitors, generated });
  return { visitors, generated };
}

export async function trackGenerated(onUpdate) {
  let generated = await safeGet(K_GENERATED);
  generated++;
  await safeSet(K_GENERATED, generated);

  const visitors = await safeGet(K_VISITORS);
  onUpdate({ visitors, generated });
  return generated;
}

export { pad };