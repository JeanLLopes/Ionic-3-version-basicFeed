import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//IMPORTAMOS O ITEM DA CAMERA
//E ADICIONAMOS A A CAMERA AOS NOSSOS PROVIDERS
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
  providers: [
    Camera
  ]
})
export class CameraPage {
  //CRIAMOS UMA VARIAVEL QUE VAI RECEBER O VALOR DE RETORNO
  public imagem = "";

  //ADICIONAMOS A CAMERA AO CONTRUTOR DA CLASSE
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  
  

  ionViewDidLoad() {
       
    console.log('ionViewDidLoad CameraPage');
  }

  //CRIAMOS UMA FUNÇÃO PARA TIRAR A FOTO
  public TirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     //GRAVA O RETORNO NA VARIAVEL
     
     this.imagem = 'data:image/jpeg;base64,' + imageData;
     console.log(this.imagem)
    }, (err) => {
     //VALIDA O ERRO
    });
  }

}
