import { Injectable } from '@angular/core';
import { CategoryDetail } from './util/CategoryDetail.class';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategorys(): CategoryDetail[] {

    var categorys = [] 
    categorys= [
      new CategoryDetail(1,"Category 1", "catg-001","https://www.nederman.com/-/media/nederman-com/knowledge-center/combustible-dust.jpg?h=410&la=pt-BR&w=720&crop=1&hash=236EE34B2737CCC9B13EB301723D9F12"),
      new CategoryDetail(2,"Category 2", "catg-002","https://br.web.img2.acsta.net/r_1280_720/newsv7/20/06/12/18/16/2912051.jpg"),
      new CategoryDetail(3,"Category 3", "catg-003","https://st2.depositphotos.com/1752660/8820/i/600/depositphotos_88204376-stock-photo-spaceship-with-blue-engine-glow.jpg"),
      new CategoryDetail(4,"Category 4", "catg-004","https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/04/26095743/600Alien.jpg"),
      new CategoryDetail(5,"Category 5", "catg-005","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZplaNu3BErooc98L7miBa2FGyLqc_ktAbQ&usqp=CAU"),
      new CategoryDetail(6,"Category 6", "catg-006","https://hips.hearstapps.com/pop.h-cdn.co/assets/15/32/1600x800/landscape-1438612142-hurt-locker.jpg?resize=480:*"),
      new CategoryDetail(7,"Category 7", "catg-007","https://correio-cdn2.cworks.cloud/fileadmin/_processed_/5/8/csm_jogos_mortais_789b78db88.jpg"),
      new CategoryDetail(8,"Category 8", "catg-008","http://www.portalautoshopping.com.br/blog/wp-content/uploads/2017/06/campeonato-brasileiro-de-turismo-1024x682.jpg"),
    ]

    return categorys
  }

}
