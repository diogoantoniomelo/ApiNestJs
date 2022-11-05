export class NestResponse {
    status: number;
    headers: Object;
    body: Object;

    constructor(reposta: NestResponse){
        Object.assign(this, reposta);
    }
}