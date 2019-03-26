class RequestHelper {
  static post(uri, data) {
    return this.request("POST", uri, data);
  }

  static patch(uri, data) {
    return this.request("PATCH", uri, data);
  }

  static destroy(uri, data = {}) {
    return this.request("DELETE", uri, data);
  }

  static get(url) {
    return this.request("GET", url, null);
  }

  static request(method, url, data) {
    const urlPartialWithSlashPrefix = url.startsWith("/") ? url : `/${url}`;
    const absoluteUrl = url.includes("http")
      ? urlPartialWithSlashPrefix
      : `https://di-game-api.maartendev.me` + urlPartialWithSlashPrefix;

    const token = localStorage.getItem("token");

    return new Promise((resolve, reject) => {
      return fetch(absoluteUrl, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: data === null ? null : JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }
}

export default RequestHelper;
