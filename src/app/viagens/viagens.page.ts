import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {
  viagens = [
    { Local: "Cacun", Descricao: "Top", Data_da_Visita: "15 de julho de 2019", Imagem_da_Visita: "https://abrilviagemeturismo.files.wordpress.com/2016/11/2-99369577-cancun.jpg?quality=70&strip=info&w=1024" },
    { Local: "Caribe", Descricao: "Maravilhosa", Data_da_Visita: "10 de Agosto de 2019", Imagem_da_Visita: "https://www.kayak.com.br/news/wp-content/uploads/sites/12/2019/01/dest_mexico_playa-del-carmen_riviera_gettyimages-475645481_universal_withinusageperiod_29418.jpg" }

  ]
  constructor() { }

  ngOnInit() {
  }

}
