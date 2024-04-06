import { useMediaQuery } from "@chakra-ui/react";

const IsMobile = () => {
    const [isMobile] = useMediaQuery("(min-width: 768px)");
    return isMobile;
}

export { IsMobile }