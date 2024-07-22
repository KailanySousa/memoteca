import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento, PensamentoResponse } from '../interfaces/Pensamento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(
    private http: HttpClient
  ) { }
  
  listar(pagina: number, itensPorPagina: number = 6): Observable<PensamentoResponse> {
    const params = new HttpParams()
      .set('_page', pagina)
      .set('_per_page', itensPorPagina);
    
    return this.http.get<PensamentoResponse>(this.API, { params });
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  excluir(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento )
  }

}
