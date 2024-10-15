import { Component, Input } from '@angular/core';
import { IProduct } from '../../core/interfaces/product/i-product';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { FirstWordsPipe } from '../../core/pipes/first-words/first-words.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, FirstWordsPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: IProduct;

}
