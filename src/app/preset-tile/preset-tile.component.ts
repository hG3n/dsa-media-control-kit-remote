import {Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import {TileRequestHandlerService} from "../services/tile-request-handler.service";

@Component({
  selector: 'app-preset',
  templateUrl: './preset-tile.component.html',
  styleUrls: ['./preset-tile.component.css'],
  providers: [TileRequestHandlerService]
})
export class PresetTileComponent implements OnInit {

  private is_playing: boolean = false;
  private request_handler: TileRequestHandlerService;
  private error_message: any;

  private check_status_process_id: any;

  // view elements
  @ViewChild('playpauseicon') private play_icon: ElementRef;
  @ViewChild('animcircle') private animation_circle: ElementRef;
  @ViewChild('playbutton') private play_button: ElementRef;

  // inputs
  @Input() title: string;
  @Input() uuid: string;
  @Input() playlist: any[];

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
    let str: string = "Tile created\n" +
      "uuid:  " + this.uuid + "\n" +
      "title: " + this.title;
    console.log(str);

    // set interval to check playing state
    this.check_status_process_id = setInterval(foo => {
      this.request_handler.requestStatus(this.uuid)
        .subscribe(
          response => {
            if(response) {
              let status: boolean = response["return"][1];
              if(status != this.is_playing) {
                if(status) {
                  this.uiPlay();
                } else {
                  this.uiStop();
                }

              }
            }
          },
          this.logError
        )
    }, 1000);
  }

  /**
   * toggle play pause
   */
  public playPause(): void {

    // play click animation
    this.clickAnimation();

    // check tile state
    if (this.is_playing) {

      // send pause request
      this.request_handler.requestPause(this.uuid)
        .subscribe(
          data => {
            if (data) {
              console.log(data);
              if (data["return"][1] == true) {
                this.uiStop();
              }
            }
          },
          this.logError
        )

    } else {

      // send play request
      this.request_handler.requestPlay(this.uuid)
        .subscribe(
          data => {
            if (data) {
              console.log(data);
              if (data["return"][1] == true) {
                this.uiPlay();
              }
            }
          },
          this.logError
        );
    }

  }

  /**
   * play click animation
   */
  private clickAnimation(): void {
    this.animation_circle.nativeElement.classList.add('play-click-anim');
    var self = this;
    setTimeout((evt: Event) => {
      self.animation_circle.nativeElement.classList.remove("play-click-anim");
    }, 500);
  }

  /**
   * play pause animation
   * @param playing
   */
  private playingAnimation(playing: boolean) {
    if (playing) {
      this.play_button.nativeElement.classList.add('play-pulse-animate');
    } else {
      this.play_button.nativeElement.classList.remove('play-pulse-animate');
    }
  }

  /**
   * log error function
   * @param error
   */
  private logError(error: any): void {
    console.log(error);
    this.error_message = <any>error;
  }

  /**
   * change ui elements to visualize playing state
   */
  public uiPlay(): void {
    this.play_icon.nativeElement.className = "glyphicon glyphicon-stop";
    this.is_playing = true;
    this.playingAnimation(true);
  }

  /**
   * change ui elements to visualize stopped state
   */
  public uiStop(): void {
    this.play_icon.nativeElement.className = "glyphicon glyphicon-play";
    this.is_playing = false;
    this.playingAnimation(false);
  }

}
