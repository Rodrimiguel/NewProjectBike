import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  getImages() {
    return imagesDetails.slice(0);
  }

  getImageById(id: number) {
    return imagesDetails.slice(0).find(image => image.id == id);
  }

  getImagesByBrand(brand: string) {
    
  }
}

const imagesDetails = [
  { "precio": 123, "id": 1, "brand": "adultosrc", "url": "assets/images/bk1.jpg" },
  { "precio": 1223, "id": 2, "brand": "adultosrc", "url": "assets/images/bk2.jpg" },
  { "precio": 123, "id": 3, "brand": "adultosrc", "url": "assets/images/bk3.jpg" },
  { "precio": 123, "id": 40, "brand": "adultosrc", "url": "assets/images/bk4.jpg" },

  { "precio": 123, "id": 5, "brand": "bkeco", "url": "assets/images/bkeco1.jpg" },
  { "precio": 123, "id": 6, "brand": "bkeco", "url": "assets/images/bkeco2.jpg" },
  { "precio": 1233, "id": 7, "brand": "bkeco", "url": "assets/images/bkeco3.jpg" },
  { "precio": 12343, "id": 8, "brand": "bkeco", "url": "assets/images/bkeco4.jpg" },

  { "precio": 123, "id": 9, "brand": "bkmotor", "url": "assets/images/bkmotor1.jpg" },
  { "precio": 123, "id": 10, "brand": "bkmotor", "url": "assets/images/bkmotor2.jpg" },
  { "precio": 1523, "id": 11, "brand": "bkmotor", "url": "assets/images/bkmotor3.jpg" },
  { "precio": 123, "id": 12, "brand": "bkmotor", "url": "assets/images/bkmotor4.jpg" },
  { "precio": 14523, "id": 13, "brand": "bkmotor", "url": "assets/images/bkmotor5.jpg" },

  { "precio": 123, "id": 14, "brand": "nenesrc", "url": "assets/images/bknenes1.jpg" },
  { "precio": 12563, "id": 15, "brand": "nenesrc", "url": "assets/images/bknenes2.jpg" },
  { "precio": 12453, "id": 16, "brand": "nenesrc", "url": "assets/images/bknenes3.jpg" },
  { "precio": 123, "id": 17, "brand": "nenesrc", "url": "assets/images/bknenes4.jpg" }
];