import {Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import {TileRequestHandlerService} from "../tile-request-handler.service";

@Component({
  selector: 'app-preset',
  templateUrl: './preset-tile.component.html',
  styleUrls: ['./preset-tile.component.css'],
  providers: [TileRequestHandlerService]
})
export class PresetTileComponent implements OnInit {

  private is_playing: boolean = false;

  private request_handler: TileRequestHandlerService;

  @ViewChild('playpauseicon') private play_icon: ElementRef;
  @ViewChild('animcircle') private  animation_circle: ElementRef;
  @ViewChild('playbutton') private  play_button: ElementRef;


  @Input() title: string;
  @Input() id: number;

  /**
   * c'tor
   * @param rh
   */
  constructor(rh: TileRequestHandlerService) {
    this.request_handler = rh;
  }

  /**
   * on init lifecycle hook
   */
  ngOnInit() {
  }

  /**
   * toggle play pause
   */
  public playPause(): void {
    if (this.is_playing) {
      this.play_icon.nativeElement.className = "glyphicon glyphicon-play";
      this.is_playing = false;

      this.clickAnimation(false);

      // send request to pause

    } else {
      this.play_icon.nativeElement.className = "glyphicon glyphicon-pause";
      this.is_playing = true;

      this.clickAnimation(true);

      // send request to play

    }
  }

  /**
   * play click animation
   */
  private clickAnimation(playing: boolean): void {
    this.animation_circle.nativeElement.classList.add('play-anim');
    var self = this;
    setTimeout((evt:Event) => {
      self.animation_circle.nativeElement.classList.remove("play-anim");
    }, 500);

    if(playing) {
      this.play_button.nativeElement.classList.add('pulse-animate');
    } else {
      this.play_button.nativeElement.classList.remove('pulse-animate');
    }

  }

}
