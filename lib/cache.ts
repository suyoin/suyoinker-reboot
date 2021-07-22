import LRUCache from "lru-cache";

const rolesCache = new LRUCache<string, RolesField>();

export { rolesCache };
