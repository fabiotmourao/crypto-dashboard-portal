import { useParams } from "react-router-dom";
import { AppLayout } from "@/components/Layout/AppLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Fake data for different exchanges with unique styling
const exchangeData = {
  binance: {
    balance: "123,456.78 USD",
    color: "bg-yellow-500",
    textColor: "text-yellow-700",
    assets: [
      { name: "Bitcoin", amount: "2.5 BTC", value: "95,000 USD", change: "+5.2%" },
      { name: "Ethereum", amount: "30 ETH", value: "75,000 USD", change: "+3.1%" },
      { name: "Solana", amount: "500 SOL", value: "45,000 USD", change: "+8.4%" },
    ],
  },
  coinbase: {
    balance: "98,765.43 USD",
    color: "bg-blue-500",
    textColor: "text-blue-700",
    assets: [
      { name: "Bitcoin", amount: "1.8 BTC", value: "68,400 USD", change: "-2.1%" },
      { name: "Ethereum", amount: "25 ETH", value: "62,500 USD", change: "+1.8%" },
      { name: "Cardano", amount: "10000 ADA", value: "12,000 USD", change: "+4.2%" },
    ],
  },
  kraken: {
    balance: "78,901.23 USD",
    color: "bg-purple-500",
    textColor: "text-purple-700",
    assets: [
      { name: "Bitcoin", amount: "1.2 BTC", value: "45,600 USD", change: "+6.7%" },
      { name: "Ethereum", amount: "15 ETH", value: "37,500 USD", change: "-1.5%" },
      { name: "Polkadot", amount: "1000 DOT", value: "25,000 USD", change: "+2.9%" },
    ],
  },
};

export default function Exchange() {
  const { exchangeId } = useParams();
  const data = exchangeId ? exchangeData[exchangeId as keyof typeof exchangeData] : null;

  if (!data) {
    return (
      <AppLayout>
        <div className="text-center">Exchange not found</div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        <Card className={`${data.color} bg-opacity-10 transition-colors duration-200 hover:bg-opacity-20`}>
          <CardHeader>
            <CardTitle className={data.textColor}>Total Balance</CardTitle>
            <CardDescription>Your current balance on this exchange</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.balance}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className={data.textColor}>Your Assets</CardTitle>
            <CardDescription>Current holdings on this exchange</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.assets.map((asset) => (
                <div
                  key={asset.name}
                  className="flex items-center justify-between border-b pb-4 last:border-0 hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200"
                >
                  <div>
                    <h4 className="font-medium">{asset.name}</h4>
                    <p className="text-sm text-gray-500">{asset.amount}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{asset.value}</p>
                    <p className={`text-sm ${asset.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {asset.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}