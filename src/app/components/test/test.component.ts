import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() formTest:any
  @Output() clearFilterTest = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
