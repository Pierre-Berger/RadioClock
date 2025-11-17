import { Component, OnInit } from '@angular/core';
import {
  DefaultWebViewOptions,
  InAppBrowser,
  iOSAnimation,
  iOSViewStyle,
  ToolbarPosition,
  WebViewOptions,
} from '@capacitor/inappbrowser';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})

export class AppComponent implements OnInit {
  constructor() {}

  async ngOnInit(): Promise<void> {
  //  await InAppBrowser.openInWebView({
  //     url: 'https://radioclock.fr/',
  //     options: {
  //       showURL: false,
  //       showToolbar: false,
  //       clearCache: false,
  //       clearSessionCache: false,
  //       mediaPlaybackRequiresUserAction: false,
  //       closeButtonText: '',
  //       toolbarPosition: ToolbarPosition.TOP,
  //       showNavigationButtons: false,
  //       leftToRight: false,
  //       customWebViewUserAgent: null,
  //       android: {
  //         allowZoom: false,
  //         hardwareBack: false,
  //         pauseMedia: false,
  //       },
  //       iOS: {
  //         allowOverScroll: false,
  //         enableViewportScale: false,
  //         allowInLineMediaPlayback: false,
  //         surpressIncrementalRendering: false,
  //         viewStyle: iOSViewStyle.PAGE_SHEET,
  //         animationEffect: iOSAnimation.COVER_VERTICAL,
  //         allowsBackForwardNavigationGestures: false
  //       }
  //     },
  //   });
  //   await InAppBrowser.addListener('browserClosed', () => {
  //     console.log('browser closed');
  //     App.exitApp();
  //   });
  
  }
}
