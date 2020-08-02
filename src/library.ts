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
      responseEncoding: params.responseEncoding || 'utf8',
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

  public static flowedSpec: object = {};
}

const FlowedTypes = {
  str: 'STR',
  obj: 'OBJ',
  num: 'NUM',
  bool: 'BOOL',
};

HttpRequest.flowedSpec = {
  version: '0.1.0',
  params: {
    url: FlowedTypes.str,
    method: FlowedTypes.str,
    headers: FlowedTypes.obj,
    query: FlowedTypes.obj,
    body: FlowedTypes.str,
    timeout: FlowedTypes.num,
    auth: FlowedTypes.obj,
    responseType: FlowedTypes.str,
    responseEncoding: FlowedTypes.str,
    xsrfCookieName: FlowedTypes.str,
    xsrfHeaderName: FlowedTypes.str,
    maxContentLength: FlowedTypes.num,
    maxBodyLength: FlowedTypes.num,
    maxRedirects: FlowedTypes.num,
    proxy: FlowedTypes.obj,
    decompress: FlowedTypes.bool,
  },
  results: {
    status: FlowedTypes.num,
    statusText: FlowedTypes.str,
    headers: FlowedTypes.obj,
    body: FlowedTypes.str,
  },
};
