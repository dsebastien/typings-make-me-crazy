"use strict";

import * as Shared from "shared";

import {App} from "./app";

console.log("Hello world!");

// using shared
let foo:Shared.Foo = new Shared.Foo();
console.log("Environment: ", foo.getEnvironment());

// bootstrap
App.bootstrap();

