import axios from 'axios';

export class HttpRequest {
  public async exec(params: any, context: any, task: any, debug: any) {
    const requestInfo = {
      url: params.url,
      method: params.method || 'get',
      headers: params.headers || {},
      params: params.query || {},
      data: params.body,
      timeout: params.timeout || 3000,
      auth: params.auth,
      responseType: params.responseType || 'json', // options: 'arraybuffer', 'document', 'json', 'text', 'stream', 'blob' (only for browser)
      responseEncoding: params.responseType || 'utf8',
      xsrfCookieName: params.xsrfCookieName || 'XSRF-TOKEN',
      xsrfHeaderName: params.xsrfHeaderName || 'X-XSRF-TOKEN',
      maxContentLength: params.maxContentLength || 64000,
      maxBodyLength: params.maxBodyLength || 64000,
      maxRedirects: params.maxRedirects || 10,
      proxy: params.proxy,
      decompress: params.decompress || true,
    };

    try {
      const response = await axios.request(requestInfo);
      return {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        body: response.data,
      };
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
