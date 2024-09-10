import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  username: string;

  constructor(private animationCtrl: AnimationController, private router: Router) {
    this.username = 'Usuario';  // Asigna un valor inicial a la propiedad username
  }

  ngOnInit() {}

  ngAfterViewInit() {
    // Animación 1: Cuadro que se desplaza y cambia de tamaño
    const squareElement = document.querySelector('.animate-square') as HTMLElement | null;
    if (squareElement) {
      const animation1 = this.animationCtrl.create()
        .addElement(squareElement)
        .iterations(3)
        .duration(1000)
        .fromTo('transform', 'translateX(0) scale(1)', 'translateX(100px) scale(0.8)')
        .fromTo('background', 'red', 'blue');

      const button1 = document.querySelector('.animate-button1') as HTMLElement | null;
      if (button1) {
        button1.addEventListener('click', () => {
          animation1.play();
        });
      }
    } else {
      console.error('El elemento .animate-square no se encontró en el DOM');
    }

    // Animación 2: Rotación de un elemento
    const rotateElement = document.querySelector('.animate-rotate') as HTMLElement | null;
    if (rotateElement) {
      const animation2 = this.animationCtrl.create()
        .addElement(rotateElement)
        .iterations(2)
        .duration(1000)
        .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)');

      const button2 = document.querySelector('.animate-button2') as HTMLElement | null;
      if (button2) {
        button2.addEventListener('click', () => {
          animation2.play();
        });
      }
    } else {
      console.error('El elemento .animate-rotate no se encontró en el DOM');
    }

    // Animación 3: Opacidad que cambia
    const fadeElement = document.querySelector('.animate-fade') as HTMLElement | null;
    if (fadeElement) {
      const animation3 = this.animationCtrl.create()
        .addElement(fadeElement)
        .iterations(2)
        .duration(1000)
        .fromTo('opacity', '1', '0.3');

      const button3 = document.querySelector('.animate-button3') as HTMLElement | null;
      if (button3) {
        button3.addEventListener('click', () => {
          animation3.play();
        });
      }
    } else {
      console.error('El elemento .animate-fade no se encontró en el DOM');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);  // Navega a la página de login
  }
}
