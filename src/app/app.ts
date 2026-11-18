import { Component } from '@angular/core';
import { ContainerTabelaComponent } from './container-tabela/container-tabela.component';

@Component({
  selector: 'app-root',
  imports: [ContainerTabelaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}