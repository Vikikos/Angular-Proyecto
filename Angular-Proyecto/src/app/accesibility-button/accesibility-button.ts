import { NgStyle, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'accesibility-button',
  imports: [NgStyle, NgClass],
  templateUrl: './accesibility-button.html',
  styleUrl: './accesibility-button.css',
})
export class AccesibilityButton {
  //mascara de lectura
  maskActive: boolean = false;
  maskTop = 0;
  maskHeight = 50;

  toggleMask() {
    this.maskActive = !this.maskActive;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.maskActive) {
      this.maskTop = event.clientY - this.maskHeight / 2;
      document.getElementById('mask')!.style.display = 'flex';
      //cambiamos el boton
      document.getElementById('maskButton')?.classList.add('btn-yellow');
    }else{
      document.getElementById('mask')!.style.display = 'none';
      document.getElementById('maskButton')?.classList.remove('btn-yellow');
    }
  }

  //resaltar enlaces
  linkActive: boolean = false;
  toggleLink() {
    const links = document.querySelectorAll('a');
    if(this.linkActive){
      links.forEach(link => {
        link.style.backgroundColor = 'transparent',
        link.style.fontWeight = 'normal';
        link.style.margin = 'auto'
      });
      document.getElementById('linkButton')?.classList.remove('btn-yellow');
    }else{
      links.forEach(link => {
        link.style.backgroundColor = '#f1a72c',
        link.style.fontWeight = 'bold';
        link.style.margin = '0.2em'
      });
      document.getElementById('linkButton')?.classList.add('btn-yellow');
    }
    this.linkActive = !this.linkActive;
  }
  //imagenes
  imgActive: boolean = false;
  toggleImage() {
    const images =  document.querySelectorAll('img');
    if(this.imgActive){
      //se bede desactivar
      images.forEach(img => {
        img.style.display = 'block';
      });
      document.getElementById('imgButton')?.classList.remove('btn-yellow');
    }else{
      // se activa
      images.forEach(img => {
        img.style.display = 'none';
      });
      document.getElementById('imgButton')?.classList.add('btn-yellow');
    }
    this.imgActive = !this.imgActive;
  }
  //espacio entre lineas hasta 3 niveles y 0 default
  textSpaceNow: number = 1;
  visualSpace: number = 1;
  default: number = 110;
  changeSpaceLine() {
    const body = document.querySelector('body');
    if(this.textSpaceNow < 4){
      this.textSpaceNow = this.visualSpace;
      document.getElementById('spaceButton')?.classList.add('btn-yellow');
    }else{
      this.textSpaceNow = 1
      this.visualSpace =1;
      document.getElementById('spaceButton')?.classList.remove('btn-yellow');
    }
    body!.style.lineHeight = (this.textSpaceNow).toString();
  }
  //cambiar fuente
  font: boolean = false;
  changeFont() {
    if(this.font){
      //desactivar
      document.querySelector('body')!.style.fontFamily = "";
      document.getElementById('fontButton')?.classList.remove('btn-yellow');
    }else{
      //activar
      document.querySelector('body')!.style.fontFamily = "Lexend";
      document.getElementById('fontButton')?.classList.add('btn-yellow');
    }
    this.font = !this.font
  }

  //escala de grises
  greyScaleAvtive: boolean = false;
  toggleGreyScale() {
    // filter: grayscale();
    if(this.greyScaleAvtive){
      document.getElementById('greyScale')!.style.filter = 'none';
      document.getElementById('greyButton')?.classList.remove('btn-yellow');
    }else{
      document.getElementById('greyScale')!.style.filter = 'grayscale()';
      document.getElementById('greyButton')?.classList.add('btn-yellow');
    }
    this.greyScaleAvtive = !this.greyScaleAvtive;
  }
}
