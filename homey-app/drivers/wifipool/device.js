import { Device } from 'homey';
import { login, getStats, extractLatestValue } from '../../lib/wifipool.js';

export default class WiFiPoolDevice extends Device {
  async onInit() {
    this.log('WiFi Pool device initialized');
    await this.updateSensors();
    this.setInterval(() => this.updateSensors(), 60 * 1000);
  }

  async updateSensors() {
    const { email, password, domain, io } = this.getSettings();
    try {
      const { cookies } = await login(email, password);
      const data = await getStats(domain, io, cookies);
      const ph = extractLatestValue(data, '4');
      const flow = extractLatestValue(data, '5');
      const redox = extractLatestValue(data, '6');
      if (ph !== null) await this.setCapabilityValue('measure_ph', ph);
      if (flow !== null) await this.setCapabilityValue('measure_flow', flow);
      if (redox !== null) await this.setCapabilityValue('measure_redox', redox);
    } catch (err) {
      this.error('Failed to update sensors', err);
    }
  }
}
