import { Button } from "../shared/Button";
import { HeaderWrapper, HeaderWrapperContent, Logo } from "./styles";

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapperContent>
        <Logo src="/img/logo.png" alt="logo text nextjs" />
        
        <Button variant="primary">Connect wallet</Button>
      </HeaderWrapperContent>
    </HeaderWrapper>
  );
}