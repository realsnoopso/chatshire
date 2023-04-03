import axios, { AxiosInstance } from "axios";
import { request } from "http";

const CreateQueryEndpoint = "/queries";

interface CreateFlipsideQuerySuccessResponse {
  token: string;
}

interface GetFlipsideQueryResultSuccessResponse {
  status: string;
  results: any;
}

export class FlipsideClient {
  baseUrl: string;
  apiKey: string;
  userAgent: string;
  httpClient: AxiosInstance;

  constructor(userAgent: string) {
    this.baseUrl = 'https://node-api.flipsidecrypto.com';
    this.apiKey = process.env.FLIPSIDE_API_KEY!;
    this.userAgent = userAgent;
    this.httpClient = axios.create({
      baseURL: this.baseUrl,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
      },
    });
  }
  
  private async executeRequest(req: any): Promise<any> {
    try {
      const resp = await this.httpClient.request(req);
      if (this.checkRequestSucceed(resp)) {
        return resp;
      }
    } catch (error: Error | any) {
      throw error.response;
    }
  }

  private checkRequestSucceed(resp: any): boolean {
    return resp.status >= 200 && resp.status < 300;
  }

  private async getResponseObject(rsp: any): Promise<any> {
    return rsp.data;
  }

  async createFlipsideQuery(query: string): Promise<CreateFlipsideQuerySuccessResponse> {
    console.log('query', query);
    const endpoint = CreateQueryEndpoint;
    const req = {
      method: "POST",
      url: this.baseUrl + endpoint,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
      },
      data: {
        sql: query,
        ttlMinutes: 15,
      },
    };
    const resp = await this.executeRequest(req);
    const output = await this.getResponseObject(resp);
    return output;
  }


async getFlipsideQueryResult(token: string): Promise<GetFlipsideQueryResultSuccessResponse> {
  const endpoint = CreateQueryEndpoint + "/" + token;
  const req = {
    method: "GET",
    url: this.baseUrl + endpoint,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": this.apiKey,
    },
  };
  while (true) {
    const resp = await this.executeRequest(req);
    const output = await this.getResponseObject(resp);
    if (output.status != "running") {
      return output;
    }
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
}

  // async getFlipsideQueryResult(token: string): Promise<GetFlipsideQueryResultSuccessResponse> {
  //   const endpoint = CreateQueryEndpoint + "/" + token;
  //   const req = {
  //     method: "GET",
  //     url: this.baseUrl + endpoint,
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-api-key": this.apiKey,
  //     },
  //   };
  //   const resp = await this.executeRequest(req);
  //   const output = await this.getResponseObject(resp);
  //   if (output.status == "running") {
  //     throw new Error("query is still running");
  //   }
  //   return output;
  // }
}