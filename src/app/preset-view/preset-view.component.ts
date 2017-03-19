import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preset-view',
  templateUrl: './preset-view.component.html',
  styleUrls: ['./preset-view.component.css']
})
export class PresetViewComponent implements OnInit {

  private presets: any[] = [ { id: 123, name: "Regen" }, { id: 123, name: "Schmiede" }, { id: 123, name: "Reise" }, { id: 123, name: "Hodor" }, { id: 123, name: "Gefahr" }, { id: 123, name: "Pups" } ];

  constructor() { }

  ngOnInit() {

  }

}
