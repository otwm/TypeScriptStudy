class Control {
    private state: any;
}

class Control2 {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl{
    select() { }
}

class Button2 extends Control2 {
    select() { }
}

class TextBox extends Control {
    select() { }
}

class Image1 {
    select() { }
}

class Location1 {
    select() { }
}

let a:SelectableControl = (new Button2()) as SelectableControl;
