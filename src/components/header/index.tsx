import { Button } from "../shared/Button";
import { HeaderWrapper, HeaderWrapperContent, Logo } from "./styles";

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapperContent>
        <Logo
          src="https://cdn-icons-png.flaticon.com/512/819/819576.png"
          alt="logo text nextjs"
        />

        <Button variant="primary">Connect wallet</Button>
      </HeaderWrapperContent>
    </HeaderWrapper>
  );
}