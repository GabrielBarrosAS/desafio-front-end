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
      new CategoryDetail(1,"Category 1", "catg-001"),
      new CategoryDetail(2,"Category 2", "catg-002"),
      new CategoryDetail(3,"Category 3", "catg-003"),
      new CategoryDetail(4,"Category 4", "catg-004"),
      new CategoryDetail(5,"Category 5", "catg-005"),
      new CategoryDetail(6,"Category 6", "catg-006"),
      new CategoryDetail(7,"Category 7", "catg-007"),
      new CategoryDetail(8,"Category 8", "catg-008"),
    ]

    return categorys
  }

}
