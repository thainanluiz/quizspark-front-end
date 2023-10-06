import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  // Declarando o formulário em uma variável
  form: FormGroup;

  // Injetando o FormBuilder para construir o formulário
  constructor(private formBuilder: FormBuilder) {
    // Construindo o formulário e definindo as validações
    this.form = this.formBuilder.group({
      matricula: [
        '',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(12),
        ],
      ],
      senha: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  // Método para realizar o login
  login() {}
}
