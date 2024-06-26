import { Component } from '@angular/core';
import { Bike } from '../../models/bike';
import { ImagesService } from '../../services/images.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css',
})
export class ImageGalleryComponent {
  allImages: any [] = [];
  filterby : string = 'all';

  constructor(private imageService: ImagesService) {
    this.allImages = imageService.getImages();
    console.log(
      'Todas las imagenes que me retorno el servicio previamente inyectado '
    );
    console.dir(this.allImages);

    console.log('Buscamos la imagen de id 6 ');
    console.dir(imageService.getImageById(6));
  }

  filterBy(brand: string) {
    this.allImages = this.allImages.filter((image) => image.brand == brand);
    console.log(this.allImages);
  }
}
