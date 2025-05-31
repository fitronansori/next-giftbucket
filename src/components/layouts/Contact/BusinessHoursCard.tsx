import { ClockIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { business_hours } from "@/constants/data";

const BusinessHoursCard = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
            <ClockIcon className="text-primary h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="mb-3 font-semibold">Jam Operasional</h3>
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
