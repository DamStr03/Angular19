import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import {Product} from "./models/product.interface";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";

@Component({
	selector: "exercise-directive",
	imports: [ExerciseHeaderComponent, CurrencyPipe, NgForOf, NgIf],
	templateUrl: "./exercise-directive.component.html",
	styleUrls: ["./exercise-directive.component.scss"],
})
export class ExerciseDirectiveComponent {
	produits: Product[] = [
		{
			nom: "Mayones Guitars Duvell Elite 6 TD Red Burst",
			photo: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_61/618527/20137924_800.jpg",
			prix: 3666,
			prixPromo: 3666,
			qttRestant: 2,
		},
		{
			nom: "Mayones Guitars Duvell Elite 4Ever 6 PB",
			photo: "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/607675.webp",
			prix: 4333,
			prixPromo: 3999,
			qttRestant: 0,
		},
		{
			nom: "Mayones Guitars Duvell Elite 6 Ice Dragon",
			photo: "https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/618528.webp",
			prix: 3790,
			prixPromo: 3499,
			qttRestant: 2,
		},
	];
}
