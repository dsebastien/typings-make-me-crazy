"use strict";

import IModule = ng.IModule; // use something that I should get typings for from the shared library

export class App {
    public static bootstrap():void {
        console.log("Bootstrapping the app (fake). If no errors so far then it works!");
    }
}
