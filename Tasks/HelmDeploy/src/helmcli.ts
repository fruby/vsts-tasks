import path = require("path");
import tl = require("vsts-task-lib/task");
import fs = require("fs");
import util = require("util");
import os = require("os");
import * as tr from "vsts-task-lib/toolrunner";
import basecommand from "./basecommand"

export default class helmcli extends basecommand {

    private command : string;
    private argument : string[] = [];
    
    public getTool(): string {
        return "helm";
    }

    public login(): void {
        
    }

    public logout(): void  {
        
    }

    public setCommand(command: string): void {
        this.command = command;
    }

    public getCommand(): string {
        return this.command;
    }

    public addArgument(argument: string): void {
        this.argument.push(argument);
    }

    public getArgument(): string[] {
        return this.argument;
    }

    public execHelmCommand() : void {
        var command = this.createCommand();
        command.arg(this.command);
        this.argument.forEach((value) => {
            command.line(value);
        })
        
        this.execCommandSync(command);
    }
}
