import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
	selector: "color-picker",
	imports: [FormsModule],
	templateUrl: "./color-picker.component.html",
	styleUrls: ["./color-picker.component.scss"],
})
export class ColorPickerComponent {
	@Input({required: true}) possibleColors!: string[];
	@Output() colorUpdate = new EventEmitter<string>();

	colorPicked: string = "";

	onColorChanged() {
		console.log("Couleur sélectionnée :", this.colorPicked);
		this.colorUpdate.emit(this.colorPicked);
	}
}
