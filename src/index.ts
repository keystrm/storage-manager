type StorageOptions = {
    namespace?: string;
    serialize?: (data: any) => string;
    deserialize?: (data: string) => any;
};

class LocalStorageManager {
    private namespace: string;
    private serialize: (data: any) => string;
    private deserialize: (data: string) => any;

    constructor(options: StorageOptions = {}) {
        this.namespace = options.namespace || 'app';
        this.serialize = options.serialize || JSON.stringify;
        this.deserialize = options.deserialize || JSON.parse;
    }

    setItem(key: string, value: any) {
        const storageKey = `${this.namespace}:${key}`;
        const data = this.serialize(value);
        localStorage.setItem(storageKey, data);
    }

    getItem(key: string) {
        const storageKey = `${this.namespace}:${key}`;
        const data = localStorage.getItem(storageKey);
        return data ? this.deserialize(data) : null;
    }

    removeItem(key: string) {
        const storageKey = `${this.namespace}:${key}`;
        localStorage.removeItem(storageKey);
    }
}

export default LocalStorageManager;
