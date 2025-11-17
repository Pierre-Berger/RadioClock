package io.ionic.starter;

import android.os.Build;
import android.os.Bundle;
import android.content.Intent;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;
import androidx.activity.OnBackPressedCallback;

import android.content.Intent;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
      @Override
      public void handleOnBackPressed() {
        moveTaskToBack(true);
      }
    });

    this.getBridge().getWebView().getSettings().setMediaPlaybackRequiresUserGesture(false);
    this.getBridge().getWebView().setKeepScreenOn(true);


  }
  @Override
  public void onStart() {
    super.onStart();
    Intent serviceIntent = new Intent(this, AudioForegroundService.class);
    stopService(serviceIntent);
  }

  @Override
  public void onStop() {
    super.onStop();
    // On démarre le service de premier plan pour afficher la notification.
    Intent serviceIntent = new Intent(this, AudioForegroundService.class);
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      startForegroundService(serviceIntent);
    } else {
      startService(serviceIntent);
    }
  }
}
