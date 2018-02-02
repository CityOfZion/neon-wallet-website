import linuxIcon from "./images/linux-logo.png";
import appleIcon from "./images/apple-logo.png";
import windowsIcon from "./images/windows-logo.png";

export const downloadOptions = [
  {
    id: "WINDOWS",
    display: "Windows",
    href:
      "https://github.com/CityOfZion/neon-wallet/releases/download/0.1.1/Neon.Setup.0.1.1.Windows.exe",
    icon: windowsIcon,
    size: "134.56 MB (Neon.exe)"
  },
  {
    id: "MAC_OS",
    display: "Mac OS",
    href:
      "https://github.com/CityOfZion/neon-wallet/releases/download/0.1.1/Neon-0.1.1.Mac.dmg",
    icon: appleIcon,
    size: "134.56 MB (Neon.dmg)"
  },
  {
    id: "LINUX_DEB",
    display: "Linux",
    href:
      "https://github.com/CityOfZion/neon-wallet/releases/download/0.1.1/Neon_0.1.1_amd64.Linux.deb",
    icon: linuxIcon,
    size: "134.56 MB (Neon.deb)"
  },
  {
    id: "LINUX_APPIMAGE",
    display: "Linux",
    href:
      "https://github.com/CityOfZion/neon-wallet/releases/download/0.1.1/Neon-0.1.1-x86_64.Linux.AppImage",
    icon: linuxIcon,
    size: "134.56 MB (Neon.appimage)"
  }
];

export const latestRelease =
  "https://github.com/CityOfZion/neon-wallet/releases/tag/0.1.1";
