import {Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import {TileRequestHandlerService} from "../services/tile-request-handler.service";

@Component({
  selector: 'app-preset',
  templateUrl: './preset-tile.component.html',
  styleUrls: ['./preset-tile.component.scss'],
  providers: [TileRequestHandlerService]
})
export class PresetTileComponent implements OnInit {

  private request_handler: TileRequestHandlerService;
  private error_message: any;

  private check_status_process_id: any;

  private is_playing: boolean = false;
  private volume_is_changing: boolean = false;

  // view elements
  @ViewChild('playpauseicon') private play_icon: ElementRef;
  @ViewChild('animcircle') private animation_circle: ElementRef;
  @ViewChild('playbutton') private play_button: ElementRef;
  @ViewChild('volumeslider') private volume_slider: ElementRef;

  // inputs
  @Input() title: string;
  @Input() uuid: string;
  @Input() playlist: any[];
  @Input() volume: number;

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
            if (response) {

              let playing: boolean = response['return']['is_playing'];
              let volume: number= response['return']['volume'];

              if(playing != this.is_playing) {
                  if (playing) {
                    this.uiPlay();
                  } else {
                    this.uiStop();
                  }
              }

              if(volume != this.volume) {
                if(!this.volume_is_changing) {
                  this.uiChangeVolume(volume);
                }
              }

            }
          },
          this.logError
        )

    }, 500);
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
   * change volume
   * @param vol
   */
  public changeVolume(): void {

    // get current volume
    let vol: number = this.volume_slider.nativeElement.value;

    this.request_handler.requestVolumeChange(this.uuid, vol)
      .subscribe(
        data => {
          if (data) {
          }
        },
        this.logError
      );
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

  /**
   * change the ui according to the current volume
   * @param volume
   */
  public uiChangeVolume(volume: number): void {
    this.volume = volume;
    this.volume_slider.nativeElement.value = volume;
  }

  /**
   * disable gui volume update
   */
  public disableVolumeUpdate(): void {
    this.volume_is_changing = true;
  }

  /**
   * enable volume update
   */
  public enableVolumeUpdate(): void {
    this.volume_is_changing = false;
  }


}
