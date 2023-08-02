import { Typography, Colors, Spacings } from "react-native-ui-lib";

export const configTheme = () => {
  Colors.loadColors({
    pink: "#FF69B4",
    gold: "#FFD700",
    shark: "#212427",
    royalBlue: "#705ae3",
  });

  Typography.loadTypographies({
    h1: { fontSize: 58, fontWeight: "300", lineHeight: 80 },
    h2: { fontSize: 46, fontWeight: "300", lineHeight: 64 },
    l: { fontSize: 18 },
    m: { fontSize: 14 },
    gilroyL: { fontFamily: "GilroyL" },
    gilroyB: { fontFamily: "GilroyB" },
    center: { textAlign: "center" },
  });
};
