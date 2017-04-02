import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe App';
  selectedFeature = 'recipes';

  onNavigate(feature : string){
    this.selectedFeature=feature;
  }
}
