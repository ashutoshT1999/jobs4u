import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

export class DataSourceService implements InMemoryDbService{
  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    return {
      candidates: {},
      companies: {},
      jobs:{}
    }
  }

}