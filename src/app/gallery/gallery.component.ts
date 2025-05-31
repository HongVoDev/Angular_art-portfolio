import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent {
  images: string[] = [
    "../assets/gallery1.jpeg",
    "../assets/gallery2.jpeg",
    "../assets/gallery3.JPG",
    "../assets/gallery4.jpeg",
    "../assets/gallery5.jpeg",
    "../assets/gallery6.jpeg",
    "../assets/gallery7.jpeg",
    "../assets/gallery8.jpg",
    "../assets/gallery9.jpeg",
    "../assets/gallery10.jpeg",
    "../assets/gallery11.jpeg",
    "../assets/gallery12.jpeg",
  ];

  selectedImage: string = "";
  currentIndex: number = 0;

  @ViewChild("dialogElement") dialogElement!: ElementRef;

  ngAfterViewInit(): void {}

  openModal(index: number): void {
    this.currentIndex = index;
    this.selectedImage = this.images[index];
    this.dialogElement.nativeElement.showModal();
  }

  closeModal(): void {
    this.dialogElement.nativeElement.close();
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.selectedImage = this.images[this.currentIndex];
  }

  prevImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length; // Handle negative index
    this.selectedImage = this.images[this.currentIndex];
  }
}
