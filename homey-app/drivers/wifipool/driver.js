import { Driver } from 'homey';

export default class WiFiPoolDriver extends Driver {
  async onInit() {
    this.log('WiFi Pool driver initialized');
  }
}
