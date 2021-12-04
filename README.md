# tjbot-cheerlights

Simple server to subscribe to [CheerLights](https://cheerlights.com/) updates via MQTT and shine [TJBot](https://ibmtjbot.github.io/)'s LED the corresponding colour.

## Prereqs

- [Raspberry Pi OS Lite](https://www.raspberrypi.com/software/)
- [Node 14](https://github.com/nodesource/distributions)
- [pigpio](https://github.com/fivdi/pigpio)

## Usage

The server can be configured to start when TJBot powers on using the `cheerlights.service` definition and the [Raspberry Pi systemd daemon instructions](https://www.raspberrypi.com/documentation/computers/using_linux.html#the-systemd-daemon).

