import IModule = ng.IModule;

export class App {
    public static bootstrap():void {
        console.log("Bootstrapping the app");

        const appModule:IModule = angular.module("appModule", []);

        console.log("Done (fake");
    }
}
