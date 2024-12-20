import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Wallet, BarChart3, ArrowLeftRight } from "lucide-react";
import { Link } from "react-router-dom";

const exchanges = [
  { id: "binance", name: "Binance", icon: Wallet },
  { id: "coinbase", name: "Coinbase", icon: BarChart3 },
  { id: "kraken", name: "Kraken", icon: ArrowLeftRight },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Exchanges</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {exchanges.map((exchange) => (
                <SidebarMenuItem key={exchange.id}>
                  <SidebarMenuButton asChild>
                    <Link to={`/exchange/${exchange.id}`}>
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