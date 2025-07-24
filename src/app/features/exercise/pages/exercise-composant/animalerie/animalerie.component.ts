import {Component} from "@angular/core";
import {ChatComponent} from "@app/features/exercise/pages/exercise-composant/animalerie/chat/chat.component";
import {ChienComponent} from "@app/features/exercise/pages/exercise-composant/animalerie/chien/chien.component";

@Component({
	selector: "animalerie",
	imports: [ChatComponent, ChienComponent],
	templateUrl: "./animalerie.component.html",
	styleUrl: "./animalerie.component.scss",
})
export class AnimalerieComponent {}
