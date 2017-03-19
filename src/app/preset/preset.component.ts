import {Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.css']
})
export class PresetComponent implements OnInit {

  private is_playing: boolean = false;

  @ViewChild('playpauseicon') private play_button: ElementRef;

  @Input() title: string;
  @Input() id: number;

  constructor() {
  }

  ngOnInit() {
  }


  public playPause(): void {
    if (this.is_playing) {
      this.play_button.nativeElement.className = "glyphicon glyphicon-play";
      console.log("paused");
      this.is_playing = false;

      // send request to pause
    } else {
      this.play_button.nativeElement.className = "glyphicon glyphicon-pause";
      console.log("play");
      this.is_playing = true;
      // send request to play
    }
  }

}
