interface Command {
    execute() : void;
}

interface UndoableCommand extends Command {
    undo(): void;
}

function f1(c: Command) {
    c.execute();
}

function f2(uc: UndoableCommand) {
    uc.execute();
    uc.undo();
}