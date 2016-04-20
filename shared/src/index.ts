"use strict";

/// <reference path="../typings/browser.d.ts"/>

import {Environment} from "./environment";

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
