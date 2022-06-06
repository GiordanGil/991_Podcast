import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  src:string = "";

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      params => {
        var id = parseInt(params['id']);
        if (id == 0) {
          this.src = "../../assets/hey.mp3";
        } else if (id == 1) {
          this.src = "../../assets/summer.mp3";
        } else if (id == 2) {
          this.src = "../../assets/ukulele.mp3";
        }
      }
    )
  }

}