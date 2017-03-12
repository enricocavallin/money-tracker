import { Operation } from "./operation";
import { OperationType } from "./operation-type.enum"

export class Expense extends Operation {

    constructor(description: string) {
        super(OperationType.EXPENSE, description);
    }
}
