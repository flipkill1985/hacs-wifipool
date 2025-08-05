import { App } from 'homey';
import WiFiPoolDriver from './drivers/wifipool/driver.js';

export default class WiFiPoolApp extends App {
  async onInit() {
    this.driver = new WiFiPoolDriver();
    await this.driver.onInit();
    this.log('WiFi Pool app initialized');
  }
}
