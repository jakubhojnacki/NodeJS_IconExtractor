/**
 * @module "Application" class
 * @description Represents the main application class
 */

"use strict"

import Path from "path";

import { ArgName } from "../application/argName.mjs";
import { ArgTemplateFactory } from "../application/argTemplateFactory.mjs";
import { ConsoleApplication } from "console-library";
import { Logic } from "../logic/logic.mjs";

export class Application extends ConsoleApplication {
    constructor(pRootDirectoryPath) {        
        super(pRootDirectoryPath, (new ArgTemplateFactory()).create(), new Settings());
    }

    runLogic() {
        const sourceDirectoryPath = this.args.get(ArgName.sourceDirectoryPath);
        const destinationDirectoryPath = this.args.get(ArgName.destinationDirectoryPath);
        const logic = new Logic(this, sourceDirectoryPath, destinationDirectoryPath);
    }
}
