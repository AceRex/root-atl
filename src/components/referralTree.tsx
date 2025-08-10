import { Card, CardContent } from "@/components/ui/card";
import { UserIcon } from "lucide-react";

export default function ReferralTree() {
  return (
    <div className="flex flex-col items-center py-4">
      {/* Top Node */}
      <Card className="bg-muted w-40">
        <CardContent className="flex flex-col items-center py-2">
          <UserIcon className="text-muted-foreground mb-2" size={28} />
          <span className="text-sm font-medium">You</span>
        </CardContent>
      </Card>

      {/* Connector */}
      <div className="h-6 w-px bg-muted-foreground/20"></div>

      {/* Bottom Row */}
      <div className="flex items-start justify-center gap-8 relative">
        {/* Horizontal line connecting children */}
        <div className="absolute top-0 left-0 right-0 h-px bg-muted-foreground/20"></div>

        {/* Child 1 */}
        <div className="flex flex-col items-center">
          <div className="h-6 w-px bg-muted-foreground/20"></div>
          <Card className="bg-muted w-40">
            <CardContent className="flex flex-col items-center py-2">
              <UserIcon className="text-muted-foreground mb-2" size={28} />
              <span className="text-sm font-medium">Member Name</span>
              <span className="text-xs text-muted-foreground">Level 2</span>
              <span className="text-xs text-muted-foreground">20 Sales</span>
            </CardContent>
          </Card>
        </div>

        {/* Other members */}
        {[1, 2, 3].map((_, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="h-6 w-px bg-muted-foreground/20"></div>
            <Card className="bg-muted w-40">
              <CardContent className="flex flex-col items-center py-6">
                <UserIcon className="text-muted-foreground mb-2" size={28} />
                <span className="text-sm font-medium">Member 1</span>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
