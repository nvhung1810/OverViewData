import { Component, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { PhotoServiceService } from 'src/app/service/photo/photo-service.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home-introduce',
  templateUrl: './home-introduce.component.html',
  styleUrls: ['./home-introduce.component.css']
})
export class HomeIntroduceComponent implements OnInit {
    public value: any;
    
    images: any[];

    constructor(
            private _PhotoServiceService: PhotoServiceService,
            private wowService: NgwWowService
        ) {}

    responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    ngOnInit() {
        this._PhotoServiceService.getImages().then(images => this.images = images);
        this.wowService.init();
    }
}
