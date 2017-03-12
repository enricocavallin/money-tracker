import { Operation } from "./operation";
import { OperationType } from "./operation-type.enum"

export class Income extends Operation {

    constructor(description: string) {
        super(OperationType.INCOME, description);
    }
}
