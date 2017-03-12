import { OperationType } from "./operation-type.enum";

export abstract class Operation {

    public readonly type: OperationType;
    public readonly description: string;

    constructor(type: OperationType, description: string) {
        this.type = type;
        this.description = description
    }
    
}
