"use strict";

import {Environment} from "./environment";
import "./typings"; // imported in order to make typings available for client code

export class Foo {
	public constructor() {
		console.log("Bar!");
	}
	
	public getEnvironment(): Environment {
		return {
			name: "production"
		}
	}
}
