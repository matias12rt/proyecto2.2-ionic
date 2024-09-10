import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {

  @ViewChild('cartIcon', { read: ElementRef }) cartIcon!: ElementRef;
  private addToCartAnimation!: Animation;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() { }

  addToCart(event: Event, productImg: HTMLImageElement) {
    const productRect = productImg.getBoundingClientRect();
    const cartRect = this.cartIcon.nativeElement.getBoundingClientRect();

    // Crear la animación para mover la imagen al carrito
    this.addToCartAnimation = this.animationCtrl.create()
      .addElement(productImg)
      .duration(800)
      .keyframes([
        { offset: 0, transform: `translate(0, 0) scale(1)`, opacity: '1' },
        { offset: 0.5, transform: `translate(${(cartRect.left - productRect.left) / 2}px, ${(cartRect.top - productRect.top) / 2}px) scale(0.5)`, opacity: '0.7' },
        { offset: 1, transform: `translate(${cartRect.left - productRect.left}px, ${cartRect.top - productRect.top}px) scale(0.2)`, opacity: '0' },
      ]);

    // Ejecutar la animación
    this.addToCartAnimation.play().then(() => {
      // Crear la animación para regresar la imagen a su posición original
      const resetAnimation = this.animationCtrl.create()
        .addElement(productImg)
        .duration(500)
        .keyframes([
          { offset: 0, transform: `translate(${cartRect.left - productRect.left}px, ${cartRect.top - productRect.top}px) scale(0.2)`, opacity: '0' },
          { offset: 1, transform: `translate(0, 0) scale(1)`, opacity: '1' },
        ]);

      // Ejecutar la animación de regreso
      resetAnimation.play();
    });
  }
}
