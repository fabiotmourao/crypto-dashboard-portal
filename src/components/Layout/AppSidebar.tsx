import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Wallet, BarChart3, ArrowLeftRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const exchanges = [
  { id: "binance", name: "Binance", icon: Wallet },
  { id: "coinbase", name: "Coinbase", icon: BarChart3 },
  { id: "kraken", name: "Kraken", icon: ArrowLeftRight },
];

export function AppSidebar() {
  const { toggleSidebar, isMobile, setOpenMobile } = useSidebar();

  const handleMenuClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar>
      <div className="flex items-center justify-end p-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="h-8 w-8 hover:bg-gray-100 transition-colors duration-200"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Exchanges</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {exchanges.map((exchange) => (
                <SidebarMenuItem key={exchange.id}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Link 
                      to={`/exchange/${exchange.id}`}
                      onClick={handleMenuClick}
                    >
                      <exchange.icon className="h-5 w-5" />
                      <span>{exchange.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}