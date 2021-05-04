import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  url: string = "https://localhost:44360/api/Login";
  usuario: string = "";
  senha: string = "";

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    var dados = this.formBuilder.group({
      usuario: this.usuario,
      senha: this.senha
    });
    console.log(dados.value)
   
    this.http.post(this.url, dados.value)
    .subscribe(
      (response) =>{
      console.log(response)
      this.router.navigate(['boasvindas']);
    }
    );
  }

}
