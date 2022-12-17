import { HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, fromEvent, Subscription, throttleTime } from 'rxjs';
import { ITEMS_PER_PAGE, TOTAL_COUNT_RESPONSE_HEADER } from '../config/pagination';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {
  products?: Product[];
  page = 1;
  itemsPerPage = ITEMS_PER_PAGE;
  totalItems!: number;
  private eventSub: Subscription;

  constructor(protected productService: ProductService) {
    this.eventSub = Subscription.EMPTY;
  }

  ngOnInit(): void {
    // this.productService
    //   .query({
    //     home: 'home',
    //     page: this.page - 1,
    //     size: this.itemsPerPage,
    //   })
    //   .subscribe({
    //     next: (res: EntityArrayResponseType) => {
    //       this.fillComponentAttributesFromResponseHeader(res.headers);
    //       this.products = res.body as Product[];
    //     },
    //   });

    // fromEvent(window, 'wheel')
    //   .pipe(
    //     filter(() => this.bottomReached()),
    //     throttleTime(200)
    //   )
    //   .subscribe(() => {
    //     if (this.bottomReached() && this.products!.length < this.totalItems) {
    //       this.page++;

    //       this.productService
    //         .query({
    //           home: 'home',
    //           page: this.page - 1,
    //           size: this.itemsPerPage,
    //         })
    //         .subscribe({
    //           next: (res: EntityArrayResponseType) => {
    //             const tmp = res.body as Product[];

    //             this.products = [...(this.products ?? []), ...tmp];
    //           },
    //         });
    //     }
    //   });
  }
  ngOnDestroy(): void {
    this.eventSub.unsubscribe();
  }

  bottomReached(): boolean {
    return window.innerHeight + window.scrollY * 1.1 >= document.body.offsetHeight;
  }

  protected fillComponentAttributesFromResponseHeader(headers: HttpHeaders): void {
    this.totalItems = Number(headers.get(TOTAL_COUNT_RESPONSE_HEADER));
  }

}
