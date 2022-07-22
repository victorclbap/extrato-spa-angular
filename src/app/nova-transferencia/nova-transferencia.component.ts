import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../models/transferencia.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  // array pq pode ter mais de um arquivo p/ um mesmo componente
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  // Evento que ocorre quando o componente é chamando, mostrando uma informação
  // para propagar é necessário o EventEmitter
  // aoTransferir é o nome do evento

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitada nova transferencia');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      console.log(resultado),
        this.limparCampos(),
        this.router.navigateByUrl('extrato'),
        (error) => console.log(error);
    });
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
