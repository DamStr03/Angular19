import {Component} from "@angular/core";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";
import {ColorPickerComponent} from "@app/features/exercise/pages/exercise-input-output/components/input-output-exercise1/color-picker/color-picker.component";

@Component({
	selector: "input-output-exercise1",
	imports: [SpoilComponent, ColorPickerComponent],
	templateUrl: "./input-output-exercise1.component.html",
	styleUrls: ["./input-output-exercise1.component.scss"],
})
export class InputOutputExercise1Component {
	imgUrlResultat: string =
		"assets/exercise/input-output/color-picker-resultat.png";
	imgUrlStructure: string =
		"assets/exercise/input-output/color-picker-structure.png";

	colors: string[] = ["Red", "Green", "Blue", "Yellow", "Purple"];
	selectedColor: string = "red";

	onColorUpdate(color: string) {
		this.selectedColor = color;
	}
}
