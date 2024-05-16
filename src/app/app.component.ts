import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutosService } from './services/autos.service';
import { ImageGalleryComponent } from "./components/image-gallery/image-gallery.component";
//import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,ImageGalleryComponent]
})
export class AppComponent {
  title = 'ProjectBike';

constructor(private autosService : AutosService){
  console.log(autosService.getAutos());
}


}

