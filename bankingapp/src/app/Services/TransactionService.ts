import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { Transactions } from '../Models/Transactions';
import { bankAccount } from '../Models/bankAccount';




@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  transactions: Transactions [] = [];

  transaction: Transactions = {
    transid: 0,
    account_debited: 0,
    account_credited: 0,
    transtype: "",
    transamount: 0,
    date: new Date(),
  }

  constructor(private httpClient : HttpClient) { }

  
  getAllTransactions(id: number):Observable<any>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get<Transactions[]>(`http://127.0.0.1:9000/account/${id}/transactions`, {headers: header});
  }
  
  postNewTransaction(transaction: Transactions, type: string, id: number):Observable<any>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.post<Transactions>(`http://127.0.0.1:9000/account/${id}/${type}`, transaction ,{headers:header});
    
    
  }
 
}