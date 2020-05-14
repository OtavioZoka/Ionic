import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {
  amigos = [
    { nome: "Brener Eduardo Rodrigues", idade: 20, niveldeamizade: 5 },
    { nome: "Rafael de Menezes", idade: 24, niveldeamizade: 4 },
    { nome: "Pedro Augusto", idade: 21, niveldeamizade: 3 },
    { nome: "Matheus Castro", idade: 20, niveldeamizade: 4 },
    { nome: "Walyson Cardoso", idade: 28, niveldeamizade: 3 }
  ]
  deletarAmigo(nome) {
    var cont = 0;
    this.amigos.forEach(amigo => {
      cont++;
      if (nome == amigo.nome) {
        this.amigos[cont - 1] = null;
      }
    });
  }
  async presentActionSheet(nome) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.deletarAmigo(nome);
        }
      }, {
        text: 'Editar',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }


}
