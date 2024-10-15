import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductsService } from '../../core/services/products/products.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../../core/interfaces/product/i-product';
import { HttpErrorResponse } from '@angular/common/http';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  private readonly _ProductsService = inject(ProductsService);
  productSubscription!: Subscription;

  productList!: IProduct[];

  isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.productSubscription = this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.isLoading = false;
        this.productList = res;
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        console.error(err);
      },
    })
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

}
