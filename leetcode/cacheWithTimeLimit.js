var TimeLimitedCache = function () {
  this.store = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const now = Date.now();
  let existed = false;
  if (this.store.has(key)) {
    const item = this.store.get(key);
    if (item.expireAt > now) existed = true;
    clearTimeout(item.timeoutId);
  }
  const expireAt = now + duration;
  const timeoutId = setTimeout(() => {
    this.store.delete(key);
  }, duration);
  this.store.set(key, { value, expireAt, timeoutId });
  return existed;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const now = Date.now();

  if (!this.store.has(key)) return -1;

  const item = this.store.get(key);

  if (item.expireAt <= now) {
    this.store.delete(key);
    return -1;
  }

  return item.value;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  const now = Date.now();
  let count = 0;

  for (const [key, item] of this.store) {
    if (item.expireAt > now) count++;
    else this.store.delete(key);
  }

  return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
