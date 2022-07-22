import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../models/transferencia.models';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  // Input indica que vai receber o valor no <app-extrato> através de uma property bind
  // o nome da property bind é transferencia
  // em resumo, é uma criação de uma property bind, que vai receber o valor de uma variavel
  transferencias: any[];

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    //subscribe = "assistir" / "escutar"
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.log(transferencias);
      this.transferencias = transferencias;
    });
  }
}
