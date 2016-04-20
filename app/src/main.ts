"use strict";

import "shared";
import {Foo} from "shared";

import {App} from "./app";

console.log("Hello world!");

// using shared
let foo:Foo = new Foo();
console.log("Environment: ", foo.getEnvironment());

// bootstrap
App.bootstrap();

