import {Component, Output, EventEmitter} from "@angular/core";

@Component(
  {
    selector: "app-header",
    templateUrl: "./header.component.html"
  }
)
export class Header{
  @Output() selected = new EventEmitter<string>();

  onSelected(name :string){
    this.selected.emit(name)
  }
}
