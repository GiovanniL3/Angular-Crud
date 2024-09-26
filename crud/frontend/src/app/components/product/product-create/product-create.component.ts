import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { Product } from '../product.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = { /* Produto de teste */
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void { /* pega dados do formulario e envia para o backend */
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMenssage('Produto Criado')
      this.router.navigate(['/products']) /* navega de volta */
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])  /* navega de volta */
  }

}
