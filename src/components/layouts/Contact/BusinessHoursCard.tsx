import { Card, CardContent } from "@/components/ui/card";
import { ClockIcon } from "lucide-react";
import { business_hours } from "@/constants/data";

const BusinessHoursCard = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <ClockIcon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-3">Jam Operasional</h3>
            <div className="space-y-2 text-sm">
              {business_hours.map((schedule, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-muted-foreground">{schedule.day}</span>
                  <span className={schedule.is_closed ? "text-red-500" : ""}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessHoursCard;
