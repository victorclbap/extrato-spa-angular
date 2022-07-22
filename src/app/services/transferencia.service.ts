import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.models';
import { Observable } from 'rxjs';

//injeção de dependencia = auxilia quando for instanciar os services
// ex: constructor(private service: TransferenciaService), ao invés de new ...
@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  // private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  //httpClient prove metodos para requisições para uma api
  constructor(private httpClient: HttpClient) {
    // this.listaTransferencia = [];
  }

  // get transferencias() {
  //   return this.listaTransferencia;
  // }

  //observable indica que acontece em um momento futuro
  // retorna um observable contendo uma lista de transferencia
  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    // faz o push para listaTransferencia com a data
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    //está adicionando atributo data
    transferencia.data = new Date();
  }
}
