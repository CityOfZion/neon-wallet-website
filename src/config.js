import linuxIcon from "./images/linux-logo.png";
import appleIcon from "./images/apple-logo.png";
import windowsIcon from "./images/windows-logo.png";
import androidIcon from "./images/android-logo.png";


export const downloadOptions = [
  {
    id: "IOS",
    display: "iOS",
    href:
        "https://apps.apple.com/my/app/neon-wallet-mobile/id1530111452",
    icon: appleIcon,
  },
  {
    id: "Android",
    display: "Android",
    href:
        "https://play.google.com/store/apps/details?id=io.cityofzion.neon&hl=en_US&gl=US",
    icon: androidIcon,
  },
  {
    id: "WINDOWS",
    display: "Windows",
    href:
        "https://github.com/CityOfZion/neon-wallet/releases/download/v2.14.1/Neon.2.14.1.exe",
    icon: windowsIcon,
    size: "134.56 MB (Neon.exe)",
    fileExtension: "exe"
  },
  {
    id: "MAC_OS",
    display: "Mac OS",
    href:
        "https://github.com/CityOfZion/neon-wallet/releases/download/v2.14.1/Neon.2.14.1.dmg",
    icon: appleIcon,
    size: "134.56 MB (Neon.dmg)",
    fileExtension: "dmg"
  },
  {
    id: "LINUX_DEB",
    display: "Linux",
    href:
        "https://github.com/CityOfZion/neon-wallet/releases/download/v2.14.1/Neon.2.14.1.deb",
    icon: linuxIcon,
    size: "134.56 MB (Neon.deb)",
    fileExtension: "deb"
  },
  {
    id: "LINUX_APPIMAGE",
    display: "Linux",
    href:
        "https://github.com/CityOfZion/neon-wallet/releases/download/v2.14.1/Neon.2.14.1.AppImage",
    icon: linuxIcon,
    size: "134.56 MB (Neon.AppImage)",
    fileExtension: "AppImage"
  }

];

export const latestRelease =
    "https://github.com/CityOfZion/neon-wallet/releases/tag/v2.14.1";
